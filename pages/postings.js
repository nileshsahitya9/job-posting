import React from "react";
import Link from "next/link";
import { Container, Row, Table, Button, Form } from "react-bootstrap";

const Postings = ({ posts: postList }) => {

	const { useState } = React;
	const [posts, setPosts] = useState(postList);

	const filterList = ({ target }) => {
		const updatedList = postList.filter(item => {
			return (
				item.title.toLowerCase().includes(target.value.toLowerCase()) ||
				item.company.toLowerCase().includes(target.value.toLowerCase()) ||
				item.email.toLowerCase().includes(target.value.toLowerCase()) ||
				item.summary.toLowerCase().includes(target.value.toLowerCase()) ||
				item.skills.toLowerCase().includes(target.value.toLowerCase())
			)
		});
		setPosts(updatedList);
	}
	return (
		<Container>
			<Link href='/'>
				<Button size='lg' className='mt-5'>
					&larr; Back
			</Button>
			</Link>
			<Row className='h-100 justify-content-center'>
				<h1 className='display-1 text-center w-100'>Job Postings</h1>
				<div className="d-flex justify-content-start w-100">
					<Form.Control className="w-50" type="text" placeholder="Search" onChange={filterList} />
				</div>
				<Table responsive className='mt-5' striped bordered hover>
					<thead>
						<tr>
							<th>Job Title</th>
							<th>Company</th>
							<th>Job Summary</th>
							<th>Required Skills</th>
							<th>Recruiter Email</th>
						</tr>
					</thead>
					<tbody>
						{
							posts.map(({ title, company, summary, skills, email }, id) => (
								<tr key={company + id}>
									<td>{title}</td>
									<td>{company}</td>
									<td>{summary}</td>
									<td>{skills}</td>
									<td>{email}</td>
								</tr>
							))
						}
					</tbody>
				</Table>
			</Row>
		</Container>
	)
};

export default Postings;

Postings.getInitialProps = async params => {
	let posts = [];
	const res = await fetch(`${process.env.BACKEND_URL}/postings`);
	const resJson = await res.json();
	if (resJson.success) {
		posts = resJson.data.postings;
	}
	return { posts };
};
