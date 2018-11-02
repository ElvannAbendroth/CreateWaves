class UserInterface {

    constructor(databaseConnection) {
        this.databaseConnection = databaseConnection;
    }

    listUsers(successCallback, errorCallback) {
        this.databaseConnection.query('SELECT (email) FROM users', [], successCallback, errorCallback);
    }

}

module.exports = UserInterface;