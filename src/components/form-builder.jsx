import $ from 'jquery';
import React, { Component, createRef, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './nav-bar';

window.jQuery = $;
window.$ = $;

require('jquery-ui-sortable');
require('formBuilder');
require('formBuilder/dist/form-render.min');

var options = {
  // onSave: async (e, formData) => {
  //   const res = await http.post('/forms/new', {
  //     name: 'my_form',
  //     description: 'nothing',
  //     fields: JSON.parse(formData),
  //   });
  //   console.log(res);
  // },
  formData: [],
  controlOrder: [
    'header',
    'paragraph',
    'text',
    'number',
    'date',
    'file',
    'textarea',
    'checkbox-group',
    'radio-group',
    'autocomplete',
    'select',
  ],
  disableFields: ['button', 'hidden'],
};

export default class FormBuilder extends Component {
  fb = createRef();

  componentDidMount() {
    $(this.fb.current).formBuilder(options);
    // $(this.fb.current).formRender(options);
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <h1 className="mt-5 mb-4">Form Builder</h1>
          <div id="form-builder" ref={this.fb} />
        </Container>
      </Fragment>
    );
  }
}
