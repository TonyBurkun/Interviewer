import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router-dom';
//import "./ProjectsList.css";

class ProjectsList extends Component {

    render() {

        return (
            <div className="bcgr">
                <div className="row sameheight-container">
                    <div className="col-md-12">
                        <div className="title-block">
                            <h3 className="title">List of projects</h3>

                        </div>
                        <div className="card card-block sameheight-item">
                            <Link to="/createproject">
                                <button className="btn btn-primary">Create a new project</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default ProjectsList;