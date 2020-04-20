import constants from '../constants/actionTypes'

var intialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('username') ? localStorage.getItem('username') : ''
}

export default  (state = intialState, action) => {
    var updated = Object.assign({}, state);
    switch(action.type){
        case constants.USER_LOGGEDIN:
            updated
    }
}