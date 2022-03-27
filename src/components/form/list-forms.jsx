import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../nav-bar';
import http from '../../adapters/http';

const ListForms = () => {
  const [forms, setForms] = useState([]);

  useEffect(async () => {
    const { data } = await http.get('/forms');
    setForms(data);
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <h1 className="mt-5 mb-4">All forms</h1>
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
                    to={`/forms/${form.name}`}
                  >
                    {form.name}
                  </Link>
                </td>
                <td>{form.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ListForms;
