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

function fetchUsers(successCallback) {
    $.get({
        url: '/users',
        success: successCallback
    });
}