import React from "react";
import Link from "next/link";
import {Container, Row, Table, Button} from "react-bootstrap";

const Postings = ({posts}) => (
	<Container>
		<Link href='/'>
			<Button size='lg' className='mt-5'>
				&larr; Back
			</Button>
		</Link>
		<Row className='h-100 justify-content-center'>
			<h1 className='display-1 text-center w-100'>Job Postings</h1>
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
);

export default Postings;

Postings.getInitialProps = async params => {
	const postsData = await fetch(`${process.env.BACKEND_URL}/postings`);
	const posts = await postsData.json();
	return {posts};
};
