import React, {Component, PropTypes} from "react";
import TextareaAutosize from "react-autosize-textarea";
import {Link} from "react-router-dom";
import {Modal, Button} from "react-bootstrap";
import "./CreateProject.css";
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/projectActions';
import { showNote } from '../../redux/actions/notificationActions';

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
            confirmText: ""
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
        let regex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        let title = this.state.projectTitle;
        let descr = this.state.projectDescription;
        if (!regex.test(descr) || !regex.test(title)) {
            event.preventDefault();
            this.setState({
                alertText: "Please use only latin letters, numbers and special symbols"
            });
            this.openModalAlert();
        } else if(!this.isTitleUnique()) {
            event.preventDefault();
            this.setState({
                alertText: "This title already exists. Please, use only unique titles."
            });
            this.openModalAlert();
        }else {
            this.props.history.push("/dashboard/projects");
            const { dispatch } = this.props;
            dispatch(createProject({title: title, descr: descr}));
            this.showNote();
        }
    }


    isTitleUnique() {
        let projects = [
            {id:1, title: "Greenlam", description: "something1"},
            {id:2, title: "Gembucket", description: "something2"},
            {id:3, title: "Asoka", description: "something3"},
            {id:4, title: "Biodex", description: "something4"},
            {id:5, title: "It", description: "something5"},
            {id:6, title: "Vagram", description: "something6"},
            {id:7, title: "Quo Lux", description: "something7"},
            {id:8, title: "Sub-Ex", description: "something8"},
            {id:9, title: "Pannier", description: "something9"},
            {id:10, title: "Span", description: "something10"},
        ];
        let isUnique = true;
        let title = this.state.projectTitle;
        projects.forEach(function(item) {
            if (item.title === title) {
                isUnique = false;
            }
        });
        return (isUnique) ? true: false;
    }

    showNote() {
        const { dispatch } = this.props;
        dispatch(showNote({show: true }))
        setInterval(() => {
            dispatch(showNote({show: false }))
        }, 4000)
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
                        <Link to="/dashboard/projects" onClick = {() => this.isFieldsNotEmpty()} className="title-description">
                            Back to list
                        </Link>
                    </div>
                    <form onSubmit={(event) => this.validateFormFields(event)}>
                        <div className="form-gro1up">
                            <label className="control-label">Project Title</label>
                            <input
                                id="create-project-title"
                                type="text"
                                name="ProjectTitle"
                                placeholder='Input Title'
                                className="form-control boxed"
                                maxLength="60"
                                value={this.state.projectTitle}
                                onChange={(event) => this.handleTitleChange(event)}
                                autoFocus
                            />
                        </div>
                        <div className="form-group form-field-margin">
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
                                className="btn btn-primary right-project-btn"
                                onClick = {() => this.isFieldsNotEmpty()}
                            >Cancel</button>
                        </div>
                    </form>
                </div>
                <Modal show={this.state.showModalAlert} onHide={() => this.closeModalAlert()}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.state.alertText}</p>
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
                        <Button onClick={() => this.closeModalConfirm()} bsStyle="primary">Back to edit</Button>
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