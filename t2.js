// node ,sqlite sample
// select

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('app1.sqlite')

db.serialize(function() {
//    db.each('SELECT id,name FROM temp where id=0', function (err, row) {
    db.each('SELECT id,name FROM temp order by id', function (err, row) {
        console.log(row.id + ': ' + row.name)
    })
});
db.close();
return;

