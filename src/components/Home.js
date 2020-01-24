import React, { Component } from 'react';
import ModalBox from '../UI/ModalBox';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { Form, Button } from 'react-bootstrap';

class Home extends Component {
    state = {
        name: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onShowModal(this.state.name)
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <ModalBox 
                    show={this.props.isShowing}
                    hide={this.props.onHideModal}
                    message={this.props.message}
                />
                <Form onSubmit={this.handleSubmit} className="myForm">
                    <Form.Control 
                        type="text"
                        placeholder="Enter Name"
                        onChange={this.handleChange} 
                        value={this.state.name} 
                    />
                    <Button variant="primary" type="submit" className="mt-3">Submit</Button>
                </Form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      isShowing: state.isShowing,
      message: state.message
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onShowModal: (msg) => dispatch(actions.showModal(msg)),
      onHideModal: () => dispatch(actions.hideModal())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);