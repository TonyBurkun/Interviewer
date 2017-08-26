import React, {Component} from 'react';
import './vacanciesClosed.scss';

class VacanciesClosed extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="bcgr">
                <div className="row sameheight-container">
                    <div className="col-md-12">
                        <div className="title-block">
                            <h3 className="title">Closed vacancies</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VacanciesClosed;
