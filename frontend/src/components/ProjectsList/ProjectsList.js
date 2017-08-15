import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router-dom';
import "./ProjectsList.css";
import {Modal, Button} from 'react-bootstrap';
import { Alert } from 'reactstrap';


class ProjectsList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isNoteVisible: false
        }
    }

    onDismiss() {
        this.setState({ isNoteVisible: false });
    }
    //----------Will be used later------
    // showNote() {
    //     this.setState({ isNoteVisible: true });
    //     setInterval(() => {
    //         this.onDismiss()
    //     }, 4000)
    // }
    //-----------End---------------------




    render() {

        return (
            <div>
                <div className="row sameheight-container">
                    <div className="col-md-12 component-container">

                        <div className="title-block">
                            <h3 className="title">Projects</h3>
                        </div>
                        <div className="card card-block sameheight-item">
                            <Alert className="col-md-7 alert-custom"
                                   isOpen={this.state.isNoteVisible}
                                   toggle={() => this.onDismiss()}>
                                Project "My very First Project..." was created!
                            </Alert>
                            <Link to="/dashboard/projects/create-project">
                                <button className="btn btn-primary">Create project</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Modal>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Please use only latin letters, numbers and special symbols</p>
                    </Modal.Body>
                </Modal>
            </div>
        )

    }
}

export default ProjectsList;