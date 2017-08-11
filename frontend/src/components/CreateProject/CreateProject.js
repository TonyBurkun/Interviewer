import React, {Component, PropTypes} from "react";
import TextareaAutosize from "react-autosize-textarea";
import {Link} from "react-router-dom";
import {Modal, Button} from 'react-bootstrap';
import "./CreateProject.css";


class CreateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectTitle: "",
            projectDescription: "",
            showModalAlert: false,
            showModalConfirm: false,
            showModaLCreateAlert: false,
            smt: false
        };
    }
    //----------------------------------
    //      Will be implemented further
    //------------------------------------
    // componentDidMount(props) {
    //     window.addEventListener("beforeunload", this.handleConfirmLeavePage.bind(this));
    // }
    //
    // handleConfirmLeavePage(event) {
    //     let notEmptyFields = this.state.projectTitle || this.state.projectDescription;
    //     if (notEmptyFields && event.target.activeElement.id != "create-project-resetBtn") {
    //         let confirmationMessage = "confirm";
    //         event.returnValue = confirmationMessage;
    //         return confirmationMessage;
    //     }
    // }
    //-------------------------------------
    //      End of the code
    //--------------------------------------

    handleTitleChange(event) {
        this.setState({projectTitle: event.target.value});
    }

    handleDescrChange(event) {
        this.setState({projectDescription: event.target.value});
    }

    validateFormFields(event) {
        let regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        let title = this.state.projectTitle;
        let descr = this.state.projectDescription;
        if ( !regex.test(descr) || !regex.test(title) ) {
            event.preventDefault()
            this.openModalAlert();
        } else {
            this.props.history.push("/projects");
        }
    }

    isFieldsNotEmpty(event) {
        if (this.state.projectTitle || this.state.projectDescription) {
            let confirm = this.openModalConfirm();
        }
    }

    openModalAlert() {
        this.setState({
            showModalAlert: true
        });
    }

    closeModalAlert() {
        this.setState({
            showModalAlert: false
        });
    }

    openModalConfirm() {
        this.setState({
            showModalConfirm: true
        });
    }

    closeModalConfirm() {
        this.setState({
            showModalConfirm: false
        });
    }

    leaveForm() {
        this.resetFormFields();
        this.closeModalConfirm()
    }

    resetFormFields() {
        this.setState({projectTitle: ""});
        this.setState({projectDescription: ""})
    }

    render() {
        return (
                <div className="row sameheight-container">
                    <div className="col-md-12">
                        <div className="title-block">
                            <h3 className="title">Create project</h3>
                            <Link to="/projects" onClick = {() => this.isFieldsNotEmpty()} className="title-description">
                                Back to list
                            </Link>
                        </div>
                        <div className="card card-block sameheight-item">

                            <form onSubmit={(event) => this.validateFormFields(event)}>
                                <div className="form-gro1up">
                                    <label className="control-label">Project Title</label>
                                    <input
                                        id="create-project-title"
                                        type='text'
                                        name="ProjectTitle"
                                        placeholder='Input Title'
                                        className="form-control boxed"
                                        maxLength="100"
                                        value={this.state.projectTitle}
                                        onChange={(event) => this.handleTitleChange(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Project Description</label>
                                    <TextareaAutosize
                                        id="create-project-descr"
                                        name="ProjectDescription"
                                        placeholder="Input Description"
                                        className="form-control boxed"
                                        maxLength="3000"
                                        rows={10}
                                        value={this.state.projectDescription}
                                        onChange={(event) => this.handleDescrChange(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        id="create-project-submitBtn"
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={!this.state.projectTitle || !this.state.projectDescription }
                                    >Create</button>
                                    <button
                                        id="create-project-resetBtn"
                                        type="reset"
                                        className="btn btn-primary create-project-btn"
                                        onClick = {() => this. isFieldsNotEmpty()}
                                    >Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Modal show={this.state.showModalAlert} onHide={() => this.closeModalAlert()}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Please use only latin letters, numbers and special symbols</p>
                        </Modal.Body>
                    </Modal>
                    <Modal show={this.state.showModalConfirm} onHide={() => this.closeModalConfirm()}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to cancel without saving changes?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.leaveForm()}>Cancel</Button>
                            <Button onClick={() => this.closeModalConfirm()} bsStyle="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
        )
    }
}

export default CreateProject;

