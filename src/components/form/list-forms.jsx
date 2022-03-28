import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import http from '../../adapters/http';

const ListForms = () => {
  const [forms, setForms] = useState([]);

  useEffect(async () => {
    const { data } = await http.get('/forms');
    setForms(data);
  }, []);

  return (
    <>
      <h1 className="mb-4">All forms</h1>
      {forms.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Form name</th>
              <th>Description</th>
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
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h4>No forms to show</h4>
      )}
    </>
  );
};

export default ListForms;
