import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import PropTypes from "prop-types";

interface EmailI {
  title: string
}

const FormEmail = ({ title }: EmailI) => {
  const [email, setEmail] = useState<string>('')
  return (
    <>
      <Form.Label> { title } </Form.Label>
      <Form.Control type="email" name="email" onChange={() => setEmail} placeholder="Enter email" />
    </>
  )
}

FormEmail.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FormEmail