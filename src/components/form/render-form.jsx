import { Component, createRef } from 'react';
import { Container } from 'react-bootstrap';
import Modal from '../modal';
import http from '../../lib/http';

class RenderForm extends Component {
  constructor(props) {
    super(props);

    this.fb = createRef();

    this.state = {
      form: {
        name: '',
        description: '',
        fields: [],
      },
      showModal: false,
      modalBody: '',
      recordAdded: false,
    };
  }

  async componentDidMount() {
    await this.populateFormData();

    $(this.fb.current).formRender({ formData: this.state.form.fields });
  }

  populateFormData = async () => {
    let form;

    const submitButton = {
      type: 'button',
      subtype: 'submit',
      label: 'Submit',
      className: 'btn btn-outline-primary',
      name: 'submit',
    };

    if (this.props.location.state) {
      form = this.props.location.state.data;
    } else {
      try {
        const res = await http.get(this.props.location.pathname);
        form = res.data;
      } catch (_) {
        this.props.navigate('/404');
      }
    }

    if (form && form.fields) {
      form.fields.push(submitButton);

      this.setState({ form });
    }
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {};

    this.state.form.fields.forEach((field) => {
      data[field.name] = e.target[field.name].value;
    });

    try {
      const { status } = await http.post(
        `${this.props.location.pathname}/records/new`,
        data
      );

      if (status === 200) {
        this.setState({
          showModal: true,
          modalBody: 'Record added successfully!',
          recordAdded: true,
        });
      }
    } catch (_) {
      this.setState({
        showModal: true,
        modalBody: 'Failed to add record, try again!',
      });
    }
  };

  handleModalClick = () => {
    this.setState({ showModal: false });

    if (this.state.recordAdded) {
      this.props.navigate('./records');
    }
  };

  handleModalHide = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Container>
        <form name={this.state.form.name} onSubmit={this.handleFormSubmit}>
          <div id="form-render" ref={this.fb} />
        </form>
        <Modal
          title="Status"
          show={this.state.showModal}
          body={this.state.modalBody}
          btnText="Okay"
          btnVariant="secondary"
          action={this.handleModalClick}
          hide={this.handleModalHide}
        />
      </Container>
    );
  }
}

export default RenderForm;
