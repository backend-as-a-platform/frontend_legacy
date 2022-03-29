import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Signup = (props) => {
  const [show, setShow] = useState(props.show);

  useEffect(() => setShow(props.show), [props.show]);

  return (
    <Modal show={show} onHide={props.hide}>
      <Modal.Header closeButton>
        <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Form
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>
              First name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="firstname"
              type="text"
              placeholder="First name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Middle name</Form.Label>
            <Form.Control name="lastname" type="text" placeholder="Last name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Last name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="lastname"
              type="text"
              placeholder="Last name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Username <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Username"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Email <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Password <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Signup;
