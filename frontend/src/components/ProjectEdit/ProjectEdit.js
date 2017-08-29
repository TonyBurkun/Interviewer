import React, {Component} from "react";
import {IndexLink} from "react-router-dom";
import {Link} from "react-router-dom";
import TextareaAutosize from "react-autosize-textarea";
import {Modal, Button} from "react-bootstrap";
import "./ProjectEdit.css";
import {connect} from "react-redux";
import {showProjects} from "../../redux/actions/projectActions";

class ProjectEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectTitle: "Project Title",
            projectDescription: "Lorem ipsum dolor sit amet, nulla quam sapien praesent purus commodo nascetur",
            showModalConfirm: false,
            showModaLCreateAlert: false,
            alertText: "",
            confirmText: ""
        }
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(showProjects())
    }

    handleTitleChange(event) {
        this.setState({projectTitle: event.target.value});
    }

    handleDescrChange(event) {
        this.setState({projectDescription: event.target.value});
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
        this.props.history.push("/dashboard/projects/project");
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
            this.props.history.push("/dashboard/projects/project");
        }
    }

    isTitleUnique() {
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

    render() {
        let projects = this.props.newProject.projects;
        console.log(projects)

        let projectId = this.props.match.params.id;
        let currentProject = projects.find(function (currentProject) { return currentProject.id === +projectId; });

        return (
            <div>
                <div className="row sameheight-container">
                    <div className="col-md-12 component-container">

                        <form onSubmit={(event) => this.validateFormFields(event)}>
                            <div className="title-block">
                                <input // will transform to h3 with className="tittle"
                                    className="title form-control boxed"
                                    value={currentProject.title}
                                    onChange={(event) => this.handleTitleChange(event)}
                                    autoFocus
                                />
                                <Link to="/dashboard/projects" className="title-description">
                                    Back to list
                                </Link>
                            </div>
                            <div className="card card-default">
                                <TextareaAutosize // will transform to div with className="card-block"
                                    className="form-control boxed card-block"
                                    maxLength="3000"
                                    rows={10}
                                    value={currentProject.description}
                                    onChange={(event) => this.handleDescrChange(event)}
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >Save
                                </button>
                                <button
                                    type="reset"
                                    className="btn btn-primary right-project-btn"
                                    onClick={() => this.showMConfirmMessage()}
                                >Cancel
                                </button>
                            </div>
                        </form>
                    </div>
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
                        <p>{this.state.confirmText}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.leaveEdit()}>Cancel</Button>
                        <Button onClick={() => this.closeModalConfirm()} bsStyle="primary">Back to edit</Button>
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
