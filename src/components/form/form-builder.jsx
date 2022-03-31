import { Component, createRef } from 'react';
import Navbar from '../nav-bar';
import FormModal from './form-modal';
import http from '../../lib/http';
import Modal from '../modal';

export default class FormBuilder extends Component {
  constructor(props) {
    super(props);

    this.formBuilder = createRef();

    this.state = {
      name: '',
      description: '',
      showModal: false,
      modalBody: '',
      formAdded: false,
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
          const { status } = await http.post('/forms/new', {
            name,
            description,
            fields,
          });

          if (status === 200) {
            this.setState({
              showModal: true,
              modalBody: 'Form added successfully!',
              formAdded: true,
            });
          }
        } catch ({ response }) {
          this.setState({ showModal: true });

          if (response.data.reason) {
            this.setState({ modalBody: response.data.reason });
          } else {
            this.setState({ modalBody: 'Failed to add form, try again!' });
          }
        }
      },
    };
  }

  componentDidUpdate() {
    if (this.state.name && !(this.state.showModal || this.state.modalBody)) {
      $(this.formBuilder.current).formBuilder(this.formOptions);
    }
  }

  handleFormModalClick = (name, description) => {
    this.setState({ name, description });
  };

  handleFormModalHide = () => {
    this.props.navigate('/forms');
  };

  handleConfirmationModalClick = () => {
    this.setState({ showModal: false });

    if (this.state.formAdded) {
      this.props.navigate('/forms');
    } else {
      window.location.pathname = '/forms/new';
    }
  };

  handleConfirmationModalHide = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <h1 className="mb-4">Form Builder</h1>
        <div id="form-builder" ref={this.formBuilder} />
        <FormModal
          show={!this.state.name}
          action={this.handleFormModalClick}
          hide={this.handleFormModalHide}
        />
        <Modal
          title="Status"
          show={this.state.showModal}
          body={this.state.modalBody}
          btnText="Okay"
          btnVariant="secondary"
          action={this.handleConfirmationModalClick}
          hide={this.handleConfirmationModalHide}
        />
      </>
    );
  }
}
