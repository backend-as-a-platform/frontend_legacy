import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const FormModal = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <Modal show={props.show} backdrop="static">
        <Modal.Header>
          <Modal.Title>New form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>
              Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="my-form"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(e) => {
              props.onClick(name, description);
            }}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;
