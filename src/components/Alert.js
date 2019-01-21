import React from 'react'
import { Alert as AlertReactstrap } from "reactstrap";

const Alert = ({message}) => {
  return <AlertReactstrap>{message}</AlertReactstrap>;
}

export default Alert
