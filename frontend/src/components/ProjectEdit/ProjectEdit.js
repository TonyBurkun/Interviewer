import React, {Component} from "react";
import {IndexLink} from "react-router-dom";
import TextareaAutosize from "react-autosize-textarea";
import "./ProjectEdit.css";
import {connect} from "react-redux";


class ProjectEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectTitle: "Project Title",
            projectDescription: "Lorem ipsum dolor sit amet, nulla quam sapien praesent purus commodo nascetur"
        }
    }

    handleTitleChange(event) {
        this.setState({projectTitle: event.target.value});
    }

    handleDescrChange(event) {
        this.setState({projectDescription: event.target.value});
    }



    render() {

        return (
            <div>
                <div className="row sameheight-container">
                    <div className="col-md-12 component-container">

                        <form>
                            <div className="title-block">
                                <input // will transform to h3 with className="tittle"
                                    className="title form-control boxed"
                                    value={this.state.projectTitle}
                                    onChange={(event) => this.handleTitleChange(event)}
                                    autofocus
                                />
                            </div>
                            <div className="card card-default">
                                <TextareaAutosize // will transform to div with className="card-block"
                                    className="form-control boxed card-block"
                                    maxLength="3000"
                                    rows={10}
                                    value={this.state.projectDescription}
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
                                >Cancel
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
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
