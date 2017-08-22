import React, {Component} from "react";
import {Link, IndexLink} from "react-router-dom";
import "./ProjectsList.css";
import {connect} from "react-redux";
import {Modal} from "react-bootstrap";
import {Alert} from "reactstrap";
import {showNote} from "../../redux/actions/notificationActions";


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
        let compareTitle = (a, b) => {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
        };

        let sortedProjects = projects.sort(compareTitle);

        const projectsToDisplay = sortedProjects.map((value, index) =>

            <div key={index}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-default">
                            <Link to={"/dashboard/projects/project/" + value.id}
                                  className="card-header project-title"
                                  id={value.id}
                            >
                                <div className="header-block">
                                    <p className="title">{value.title}</p>
                                </div>
                            </Link>
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
