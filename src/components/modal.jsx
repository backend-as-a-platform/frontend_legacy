import { useEffect, useState } from 'react';
import { Button, Modal as BModal } from 'react-bootstrap';

const Modal = (props) => {
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const hide = () => setShow(false);

  return (
    <>
      <BModal show={show} onHide={props.hide}>
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
