import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router-dom';
import "./ProjectsList.css";
import {Modal, Button} from 'react-bootstrap';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux'
import { createProject } from '../../redux/actions/projectActions';
import { showNote } from '../../redux/actions/notificationActions';


class ProjectsList extends Component {

     onDismiss() {
            const { dispatch } = this.props;
            dispatch(showNote({show: false}))
     }

    render() {

        const { projectTitle, projectDescription } = this.props.newProject.newProject;
        const { isNoteVisible } = this.props.newNote.newNote;
        let projectToDisplay = "'" + projectTitle.slice(0,20) + "..." + "'"

        return (
            <div>
                <div className="row sameheight-container">
                    <div className="col-md-12 component-container">

                        <div className="title-block">
                            <h3 className="title">Projects</h3>
                        </div>
                        <div className="card card-block sameheight-item">
                            <Alert className="col-md-7 alert-custom"
                                   isOpen={isNoteVisible}
                                   toggle={() => this.onDismiss()}>
                                   Project {projectToDisplay} was created!
                            </Alert>
                            <Link to="/dashboard/projects/create-project">
                                <button className="btn btn-primary">Create project</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Modal>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please use only latin letters, numbers and special symbols</p>
                    </Modal.Body>
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

export default connect(mapStateToProps)(ProjectsList);
