import React, {Component} from "react";
import {Link, IndexLink} from "react-router-dom";
import "./ProjectsList.css";
import { connect } from 'react-redux'
import {Modal} from "react-bootstrap";
import {Alert} from "reactstrap";
import {showNote} from "../../redux/actions/notificationActions";
import {showProjects} from "../../redux/actions/projectActions";


class ProjectsList extends Component {

    // componentDidMount() {
    //     const {dispatch} = this.props;
    //     dispatch(showProjects())
    // }

     onDismiss() {
            const { dispatch } = this.props;
            dispatch(showNote({show: false}))
     }


    render() {
        let projects = [
            {title: "Title1", description: "something1"},
            {title: "Title2", description: "something2"},
            {title: "Title3", description: "something3"},
            {title: "Title4", description: "something4"},
            {title: "Title5", description: "something5"},
            {title: "Title6", description: "something6"},
            {title: "Title7", description: "something7"},
            {title: "Title8", description: "something8"},
            {title: "Title9", description: "something9"},
            {title: "Title10", description: "something10"},
        ];

            // I need to create "projectsSorted" from "projects" first. Then use it in map()\
        const projectsToDisplay = projects.map((value, index) =>
            <div key={index}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-default">
                            <a href="#" className="card-header project-title">
                                <div className="header-block">
                                    <p className="title">{value.title}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );


        const { projectTitle, projectDescription } = this.props.newProject.newProject;
        const { isNoteVisible } = this.props.newNote.newNote;
        let projectToNote = "'" + projectTitle.slice(0,20) + "..." + "'"

        return (
            <div>
                <div className="row sameheight-container">
                    <div className="col-md-12 component-container">

                        <div className="title-block">
                            <h3 className="title">Projects</h3>
                        </div>
                            <Alert className="col-md-7 alert-custom"
                                   isOpen={isNoteVisible}
                                   toggle={() => this.onDismiss()}>
                                   Project {projectToNote} was created!
                            </Alert>
                            <Link to="/dashboard/projects/create-project">
                                <button className="btn btn-primary create-button">Create project</button>
                            </Link>
                    </div>
                </div>
                {projectsToDisplay}
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
