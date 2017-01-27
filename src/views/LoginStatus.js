/**
 * Created by setoguchi on 1/25/17.
 */
import React from 'react';

export default class LoginStatus extends React.Component {
    constructor() {
        super();
        return;
    }

    render() {
        return (
            <div>{this.props.status}</div>
            // <div>{this.props.hoge}</div>
        );
    }
}
