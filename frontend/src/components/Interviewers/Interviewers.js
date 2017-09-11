import React, {Component} from 'react';
import './interviewers.css';

class Interviewers extends Component{

    onCallMakeNote(status, text) {
        this.props.callMakeNote(status, text)
    }

    onCallShowNote(status, text) {
        this.props.callShowNote(status, text)
    }

    render(){
        return (
            <div className="bcgr">
                <div className="row sameheight-container">
                    <div className="col-md-12">
                        <div className="title-block">
                            <h3 className="title">Interviewers</h3>

                        </div>
                        <button
                            className="btn btn-primary right-project-btn"
                            onClick={
                                () => this.onCallMakeNote(
                                    "success",
                                    "Well done! You successfully read this important alert message."
                                )
                            }
                        >Success
                        </button>
                        <button
                            className="btn btn-primary right-project-btn"
                            onClick={
                                () => this.onCallMakeNote(
                                    "warning",
                                    "Warning! Better check yourself, you're not looking too good."
                                )
                            }
                        >Warning
                        </button>
                        <button
                            className="btn btn-primary right-project-btn"
                            onClick={
                                () => this.onCallShowNote(
                                    "danger",
                                    "Oh snap! Change a few things up and try submitting again."
                                )
                            }
                        >Danger
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Interviewers;