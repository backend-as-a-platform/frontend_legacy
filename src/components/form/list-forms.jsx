import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import http from '../../lib/http';
import Modal from '../modal';

const ListForms = () => {
  const [forms, setForms] = useState([]);
  const [formToDelete, setFormToDelete] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = (id) => {
    setFormToDelete(id);
    setShowModal(true);
  };

  const handleModalClick = () => {
    if (deleteForm(formToDelete)) {
      setShowModal(false);
    }
  };

  const handleModalHide = () => setShowModal(false);

  const deleteForm = async (id) => {
    const newForms = [...forms].filter((form) => form._id != id);

    try {
      await http.delete(`/forms/${id}`);

      setForms(newForms);

      return true;
    } catch (_) {
      return false;
    }
  };

  useEffect(async () => {
    const { data } = await http.get('/forms');

    setForms(data);
  }, []);

  return (
    <>
      <h1 className="mb-4">Forms</h1>
      <Link to={'/forms/new'}>
        <Button variant="outline-primary" className="my-3">
          New form
        </Button>
      </Link>
      {forms.length ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Form name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form, i) => (
                <tr key={form._id}>
                  <td>{i + 1}</td>
                  <td>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/forms/${form._id}`}
                      state={{ data: form }}
                    >
                      {form.name}
                    </Link>
                  </td>
                  <td>{form.description}</td>
                  <td>
                    <Link to={`/forms/${form._id}/records`}>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="mx-1"
                      >
                        Records
                      </Button>
                    </Link>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="mx-1"
                      onClick={(e) => {
                        handleModalShow(form._id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal
            title="Confirmation"
            show={showModal}
            body="Are you sure?"
            btnText="Yes"
            btnVariant="danger"
            action={handleModalClick}
            hide={handleModalHide}
          />
        </>
      ) : (
        <h4>Nothing to show</h4>
      )}
    </>
  );
};

export default ListForms;
