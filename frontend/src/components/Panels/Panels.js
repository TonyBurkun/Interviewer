import React, {Component} from 'react';
import {PanelGroup, Panel} from 'react-bootstrap';
import {PropTypes} from 'prop-types';
import './panels.css';

class Panels extends Component {



    handlePanelCollapseClick(event) {

        let clickTarget = event.target;

        if (clickTarget.classList.contains('btn-js')) {
            let collapseLink = clickTarget.parentNode.parentNode.classList.contains('collapsed');
            collapseLink ? clickTarget.innerHTML = 'Collapsed': clickTarget.innerHTML = 'Expand';
        }

    }



    render(){

        let titleForActionBtn = this.props.titleForActionBtn;

        const panelTitle = (
            <div className="custom-panel-title">
                <div className="custom-panel-title__right-side">
                    <div className="btn btn-primary btn-sm custom-panel-title__btn btn-js">Expand</div>
                </div>
                <div className="custom-panel-title__left-side" onClick={(event) => {
                    event.stopPropagation()
                }}>
                    <div className="vacancy-info-block">
                        <div className="vacancy-info-block__item">Project</div>
                        <div className="vacancy-info-block__item">Position</div>
                        <div className="vacancy-info-block__item">Level</div>
                    </div>
                </div>
            </div>
        );

        return(

            <PanelGroup bsClass='custom-panel-group'>
                <Panel collapsible header={panelTitle} eventKey="1"
                       onClick={(event) => this.handlePanelCollapseClick(event)}>
                    <div className="custom-panel-body">
                        <div className="custom-panel-body__left">
                            <div className="vacancy-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam atque
                                blanditiis dolore ea eaque earum, esse magnam maiores neque, qui quidem quis
                                quos rerum soluta sunt ut voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam atque
                                blanditiis dolore ea eaque earum, esse magnam maiores neque, qui quidem quis
                                quos rerum soluta sunt ut voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam atque
                                blanditiis dolore ea eaque earum, esse magnam maiores neque, qui quidem quis
                                quos rerum soluta sunt ut voluptatibus.
                            </div>
                        </div>
                        <div className="custom-panel-body__right">
                            <button type="button" className="btn btn-primary">{titleForActionBtn}</button>
                        </div>
                        <div className="custom-panel-body__vacancy-controls btn-group">
                            <div className="btn btn-primary">Edit</div>
                            <div className="btn btn-info">Duplicate</div>
                            <div className="btn btn-danger">Delete</div>
                        </div>
                    </div>
                </Panel>

                <Panel collapsible header={panelTitle} eventKey="2"
                       onClick={(event) => this.handlePanelCollapseClick(event)}>
                    <div className="custom-panel-body">
                        <div className="custom-panel-body__left">
                            <div className="vacancy-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam atque
                                blanditiis dolore ea eaque earum, esse magnam maiores neque, qui quidem quis
                                quos rerum soluta sunt ut voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam atque
                                blanditiis dolore ea eaque earum, esse magnam maiores neque, qui quidem quis
                                quos rerum soluta sunt ut voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam atque
                                blanditiis dolore ea eaque earum, esse magnam maiores neque, qui quidem quis
                                quos rerum soluta sunt ut voluptatibus.
                            </div>
                        </div>
                        <div className="custom-panel-body__right">
                            <button type="button" className="btn btn-primary">{titleForActionBtn}</button>
                        </div>
                        <div className="custom-panel-body__vacancy-controls btn-group">
                            <div className="btn btn-primary">Edit</div>
                            <div className="btn btn-info">Duplicate</div>
                            <div className="btn btn-danger">Delete</div>
                        </div>
                    </div>
                </Panel>

                <Panel collapsible header={panelTitle} eventKey="3"
                       onClick={(event) => this.handlePanelCollapseClick(event)}>
                    <div className="custom-panel-body">
                        <div className="custom-panel-body__left">
                            <div className="vacancy-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam atque
                                blanditiis dolore ea eaque earum, esse magnam maiores neque, qui quidem quis
                                quos rerum soluta sunt ut voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam atque
                                blanditiis dolore ea eaque earum, esse magnam maiores neque, qui quidem quis
                                quos rerum soluta sunt ut voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam atque
                                blanditiis dolore ea eaque earum, esse magnam maiores neque, qui quidem quis
                                quos rerum soluta sunt ut voluptatibus.
                            </div>
                        </div>
                        <div className="custom-panel-body__right">
                            <button type="button" className="btn btn-primary">{titleForActionBtn}</button>
                        </div>
                        <div className="custom-panel-body__vacancy-controls btn-group">
                            <div className="btn btn-primary">Edit</div>
                            <div className="btn btn-info">Duplicate</div>
                            <div className="btn btn-danger">Delete</div>
                        </div>
                    </div>
                </Panel>
            </PanelGroup>

        );
    }
}

Panels.propTypes = {
    titleForActionBtn: PropTypes.string.isRequired
};

export default Panels;