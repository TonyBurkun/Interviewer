import React, {Component} from "react";
import {browserHistory, Link} from "react-router-dom";
import {Modal, Button} from "react-bootstrap";
import "./ProjectDetails.css";
import {connect} from "react-redux";
import {removeProject, showProjects} from "../../redux/actions/projectActions";


class ProjectDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModalConfirm: false,
            projectTitle: "",
            projectDescription: "",
            currentProject: ""
        }
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(showProjects());
        let projects  = this.props.newProject.projects;
        let projectId = this.props.match.params.id;
        let currentProject = projects.find(function (currentProject) { return currentProject.id === +projectId; });
        this.setState({currentProject: currentProject});
        this.setState({projectTitle: currentProject.title});
        this.setState({projectDescription: currentProject.description});

    }

    switchToEditMode() {
        let projectId = this.props.match.params.id;
        this.props.history.push("/dashboard/projects/project/" + projectId + "/edit");
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

    deleteProject(){
        this.closeModalConfirm()
        let title = this.state.projectTitle;
        let description = this.state.projectDescription;
        const {dispatch} = this.props;
        dispatch(removeProject(this.state.currentProject));
        this.props.history.push("/dashboard/projects/");
    }


    render() {
        {/*let projects  = this.props.newProject.projects;*/}


        // let projectId = this.props.match.params.id;
        // let currentProject = projects.find(function (currentProject) { return currentProject.id === +projectId; });
        // //console.log(currentProject)
        //
        // // this.setState({projectTitle: currentProject.title});
        // // this.setState({projectDescription: currentProject.description});

        return (
            <div>
                <div className="row sameheight-container">
                    <div className="col-md-12 component-container">
                        <div className="title-block">
                            <h3 className="title">{this.state.projectTitle}</h3>
                            <Link to="/dashboard/projects" className="title-description">
                                Back to list
                            </Link>
                        </div>
                        <div className="card card-default">
                                <div className="form-control boxed card-block">
                                    {this.state.projectDescription}
                                </div>
                        </div>
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                onClick={() => this.switchToEditMode()}
                            >Edit</button>
                            <button
                                type="reset"
                                className="btn btn-primary right-project-btn"
                                onClick={() => this.openModalConfirm()}
                            >Delete</button>
                            <Link to="/dashboard/projects/create-project">
                                <button className="btn btn-primary right-project-btn">Create project</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showModalConfirm} onHide={() => this.closeModalConfirm()}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to delete a project?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.deleteProject()}>Yes</Button>
                        <Button onClick={() => this.closeModalConfirm()} bsStyle="primary">No</Button>
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

export default connect(mapStateToProps)(ProjectDetails);

