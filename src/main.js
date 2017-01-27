import React from 'react';
import ReactDom from 'react-dom';

import Login from './views/Login';
// <- jsx jsの場合は文字列みたいに'<Login />'にする
window.onload = () => {
    ReactDom.render(
        <Login />,
        document.getElementById('login')
    );
};