import React from "react";
import {Container, Row, Table} from "react-bootstrap";

const postings = [
	{
		jobTitle: 'Software Engineer',
		company: 'Google',
		summary: 'Optimize database queries using Node.js and PostgreSQL. Lead a team of software developers.',
		requiredSkills: 'SQL, Node.js, Python',
		recruiterEmail: 'jacob@google.com'
	},
];

const Home = () => (
	<Container>
		<Row className='h-100 justify-content-center mt-5'>
			<h1 className='display-1 text-center w-100'>Job Postings</h1>
			<Table className='mt-5' striped bordered hover>
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
					postings.map(({ jobTitle, company, summary, requiredSkills, recruiterEmail }) => (
						<tr>
							<td>{jobTitle}</td>
							<td>{company}</td>
							<td>{summary}</td>
							<td>{requiredSkills}</td>
							<td>{recruiterEmail}</td>
						</tr>
					))
				}
				</tbody>
			</Table>
		</Row>
	</Container>
);

export default Home;
