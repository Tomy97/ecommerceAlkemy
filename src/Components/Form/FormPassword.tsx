import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from "prop-types";

interface PasswordI {
  title: string
}

const FormPassword = ( { title }: PasswordI ) => {
 const [password, setPassword] = useState<string>('')
  return (
    <>
      <Form.Label>{ title }</Form.Label>
      <Form.Control type="password" placeholder="Inserte su contraseña" />
    </>
  )
}

FormPassword.propTypes = {
  title: PropTypes.string.isRequired
}

export default FormPassword
