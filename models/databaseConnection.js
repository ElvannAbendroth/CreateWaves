const mysql = require('mysql');

class DatabaseConnection {

    constructor(host, user, password, database) {
        this.con = mysql.createConnection({ host, user, password, database });
    }

    query(sqlStatement, variables, successCallback, errorCallback) {

        this.con.query(sqlStatement, variables, function (err, result) {
            if (err) {
                errorCallback(err);
            }
            successCallback(result);
        });

    }
}

module.exports = DatabaseConnection;