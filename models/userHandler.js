var mysql = require('mysql');

class UserHandler {

    constructor(databaseConnection, userObject) {
        this.databaseConnection = databaseConnection
        this.userObject = userObject;
    }

    insert(successCallback, errorCallback) {
        this.databaseConnection.query(
            `INSERT INTO users (email, password) VALUES (?, ?)`,
            [this.userObject.email, this.userObject.password],
            successCallback,
            errorCallback
        );
    }

    delete() {

    }

    update() {

    }

}

module.exports = UserHandler;
