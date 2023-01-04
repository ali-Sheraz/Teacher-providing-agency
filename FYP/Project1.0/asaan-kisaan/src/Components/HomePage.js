import React from 'react'
import { Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
    </div>
  )
}

export default HomePage
