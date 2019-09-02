// node ,sqlite sample

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('app1.sqlite')

//
db.serialize(function () {
    db.run('CREATE TABLE book (title, content)')
    var stmt = db.prepare('INSERT INTO book (title, content) VALUES (?, ?)')

    for (var i = 0; i < 10; i++) {
        stmt.run(i, 'c'+ i)
    }
    stmt.finalize()
})

db.close()


