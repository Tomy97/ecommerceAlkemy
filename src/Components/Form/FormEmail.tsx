import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import PropTypes from "prop-types";

const FormEmail = () => {
  const [email, setEmail] = useState<string>('')
  return (
    <>
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="email" placeholder="Enter email" />
    </>
  )
}

FormEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default FormEmail