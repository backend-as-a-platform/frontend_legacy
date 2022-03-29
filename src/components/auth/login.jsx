import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Login = (props) => {
  const [show, setShow] = useState(props.show);

  useEffect(() => setShow(props.show), [props.show]);

  return (
    <Modal show={show} onHide={props.hide}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Form
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" required />
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Login;
