import React, {Component} from "react";
import {Link} from "react-router-dom";
import Helmet from "react-helmet";
import "./ProjectsList.css";
import {connect} from "react-redux";
import PageTitle from './../../containers/PageTitle';
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
        let projectsToDisplay;

        if (projects) {
            let sortedProjects = projects.sort(compareTitle) || {};
            projectsToDisplay = sortedProjects.map((value, index) =>

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
        } else {
            projectsToDisplay = "";
        }

        return (
            <div>
                <Helmet>
                    <title>Projects</title>
                </Helmet>
                <div className="row sameheight-container">
                    <div className="col-md-12 component-container">
                        <PageTitle
                            pageTitle='Projects'
                            showBackBtn={false}
                            showButton={true}
                            titleForButton='Create project'
                            linkForButton='/projects/create-project'
                        />
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
