import React from 'react';
import ReactDOM from 'react-dom';
import App from './../components/App';
import expect from 'expect';

it('renders without crashing', () => {
    expect(App).toExist();
});
