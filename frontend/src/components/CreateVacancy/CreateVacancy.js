import React, {Component} from 'react';
import './createVacancy.css';
import PageTitle from './../../containers/PageTitle';
import TextareaAutosize from "react-autosize-textarea";
import {Modal, Button} from "react-bootstrap";
import {createBrowserHistory} from 'history';
import {connect} from "react-redux";
import {showProjects} from "../../redux/actions/projectActions";

const history = createBrowserHistory();

class CreateVacancy extends Component{
    constructor(props){
        super(props);
        this.state = {
            vacancyDescription:"",
            confirmText: "Are you sure you want to cancel without saving changes?",
            wrongCharMessage: "Please use only latin letters, numbers and special symbols",
            showModalConfirm: false
        };

    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(showProjects());
    }

    handleSubmitForm(event){
        event.preventDefault();

        console.log('send form');
        let currentForm = event.target,
            regex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/,
            descriptionField = this.refs.vacancy_desc.textarea,
            descriptionValue = this.refs.vacancy_desc.currentValue;


        let createErrorElem = (errorMessage) => {
            let errorElem = document.createElement('span');
                errorElem.innerHTML = errorMessage;
                errorElem.classList.add('has-error');

            return errorElem;
        };



        let removeAllErrorMessage = (currentForm) => {
            let allErrorMessages = currentForm.querySelectorAll('span.has-error'),
                allErrorTitles = currentForm.querySelectorAll('div.has-error');

            for (let i = 0; i < allErrorTitles.length; i++) {
                allErrorTitles[i].classList.remove('has-error');
            }

            for (let i = 0; i < allErrorMessages.length; i++) {
                allErrorMessages[i].remove();
            }
        };

        removeAllErrorMessage(currentForm);

        if (!regex.test(descriptionValue)) {
            descriptionField.parentNode.classList.add('has-error');
            descriptionField.parentNode.appendChild(createErrorElem(this.state.wrongCharMessage));
        } else {
            this.resetFormFields();
            history.goBack();
        }



    }

    handleDescriptionChange(event){
        this.setState({vacancyDescription: event.target.value});
        if (event.target.nextSibling !== null){
            event.target.nextSibling.remove();
        }

    }

    isFieldsNotEmpty() {
        if (this.state.vacancyDescription) {
            this.setState({
                confirmText: "Are you sure you want to cancel without saving changes?"
            });
            this.openModalConfirm();
        } else {
            history.goBack();
        }
    }

    resetFormFields() {
        this.setState({vacancyDescription: ""});
    }

    openModalConfirm() {
        this.setState({
            showModalConfirm: true
        });
    }

    closeModalConfirm() {
        this.setState({
            showModalConfirm: false
        });
    }

    leaveForm() {
        this.resetFormFields();
        this.closeModalConfirm();
        history.goBack();
    }

    render(){


        let showProjectFilter = () => {
            let projectList = this.props.newProject.projects;

            let options =  projectList.map((value, index) =>
                <option key={index}>{value.title}</option>
            );

            return (
                <div className="form-group">
                    <select className="form-control form-control-sm" id="project-filter">
                        <option>All Projects</option>
                        {options}
                    </select>
                </div>
            );
        };


        return(
            <div className="bcgr">
                <div className="row sameheight-container">
                    <div className="col-md-12">
                        <PageTitle
                            pageTitle='Create vacancy'
                            showBackBtn={true}
                            showButton={false}
                            titleForButton='Create vacancy'
                            linkForButton='/create-vacancy'
                        />
                    </div>
                </div>
                <section className="section">
                    <div className="row sameheight-container">
                        <div className="col-md-12">
                            <div className="card card-block sameheight-item">
                                <form onSubmit={(event) => this.handleSubmitForm(event)}>

                                    <div className="filter-block">
                                        <div className="filter-block__title">Filters:</div>
                                        <div className="filter-block__selects">
                                            <div className="form-group">
                                                <select className="form-control form-control-sm" id="level-filter">
                                                    <option>All Levels</option>
                                                    <option>Junior</option>
                                                    <option>Moddle</option>
                                                    <option>Senior</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control form-control-sm" id="position-filter">
                                                    <option>All Position</option>
                                                    <option>QA</option>
                                                    <option>Frontend</option>
                                                    <option>Backend</option>
                                                </select>
                                            </div>
                                            {showProjectFilter()}
                                        </div>

                                    </div>



                                    <div className="form-group">
                                        <label className="control-label form-label">Vacancy Description</label>
                                        <p className="form-sublabel"><small>Maximum 3000 characters</small></p>
                                        <TextareaAutosize
                                            id="create-vacancy-description"
                                            name="description"
                                            placeholder="Input Description"
                                            className="form-control boxed"
                                            maxLength="3000"
                                            rows={10}
                                            ref="vacancy_desc"
                                            value={this.state.vacancyDescription}
                                            onChange={(event) => this.handleDescriptionChange(event)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            id="create-vacancy-submitBtn"
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={this.state.vacancyDescription.length < 5}
                                        >Create
                                        </button>
                                        <button
                                            id="create-vacancy-resetBtn"
                                            type="reset"
                                            className="btn btn-primary"
                                            onClick={() => this.isFieldsNotEmpty()}
                                        >Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <Modal show={this.state.showModalConfirm} onHide={() => this.closeModalConfirm()}>
                                <Modal.Header closeButton>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Are you sure you want to cancel without saving changes?</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        id="modal-confirm-cancel"
                                        onClick={() => this.leaveForm()}>Cancel</Button>
                                    <Button
                                        id="modal-confirm-back"
                                        onClick={() => this.closeModalConfirm()} bsStyle="primary">Back to edit</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        newProject: state.project
    }
}

export default connect(mapStateToProps)(CreateVacancy);