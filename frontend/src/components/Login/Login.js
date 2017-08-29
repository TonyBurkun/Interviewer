import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import './login.css';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            emailIsEmpty: true
        };


        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openModal() {
        this.setState({
            showModal: true
        });
    }

    closeModal() {
        this.setState({
            showModal: false
        });
    }


    handleSubmit(event) {
        event.preventDefault();

        let currentForm = event.target,
            email = this.refs.login_email,
            password = this.refs.login_password;

        let loginValidationSettings = {
            rules: {
                email: {
                    required: true,
                    isEmail: true
                },
                password: {
                    required: true,
                    minLength: {
                        checkMinLength: true,
                        minLengthVal: 6
                    }
                }
            },
            messages: {
                email: {
                    required: "Please enter email",
                    email: "Please enter a valid email address"
                },
                password: {
                    required: "Please enter password",
                    minLength: "Password should contain minimum 6 characters"
                }
            }
        };

        let validate = (loginValidationSettings, email, password, currentForm) => {

            let emailIsEmpty = true,
                isEmail = false,
                passwordIsEmpty = true,
                minLengthPass = false;

            removeAllErrorMessage(currentForm);

            if (loginValidationSettings.rules.email.required) {
                if (email.value.trim() === '') {


                    let errorElem = document.createElement('span');
                    errorElem.innerHTML = loginValidationSettings.messages.email.required;
                    errorElem.classList.add('has-error');

                    email.parentNode.classList.add('has-error');
                    email.parentNode.appendChild(errorElem);

                    emailIsEmpty = true;

                } else {
                    emailIsEmpty = false;
                }
            } else {
                emailIsEmpty = false;
            }

            if (!emailIsEmpty) {
                if (loginValidationSettings.rules.email.isEmail) {
                    let emailValue = email.value;
                    let result = emailValue.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);

                    if (!result) {

                        let errorElem = document.createElement('span');
                        errorElem.innerHTML = loginValidationSettings.messages.email.email;
                        errorElem.classList.add('has-error');

                        email.parentNode.classList.add('has-error');
                        email.parentNode.appendChild(errorElem);
                        isEmail = false;
                    } else {
                        isEmail = true;
                    }

                } else {
                    isEmail = true;
                }
            }

            if (isEmail) {
                if (loginValidationSettings.rules.password.required) {
                    if (password.value === '') {

                        let errorElem = document.createElement('span');
                        errorElem.innerHTML = loginValidationSettings.messages.password.required;
                        errorElem.classList.add('has-error');

                        password.parentNode.classList.add('has-error');
                        password.parentNode.appendChild(errorElem);
                        passwordIsEmpty = true;
                    } else {
                        passwordIsEmpty = false;
                    }

                } else {
                    passwordIsEmpty = false;
                }
            }

            if (!passwordIsEmpty) {
                if (loginValidationSettings.rules.password.minLength.checkMinLength) {
                    if (password.value.length < loginValidationSettings.rules.password.minLength.minLengthVal) {
                        let errorElem = document.createElement('span');
                        errorElem.innerHTML = loginValidationSettings.messages.password.minLength;
                        errorElem.classList.add('has-error');

                        password.parentNode.classList.add('has-error');
                        password.parentNode.appendChild(errorElem);
                        minLengthPass = false;
                    } else {
                        minLengthPass = true;
                    }

                } else {
                    minLengthPass = true;
                }
            }

        };

        if (!Element.prototype.remove) {
            Element.prototype.remove = function remove() {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }

        let removeAllErrorMessage = (currentForm) => {
            console.log(currentForm);
            let allErrorMessages = currentForm.querySelectorAll('span.has-error'),
                allErrorTitles = currentForm.querySelectorAll('div.has-error');

            for (let i = 0; i < allErrorTitles.length; i++) {
                allErrorTitles[i].classList.remove('has-error');
            }

            for (let i = 0; i < allErrorMessages.length; i++) {
                allErrorMessages[i].remove();
            }
        };


        validate(loginValidationSettings, email, password, currentForm);

    }

    render() {

        return (
            <div className="auth">
                <Modal show={this.state.showModal} onHide={this.closeModal} id="noAccountModal">
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <p>In order to get access to Interviewer app please contact your system administrator or HR
                            department</p>
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
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control underlined required" name="email"
                                           id="username" placeholder="Your email address" maxLength='60'
                                           ref='login_email'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control underlined required" name="password"
                                           id="password" placeholder="Your password" maxLength='30'
                                           ref="login_password"/>
                                </div>
                                <div className="form-group submit-btn">
                                    <button type="submit" id="loginSubmit" className="btn btn-block btn-primary">Login
                                    </button>
                                </div>
                                <div className="form-group forgot-pass">
                                    <Link to="/forgotpassword" className="forgot-btn" id="forgotPassBtn">Forgot
                                        password?</Link>
                                </div>
                                <div className="form-group no-account">
                                    <p className="text-xs-center" id="noAccount" onClick={this.openModal}>Do not have an
                                        account? Click here</p>
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