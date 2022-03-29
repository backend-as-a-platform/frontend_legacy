import { useEffect, useState } from 'react';
import { Button, Modal as BModal } from 'react-bootstrap';

const Modal = (props) => {
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <BModal show={show} onHide={props.hide}>
      <BModal.Header closeButton>
        <BModal.Title>{props.title}</BModal.Title>
      </BModal.Header>
      <BModal.Body>{props.body}</BModal.Body>
      <BModal.Footer>
        <Button variant={props.btnVariant} onClick={props.action}>
          {props.btnText}
        </Button>
      </BModal.Footer>
    </BModal>
  );
};

export default Modal;
