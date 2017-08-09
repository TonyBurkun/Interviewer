import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import {Link} from 'react-router-dom'
import './CreateProject.css';

class CreateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectTitle: "",
            projectDescription: "",
        }
    }

    handleConfirmLeavePage(event) {
        let notEmptyFields = this.state.projectTitle || this.state.projectDescription;
        if (notEmptyFields && event.target.activeElement.id != "submitBtn") {
            let confirmationMessage = "confirm";
            event.returnValue = confirmationMessage;
            return confirmationMessage;
        }
    }

    componentDidMount() {
        window.addEventListener("beforeunload", this.handleConfirmLeavePage.bind(this))
    }

    handleTitleChange(event) {
        this.setState({projectTitle: event.target.value});
    }

    handleDescrChange(event) {
        this.setState({projectDescription: event.target.value});
    }

    validateFormFields(event) {
        event.preventDefault();
        let regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        let title = this.state.projectTitle;
        let descr = this.state.projectDescription;
        if ( !regex.test(descr) || !regex.test(title) ) {
            alert("Please use only latin letters, numbers and special symbols");
        }
        event.target.submit();
    }

    isFieldsNotEmpty(event) {
        if (this.state.projectTitle || this.state.projectDescription) {
            let confirm = window.confirm("Are you sure you want to leave the page without saving changes?");
            if(confirm) {
                this.resetFormFields(event)
            }
        }
    }

    resetFormFields(event) {
        this.setState({projectTitle: ""});
        this.setState({projectDescription: ""});
    }

    render() {
        return (
            <div className="bcgr">
                <div className="row sameheight-container">
                    <div className="col-md-12">
                        <div className="title-block">
                            <h3 className="title">Create a project</h3>
                            <Link to="/" onClick = {() => this. isFieldsNotEmpty()} className="title-description">
                                Back to list
                            </Link>
                        </div>
                        <div className="card card-block sameheight-item">

                            <form onSubmit={(event) => this.validateFormFields(event)}>
                                <div className="form-group">
                                    <label className="control-label">Project Title</label>
                                    <input
                                        id="project-title"
                                        type='text'
                                        name="ProjectTitle"
                                        placeholder='Input Title'
                                        className="form-control boxed"
                                        maxLength="100"
                                        value={this.state.projectTitle}
                                        onChange={(event) => this.handleTitleChange(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Project Description</label>
                                    <TextareaAutosize
                                        id="project-descr"
                                        name="ProjectDescription"
                                        placeholder="Input Description"
                                        className="form-control"
                                        maxLength="3000"
                                        rows={10}
                                        value={this.state.projectDescription}
                                        onChange={(event) => this.handleDescrChange(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        id="submitBtn"
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={!this.state.projectTitle || !this.state.projectDescription }
                                    >Create</button>
                                    <button
                                        id="resetBtn"
                                        type="reset"
                                        className="btn btn-primary create-project-btn"
                                        onClick = {() => this. isFieldsNotEmpty()}
                                    >Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProject;

