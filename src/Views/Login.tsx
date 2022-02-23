import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import FormEmail from '../Components/Form/FormEmail'

const Login = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Login Form</Card.Title>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FormEmail />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default Login
