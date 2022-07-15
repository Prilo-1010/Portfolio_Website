const db = require('../config/db')

class Client {
    constructor(fullname, email, subject, message) {
        this.fullname = fullname
        this.email = email
        this.subject = subject
        this.message = message
    }

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDay();

        let date = `${yyyy}-${mm}-${dd}`;

        let sql = `
      INSERT INTO clients  (
        fullname,
        email,
        subject,
        message,
        date
      )
      VALUES(
        '${this.fullname}',
        '${this.email}',
        '${this.subject}',
        '${this.message}',
        '${date}'
      )`;

        return db.execute(sql);
    }
}

module.exports = Client;