import $ from 'jquery';
import { Component, createRef } from 'react';
import { Container } from 'react-bootstrap';
import Modal from '../modal';
import http from '../../adapters/http';

window.jQuery = $;
window.$ = $;

require('formBuilder/dist/form-render.min');

class RenderForm extends Component {
  constructor(props) {
    super(props);

    this.fb = createRef();

    this.state = {
      formData: '',
      showModal: false,
      modalBody: 'Are you sure?',
    };
  }

  async componentDidMount() {
    await this.populateFormData();

    $(this.fb.current).formRender({ formData: this.state.formData });

    $('#btn-submit').on('click', (e) => {
      this.setState({ showModal: true });
    });
  }

  populateFormData = async () => {
    let formData;

    const submitButton = {
      type: 'button',
      subtype: 'submit',
      label: 'Submit',
      className: 'btn-primary btn',
      name: 'btn-submit',
      value: 'submit',
    };

    if (this.props.location.state) {
      formData = this.props.location.state.data.fields;
    } else {
      try {
        const res = await http.get(this.props.location.pathname);
        formData = res.data.fields;
      } catch (err) {
        window.location.pathname = '/404';
      }
    }

    if (formData) {
      formData.push(submitButton);

      this.setState({ formData });
    }
  };

  handleClick = () => {
    this.setState({ showModal: false });
  };

  handleHide = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Container>
        <div id="form-render" ref={this.fb} />
        <Modal
          title="Confirmation"
          show={this.state.showModal}
          body={this.state.modalBody}
          action={this.handleClick}
          hide={this.handleHide}
        />
      </Container>
    );
  }
}

export default RenderForm;
