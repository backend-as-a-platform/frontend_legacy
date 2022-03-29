import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { dateWithTime } from '../../lib/date';
import http from '../../lib/http';
import Modal from '../modal';

const ListRecords = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [recordToDelete, setRecordToDelete] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = (id) => {
    setRecordToDelete(id);
    setShowModal(true);
  };

  const handleModalClick = () => {
    if (deleteRecord(recordToDelete)) {
      setShowModal(false);
    }
  };

  const handleModalHide = () => setShowModal(false);

  const deleteRecord = async (recordId) => {
    const newRecords = [...records].filter((record) => record._id != recordId);

    try {
      await http.delete(`/forms/${id}/records/${recordId}`);

      setRecords(newRecords);

      return true;
    } catch (_) {
      return false;
    }
  };

  useEffect(async () => {
    try {
      const { data } = await http.get(`forms/${id}/records`);
      setRecords(data);
    } catch (_) {
      navigate('/404');
    }
  }, []);

  return (
    <>
      <h1 className="mb-4">Records</h1>
      <Link to={`/forms/${id}`}>
        <Button variant="outline-primary" className="my-3">
          New record
        </Button>
      </Link>
      {records.length ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, i) => (
                <tr key={record._id}>
                  <td>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/forms/${id}/records/${record._id}`}
                      state={{ data: record }}
                    >
                      {i + 1}
                    </Link>
                  </td>
                  <td>{dateWithTime(record.createdAt)}</td>
                  <td>{dateWithTime(record.updatedAt)}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="mx-1"
                    >
                      Update
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="mx-1"
                      onClick={(e) => handleModalShow(record._id)}
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

export default ListRecords;
