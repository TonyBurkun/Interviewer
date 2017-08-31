import React, {Component} from "react";
import {IndexLink, Link} from "react-router-dom";
import Helmet from "react-helmet";
import TextareaAutosize from "react-autosize-textarea";
import {Modal, Button} from "react-bootstrap";
import "./ProjectEdit.css";
import {connect} from "react-redux";
import {updateProject, showProjects} from "../../redux/actions/projectActions";

class ProjectEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectTitle: "",
            projectDescription: "",
            currentProject: "",
            showModalConfirm: false,
            confirmText: "",
            titleError:"",
            descriptionError: ""
        }
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(showProjects());

        setTimeout(() => {
            let projects = this.props.newProject.projects;
            let projectId = this.props.match.params.id;
            let currentProject = projects.find(function (currentProject) {
                    return currentProject.id === +projectId;
                }) || {};
            this.setState({currentProject: currentProject});
            this.setState({projectTitle: currentProject.title});
            this.setState({projectDescription: currentProject.description});
        }, 1000);
    }

    handleTitleChange(event) {
        this.setState({projectTitle: event.target.value});
        this.setState({descriptionError:""});
    }

    handleDescrChange(event) {

        this.setState({projectDescription: event.target.value});
        this.setState({descriptionError:""});
    }

    showMConfirmMessage() {
        this.setState({
            confirmText: "Are you sure you want to cancel without saving changes?"
        });
        this.openModalConfirm();
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

    leaveEdit() {
        this.closeModalConfirm();
        this.props.history.push("/dashboard/projects/project/" + this.state.currentProject.id);
    }

    validateFormFields(event) {
        let regex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        let id = this.state.currentProject.id;
        let title = this.state.projectTitle;
        let description = this.state.projectDescription;
        let wrongCharMessage = "Please use only latin letters, numbers and special symbols";
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
        if (regex.test(title) && regex.test(description)) {
            this.props.history.push("/dashboard/projects");
            const {dispatch} = this.props;
            dispatch(updateProject({id: id, title: title, description: description}));
            this.props.history.push("/dashboard/projects/");
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>{this.state.projectTitle}</title>
                </Helmet>
                <div className="row sameheight-container">
                    <div className="col-md-12 component-container">

                        <form onSubmit={(event) => this.validateFormFields(event)}>
                            <div className="title-block">
                                <input
                                    id="pe-title"
                                    className=" form-control boxed"
                                    maxLength="60"
                                    value={this.state.projectTitle}
                                    onChange={(event) => this.handleTitleChange(event)}
                                    autoFocus
                                />
                                <span className="error-message">{this.state.titleError}</span>
                                <p className="form-sublabel"><small>Maximum 60 characters</small></p>
                                <Link
                                    id="pe-link-to-list"
                                    to="/dashboard/projects"
                                    className="title-description">
                                    Back to list
                                </Link>
                            </div>
                                <TextareaAutosize
                                    id="pe-description"
                                    className="form-control boxed"
                                    maxLength="3000"
                                    rows={10}
                                    value={this.state.projectDescription}
                                    onChange={(event) => this.handleDescrChange(event)}
                                />
                                <span className="error-message">
                                    {this.state.descriptionError}</span>
                            <p className="form-sublabel"><small>Maximum 3000 characters</small></p>

                            <div className="form-group">
                                <button
                                    id="pe-btn-save"
                                    type="submit"
                                    className="btn btn-primary"
                                >Save
                                </button>
                                <button
                                    id="pe-btn-cancel"
                                    type="reset"
                                    className="btn btn-primary right-project-btn"
                                    onClick={()=> this.showMConfirmMessage()}
                                >Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Modal show={this.state.showModalConfirm} onHide={() => this.closeModalConfirm()}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.state.confirmText}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            id="pe-btn-modal-cancel"
                            onClick={() => this.leaveEdit()}
                        >Cancel
                        </Button>
                        <Button
                            id="pe-btn-modal-back"
                            onClick={() => this.closeModalConfirm()}
                            bsStyle="primary"
                        >Back to edit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        newProject: state.project,
        newNote: state.notifications
    }
}

export default connect(mapStateToProps)(ProjectEdit);
