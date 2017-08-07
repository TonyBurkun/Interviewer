import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import './CreateProject.css';
import $ from 'jquery'


class CreateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectTitle: "",
            projectDescription: "",
        }
    }

    handleConfirmLeavePage(event) {
        if (this.state.projectTitle || this.state.projectDescription) {
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
        //let regex = new RegExp("\b\w{4}\b");
        // if ( !regex.test(this.state.projectDescription) ) {
        //  alert("Incorrect data");
        // }
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
                        <a>Back to list</a>
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
                                //   pattern="/[\w\[\]`!@#$%\^&*()={}:;<>+'-]*/"
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
                                //  pattern="/[\w\[\]`!@#$%\^&*()={}:;<>+'-]*/"
                            />
                            <input
                                type="submit"
                                value="Create"
                                className="btn btn-default"
                                disabled={!this.state.projectTitle || !this.state.projectDescription }

                            />
                            <input
                                type="reset"
                                value="Cancel"
                                className="btn btn-default"
                                onClick={() => this.isFieldsNotEmpty()}
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProject;