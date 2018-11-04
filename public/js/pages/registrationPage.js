import UserListUI from '../components/UserListUI';

const userList = new UserListUI('userListContainer');
userList.init();

function updateUsersList() {
    fetchUsers((users) => userList.setUsers(users));
}

function registrationFormSubmitted(formComponent) {
    const { email, username, password } = formComponent.getInputValues();
    registerUser(email, password, username, () => {
        console.log('user created');
        formComponent.clear();
        updateUsersList();
    });
}

const registrationForm = new RegistrationUI('registrationFormContainer', registrationFormSubmitted);
registrationForm.init();

$(document).ready(() => {
    updateUsersList();
});