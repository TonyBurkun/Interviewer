import React, {Component} from "react";
import {Alert} from "reactstrap";
import "./Notifications.css";
import {connect} from "react-redux";

class Notifications extends Component {

    render() {
        let array = this.props.notifications.notifications;

        const notifications = array.map((value, index) =>
            <div key={index}>
                <Alert
                    color={value.status}
                    className="notification"
                    isOpen={value.show}
                    toggle={() => this.onDismiss()}
                >
                    {value.text}
                </Alert>
            </div>
        );


        return (
            <div className="notification-container">
                {notifications}
            </div>
        )
    }

}

function mapStateToProps (state) {
    return {
        notifications: state.notifications
    }
}

export default connect(mapStateToProps)(Notifications);
