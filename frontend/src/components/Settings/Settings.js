import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './settings.css';

class Settings extends Component{
    render(){
        return (
            <div className="bcgr">
                <div className="row sameheight-container">
                    <div className="col-md-12">
                        <div className="title-block">
                            <h3 className="title">Settings</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;