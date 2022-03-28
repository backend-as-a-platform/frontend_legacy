import $ from 'jquery';
import { Component, createRef } from 'react';
import Navbar from '../nav-bar';
import FormModal from './form-modal';
import http from '../../adapters/http';
import Modal from '../modal';

window.jQuery = $;
window.$ = $;

require('jquery-ui-sortable');
require('formBuilder');

export default class FormBuilder extends Component {
  constructor(props) {
    super(props);

    this.formBuilder = createRef();
    this.handler = this.handler.bind();
    this.redirect = this.redirect.bind();

    this.state = {
      name: '',
      description: '',
      error: '',
    };

    this.formOptions = {
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
      onSave: async (e, formData) => {
        const { name, description } = this.state;
        const fields = JSON.parse(formData);

        try {
          await http.post('/forms/new', {
            name,
            description,
            fields,
          });

          window.location.pathname = '/forms';
        } catch ({ response }) {
          this.setState({ error: response.data.reason });
        }
      },
    };
  }

  componentDidUpdate() {
    if (this.state.name && !this.state.error) {
      $(this.formBuilder.current).formBuilder(this.formOptions);
    }
  }

  handler = (name, description) => {
    this.setState({ name, description });
  };

  redirect = () => {
    window.location.pathname = '/forms/new';
  };

  render() {
    return (
      <>
        <h1 className="mb-4">Form Builder</h1>
        <div id="form-builder" ref={this.formBuilder} />
        <FormModal show={!this.state.name} onClick={this.handler} />
        <Modal
          show={this.state.error}
          title="Error"
          body={this.state.error}
          action={this.redirect}
        />
      </>
    );
  }
}