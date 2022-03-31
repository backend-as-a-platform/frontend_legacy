import { Button, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import '../css/404.css';

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <Form.Control
    id='search'
    type='text'
    placeholder='Filter'
    aria-label='Search Input'
    value={filterText}
    onChange={onFilter}
  />
);

const NotFound = () => {
  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: (row) => row.year,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ];

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>
          come on, let's get you <Link to="/">home</Link>
        </h2>
      </div>
    </div>
    <>
      {/* <DataTable
        columns={columns}
        data={data}
        pagination
        subHeader
        selectableRows
        persistTableHead
      /> */}
    </>
  );
};

export default NotFound;
