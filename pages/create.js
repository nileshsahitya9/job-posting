import React from "react";
import Link from "next/link";
import { Button, Container, Row, Form } from "react-bootstrap";

// calling create api
import { CreateJob } from '../actions/job';

const Create = () => {
  const { useState } = React;

  // initial form state
  const [jobFrom, setJobForm] = useState({
    title: '',
    summary: '',
    email: '',
    skills: '',
    company: ''
  })

  // set form values
  const handleChange = e => {
    const { name, value } = e.target;
    setJobForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // reset form values;
  const reset = () => {
    setJobForm({
      title: '',
      summary: '',
      email: '',
      skills: '',
      company: ''
    });
  }

  // submit form values
  const handleSubmit = async () => {
    // for validation  if(!title || !company || !email)
    let payload = {
      company,
      skills,
      title,
      summary,
      email
    }

    const res = await CreateJob(payload);
    if (res) reset();
  }

  const { company, skills, title, summary, email } = jobFrom;





  return (
    <Container>
      <Link href='/'>
        <Button size='lg' className='mt-5'>
          &larr; Back
        </Button>
      </Link>
      <Row className='h-100 justify-content-center'>
        <h1 className='display-1 text-center w-100'>Create Posting</h1>
        <Form className='w-100 ml-1 mr-1'>
          <Form.Group>
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" value={title} name="title" onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" value={company} name="company" onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Job Summary</Form.Label>
            <Form.Control as="textarea" value={summary} name="summary" rows={3} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Required Skills</Form.Label>
            <Form.Control as="textarea" value={skills} name="skills" rows={1} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Recruiter Email Address</Form.Label>
            <Form.Control type="email" value={email} name="email" placeholder="name@company.com" onChange={handleChange} />
          </Form.Group>
        </Form>
        <Button size='lg' className='mt-5' onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Row>
    </Container>
  )
};

export default Create;
