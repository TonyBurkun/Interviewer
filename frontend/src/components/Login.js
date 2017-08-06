import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/login.css';


class Login extends Component {

    handleSubmit(event){
        event.preventDefault();

        let currentForm = event.target;


        var formValidation = {

            getRequiredFields: function(currentForm){
                let allRequiredField = currentForm.querySelectorAll('.required');
                return allRequiredField;
            },

            getAllFields: function(currentForm){
                let allFields = currentForm.querySelectorAll('.form-control');
                return allFields;
            },

            checkFields: function (allRequiredField) {
                let that = this;

                allRequiredField = Array.prototype.slice.call(allRequiredField);

                allRequiredField.every(function (item) {


                    let oneFormGroup = item.parentNode;

                    if (item.value === ''){
                        that.addError(oneFormGroup);
                        return false;
                    } else {

                        let fieldAttribute = item.getAttribute('type');
                        console.log(fieldAttribute);

                        if (fieldAttribute === 'email'){
                            that.removeError(oneFormGroup);
                            return true;
                           // let emailFieldValue = item.value,
                           //     regext = /.+@.+\..+/i;

                        } else {
                            that.removeError(oneFormGroup);
                            return true;
                        }



                    }
                });

            },

            addError: function (field) {
                if (!field.classList.contains('has-error')) {
                    let error = document.createElement('span');
                    error.className = 'fa fa-times form-control-feedback';
                    field.classList.add('has-error');
                    field.appendChild(error);
                }
            },

            removeError: function (field) {
                if (field.classList.contains('has-error')) {
                    let error = field.querySelector('.fa.fa-times.form-control-feedback');
                    field.classList.remove('has-error');
                    field.removeChild(error);
                }
            }


        };

        let requireFields = formValidation.getRequiredFields(currentForm);
        formValidation.checkFields(requireFields);

    }

    render() {

        return (
            <div className="auth">
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
                                           id="username" placeholder="Your email address" maxLength='60'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control underlined required" name="password"
                                           id="password" placeholder="Your password"/>
                                </div>
                                <div className="form-group submit-btn">
                                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                                </div>
                                <div className="form-group forgot-pass">
                                    <Link to="/forgotpassword" className="forgot-btn pull-right">Forgot password?</Link>
                                </div>
                                <div className="form-group">
                                    <p className="text-muted text-xs-center">Do not have an account?&emsp;
                                        <Link to="/signup">Sign Up!</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;