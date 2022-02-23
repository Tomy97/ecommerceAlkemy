import { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import FormEmail from '../Components/Form/FormEmail'
import FormPassword from '../Components/Form/FormPassword'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  
  const [password, setPassword] = useState<string>('')
  return (
      <Col md={12} className="justify-content-center d-flex">
        <Card style={{ width: '25rem' }} >
          <Card.Body>
            <Card.Title>Login Form</Card.Title>
            <Form>
              <Form.Group className="mb-3">
                <FormEmail title="Email" />
              { email }
            </Form.Group>
              <Form.Group className="mb-3">
                <FormPassword title="Password" />  
              { password }  
            </Form.Group>
            <Row>
              <Col md={12} className='justify-content-end d-flex' >
                <Button variant="primary" type="submit"  >
                  Submit
                </Button>
              </Col>
            </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
  )
}

export default Login
