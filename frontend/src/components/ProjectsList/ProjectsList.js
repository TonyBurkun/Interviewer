import React, {Component} from "react";
import {Link} from "react-router-dom";
import Helmet from "react-helmet";
import "./ProjectsList.css";
import {connect} from "react-redux";
import {showProjects} from "../../redux/actions/projectActions";


class ProjectsList extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(showProjects())
    }

    render() {

        let projects = this.props.newProject.projects;

            let compareTitle = (a, b) => {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
        };

        let sortedProjects = projects.sort(compareTitle);
        const projectsToDisplay = sortedProjects.map((value, index) =>

            <div key={index}>
                <div className="row">
                    <div className="col-md-12">
                            <Link
                                id="pl-link-to-project"
                                to={"/projects/project/" + value.id}
                                className="card project-link"
                            >
                                <p className="title project-list-item">{value.title}</p>
                            </Link>
                    </div>
                </div>
            </div>
        );

        return (
            <div>
                <Helmet>
                    <title>Projects</title>
                </Helmet>
                <div className="row sameheight-container">
                    <div className="col-md-12 component-container">
                        <div className="title-block">
                            <h3 className="title">Projects</h3>
                        </div>
                        <Link
                            id="pl-link-to-create"
                            to="/projects/create-project"
                        >
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
        notifications: state.notifications
    }
}

export default connect(mapStateToProps)(ProjectsList);
