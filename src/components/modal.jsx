import { Button, Modal as BModal } from 'react-bootstrap';

const Modal = (props) => {
  return (
    <>
      <BModal show={props.show} onHide={props.action}>
        <BModal.Header closeButton>
          <BModal.Title>{props.title}</BModal.Title>
        </BModal.Header>
        <BModal.Body>{props.body}</BModal.Body>
        <BModal.Footer>
          <Button variant="secondary" onClick={props.action}>
            Okay
          </Button>
        </BModal.Footer>
      </BModal>
    </>
  );
};

export default Modal;
