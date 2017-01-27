/**
 * Created by setoguchi on 1/25/17.
 */
import * as actionTypes from '../constants/actionTypes'
import * as loginStatusTypes from '../constants/loginStatusTypes'
import dispatcher from '../dispatcher/AppDispatcher'
import {EventEmitter} from 'events'

const _login = {
    isLogin : false,
    status: loginStatusTypes.NOT_LOGGED_IN
};

class LoginStore extends EventEmitter {
    constructor() {
        super();
        dispatcher.register(payload => {
            if (payload.actionType === actionTypes.AUTH) {
                this.authenticate(payload.authData);
            }
        });
    }

    getAll() {
        return _login;
    }

    addChangeListener(callback) {
        return this.on('change', callback);
    }

    authenticate(authData) {
        if (authData.id && authData.password) {
            _login.isLogin = true;
            _login.status = loginStatusTypes.LOGGED_IN
        } else {
            _login.status = loginStatusTypes.INVALID_DATA
        }
        return this.emit('change');
    }
};

const store = new LoginStore();
export default store;
