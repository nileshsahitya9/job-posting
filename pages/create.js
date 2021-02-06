import React from "react";
import Link from "next/link";
import {Button, Container, Row, Form} from "react-bootstrap";

const Create = () => {
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
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Job Summary</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Required Skills</Form.Label>
            <Form.Control as="textarea" rows={1} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Recruiter Email Address</Form.Label>
            <Form.Control type="email" placeholder="name@company.com" />
          </Form.Group>
        </Form>
        <Button size='lg' className='mt-5'>
          Submit
        </Button>
      </Row>
    </Container>
  )
};

export default Create;
