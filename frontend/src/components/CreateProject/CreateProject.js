import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import {Link} from 'react-router-dom'

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
            alert("Incorrect data");
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
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Create a project</h3>
                        <Link to="/" onClick = {() => this. isFieldsNotEmpty()} >Back to list</Link>
                        <form onSubmit={(event) => this.validateFormFields(event)}>
                            <input
                                id="project-tittle"
                                type='text'
                                name="ProjectTittle"
                                placeholder='Project Tittle'
                                className="form-control"
                                maxLength="100"
                                value={this.state.projectTitle}
                                onChange={(event) => this.handleTitleChange(event)}
                            />
                            <TextareaAutosize
                                id="project-descr"
                                name="ProjectDescription"
                                placeholder='Project Description'
                                className="form-control"
                                maxLength="3000"
                                rows={10}
                                value={this.state.projectDescription}
                                onChange={(event) => this.handleDescrChange(event)}

                            />
                            <input
                                id="submitBtn"
                                type="submit"
                                value="Create"
                                className="btn btn-default"
                                disabled={!this.state.projectTitle || !this.state.projectDescription }
                            />
                            <input
                                type="reset"
                                value="Cancel"
                                className="btn btn-default"
                                onClick = {() => this. isFieldsNotEmpty()}
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProject;