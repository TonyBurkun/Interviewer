import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './seekers.css';

class Seekers extends Component{
    render(){
        return (
            <div className="bcgr">
                <div className="row sameheight-container">
                    <div className="col-md-12">
                        <div className="title-block">
                            <h3 className="title">Seekers</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Seekers;