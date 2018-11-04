function registerUser(email, password, username, successCallback) {
    $.post({
        url: '/users/register',
        data: {
            email,
            password,
            username
        },
        success: successCallback
    })
}

function loginUser(email, password, successCallback, errorCallback) {
    $.post({
        url: '/auth/login',
        data: {
            email,
            password
        },
        success: successCallback,
        error: errorCallback
    })
}

function fetchUsers(successCallback) {
    $.get({
        url: '/users',
        success: successCallback
    });
}