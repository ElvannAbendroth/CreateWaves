class UserListUI {

    constructor (wrapperId) {
        this.wrapperId = wrapperId;
    }

    init () {
        const html = `<ul id="userList"></ul>`;
        $('#' + this.wrapperId).html(html);
    }

    setUsers(userArray) {
        $('#userList').html(
            userArray.map(user => `<li>${user.email}</li>`)
        );
    }
}