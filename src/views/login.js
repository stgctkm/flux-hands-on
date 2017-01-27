import React from 'react';
// import ReactDom from 'react-dom';
import LoginStore from '../stores/LoginStore';
import LoginStatus from './LoginStatus';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = LoginStore.getAll();//stateはreactの名前
    }

    render() {
        return (
            //react ではTOPレベルには要素を並列にかけない
            <div>
                <LoginForm isLogin={this.state.isLogin}/>
                <LoginStatus status={this.state.status}/>
                {/*<LoginStatus status={this.state.status} hoge="{123}"/>*/}
            </div>
        );
    }

    componentDidMount() {
        LoginStore.addChangeListener(() => {
            this.setState(LoginStore.getAll());
        });
    }
}
