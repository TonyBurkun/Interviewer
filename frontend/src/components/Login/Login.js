import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import './login.css';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };


        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }

    openModal(){
        this.setState({
            showModal: true
        });
    }

    closeModal(){
        this.setState({
            showModal: false
        });
    }




    handleSubmit(event){
        event.preventDefault();

        let currentForm = event.target;

        //-----------------------------------------
        // THIS CODE WAS USED FOR CUSTOM VALIDATION
        //-----------------------------------------
        // var formValidation = {
        //
        //     getRequiredFields: function(currentForm){
        //         let allRequiredField = currentForm.querySelectorAll('.required');
        //         return allRequiredField;
        //     },
        //
        //     getAllFields: function(currentForm){
        //         let allFields = currentForm.querySelectorAll('.form-control');
        //         return allFields;
        //     },
        //
        //     checkFields: function (allRequiredField) {
        //         let that = this;
        //
        //         allRequiredField = Array.prototype.slice.call(allRequiredField);
        //
        //         allRequiredField.every(function (item) {
        //
        //
        //             let oneFormGroup = item.parentNode;
        //
        //             if (item.value === ''){
        //                 that.addError(oneFormGroup);
        //                 return false;
        //             } else {
        //
        //                 let fieldAttribute = item.getAttribute('type');
        //                 console.log(fieldAttribute);
        //
        //                 if (fieldAttribute === 'email'){
        //                     that.removeError(oneFormGroup);
        //                     return true;
        //                    // let emailFieldValue = item.value,
        //                    //     regext = /.+@.+\..+/i;
        //
        //                 } else {
        //                     that.removeError(oneFormGroup);
        //                     return true;
        //                 }
        //             }
        //         });
        //
        //     },
        //
        //     addError: function (field) {
        //         if (!field.classList.contains('has-error')) {
        //             let error = document.createElement('span');
        //             error.className = 'fa fa-times form-control-feedback';
        //             field.classList.add('has-error');
        //             field.appendChild(error);
        //         }
        //     },
        //
        //     removeError: function (field) {
        //         if (field.classList.contains('has-error')) {
        //             let error = field.querySelector('.fa.fa-times.form-control-feedback');
        //             field.classList.remove('has-error');
        //             field.removeChild(error);
        //         }
        //     }
        //
        //
        // };
        //
        // let requireFields = formValidation.getRequiredFields(currentForm);
        // formValidation.checkFields(requireFields);
        //---------------------
        //END CUSTOM VALIDATION
        //---------------------
    }

    render() {

        return (
            <div className="auth">
                <Modal show={this.state.showModal} onHide={this.closeModal} id="noAccountModal">
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <p>In order to get access to Interviewer app please contact your system administrator or HR department</p>
                    </Modal.Body>
                </Modal>
                <div className="auth-container">
                    <div className="card">
                        <header className="auth-header">
                            <h1 className="auth-title">
                                Interviewer Logo
                            </h1>
                        </header>
                        <div className="auth-content">
                            <p className="text-xs-center">LOGIN TO CONTINUE</p>
                            <form id="login-form" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="email" className="form-control underlined required" name="username"
                                           id="username" placeholder="Your email address" maxLength='60' required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control underlined required" name="password"
                                           id="password" placeholder="Your password" required/>
                                </div>
                                <div className="form-group submit-btn">
                                    <button type="submit" id="loginSubmit"  className="btn btn-block btn-primary">Login</button>
                                </div>
                                <div className="form-group forgot-pass">
                                    <Link to="/forgotpassword" className="forgot-btn" id="forgotPassBtn">Forgot password?</Link>
                                </div>
                                <div className="form-group no-account">
                                    <p className="text-xs-center" id="noAccount" onClick={this.openModal}>Do not have an account? Click here</p>
                                </div>
                            </form>

                            <ul className="copyright">
                                <li>
                                    (C) Interviewer, 2017
                                </li>
                                <li>
                                    <Link to="#" id="termsService">Terms of service</Link>
                                </li>
                                <li>
                                    <Link to="#" id="helpCenter">Help Center</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;