/**
 * Created by setoguchi on 1/25/17.
 */
import React from 'react';
import ReactDom from 'react-dom';
import LoginAction from '../actions/LoginAction';

export default class LoginForm extends React.Component {

    constructor() {
        super();
    }

    render() {
        console.log('LoginForm.render()');
        if (this.props.isLogin) return null;
        return (
            <form>
                <div>
                    <label>ID<input type="text" ref="id"/></label>
                </div>
                <div>
                    <label>パスワード<input type="password" ref="password"/></label>
                </div>
                <button onClick={event => this.send(event)}>Login</button>
                {/*eventは予約後だから使わないほうが良い*/}
                {/*buttonはdefaultがsubmit*/}
                {/*type=buttonにするとeventBublingはしない*/}
            </form>
        );
    }

    send(e) {
        e.preventDefault();//一旦何もしないようにする
        return LoginAction.auth({
            id : ReactDom.findDOMNode(this.refs.id).value.trim(),
            password : ReactDom.findDOMNode(this.refs.password).value.trim()
        });
    }
}

