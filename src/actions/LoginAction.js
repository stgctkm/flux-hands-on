/**
 * Created by setoguchi on 1/25/17.
 */
import * as actionTypes from '../constants/actionTypes';　//全てimportしてオブジェクトに入れる
import dispatcher from '../dispatcher/AppDispatcher'; //defaultのみimportしてくる

export default {
    auth : authData => { //authDataは引数　LoginForm.jsでセットしているオブジェクト
        //実際はここでAPI呼び出し
        dispatcher.dispatch({
            actionType: actionTypes.AUTH,
            authData: authData
            //id : authData.id
        });
        return true;//なくても良い
    }
};
