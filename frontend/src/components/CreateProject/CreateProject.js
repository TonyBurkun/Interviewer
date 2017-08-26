import React, {Component, PropTypes} from "react";
import TextareaAutosize from "react-autosize-textarea";
import {Link} from "react-router-dom";
import {Modal, Button} from "react-bootstrap";
import "./CreateProject.css";
import {connect} from "react-redux";
import {createProject} from "../../redux/actions/projectActions";

class CreateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectTitle: "",
            projectDescription:"",
            showModalAlert: false,
            showModalConfirm: false,
            showModaLCreateAlert: false,
            alertText: "",
            confirmText: "",
            titleError:"",
            descriptionError: ""
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
        this.setState({titleError: ""});
    }

    handleDescrChange(event) {
        this.setState({projectDescription: event.target.value});
        this.setState({descriptionError:""});
    }

    validateFormFields(event) {
        let regex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        let title = this.state.projectTitle;
        let description = this.state.projectDescription;
        let wrongCharMessage = "Please use only latin letters, numbers and special symbols"
        if (!regex.test(title)) {
            event.preventDefault();
            this.setState({
                titleError: wrongCharMessage
            });
        }
        if (!regex.test(description)) {
            event.preventDefault();
            this.setState({
                descriptionError: wrongCharMessage
            });
        }
        if (!this.isTitleUnique()) {
            event.preventDefault();
            this.setState({
                titleError: "This title already exists. Please, use only unique titles"
            });

        } if (regex.test(title) && regex.test(description) && this.isTitleUnique()) {
            this.props.history.push("/dashboard/projects");
            const {dispatch} = this.props;
            dispatch(createProject({title: title, description: description}));
        }
    }


    isTitleUnique() {
        //const { allProjects } = this.props.newProject.projects;

        let projects = this.props.newProject.projects;

        let isUnique = true;
        let title = this.state.projectTitle;
        projects.forEach(function(item) {
            if (item.title === title) {
                isUnique = false;
            }
        });
        return (isUnique) ? true: false;
    }

    isFieldsNotEmpty() {
        if (this.state.projectTitle || this.state.projectDescription) {
            this.setState({
                confirmText: "Are you sure you want to cancel without saving changes?"
            });
            let confirm = this.openModalConfirm();
        } else {
            this.props.history.push("/dashboard/projects");
        }
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
        this.closeModalConfirm();
        this.props.history.push("/dashboard/projects");
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
                        <Link id="link-to-list"
                              to="/dashboard/projects"
                              onClick = {() => this.isFieldsNotEmpty()}
                              className="title-description">
                            Back to list
                        </Link>
                    </div>
                    <form onSubmit={(event) => this.validateFormFields(event)}>
                        <div className="form-group has-error">
                            <label className="control-label">Project Title</label>
                            <input
                                id="create-project-title"
                                type="text"
                                name="title"
                                placeholder='Input Title'
                                className="form-control boxed"
                                maxLength="60"
                                value={this.state.projectTitle}
                                onChange={(event) => this.handleTitleChange(event)}
                                autoFocus
                            />
                            <span className="has-error error-message">{this.state.titleError}</span>
                        </div>
                        <div className="form-group form-field-margin">
                            <label className="control-label">Project Description</label>
                            <TextareaAutosize
                                id="create-project-descr"
                                name="description"
                                placeholder="Input Description"
                                className="form-control boxed"
                                maxLength="3000"
                                rows={10}
                                value={this.state.projectDescription}
                                onChange={(event) => this.handleDescrChange(event)}
                            />
                            <span className="has-error error-message">{this.state.descriptionError}</span>
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
                                className="btn btn-primary right-project-btn"
                                onClick = {() => this.isFieldsNotEmpty()}
                            >Cancel</button>
                        </div>
                    </form>
                </div>
                <Modal show={this.state.showModalConfirm} onHide={() => this.closeModalConfirm()}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to cancel without saving changes?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            id="modal-confirm-cancel"
                            onClick={() => this.leaveForm()}>Cancel</Button>
                        <Button
                            id="modal-confirm-back"
                            onClick={() => this.closeModalConfirm()} bsStyle="primary">Back to edit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        newProject: state.project
    }
}

export default connect(mapStateToProps)(CreateProject);