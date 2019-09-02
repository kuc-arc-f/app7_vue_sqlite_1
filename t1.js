// node ,sqlite sample

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('app1.sqlite')

db.serialize(function () {
    db.run('CREATE TABLE temp (id, name)')
    var stmt = db.prepare('INSERT INTO temp (id, name) VALUES (?, ?)')
  
    for (var i = 0; i < 10; i++) {
      stmt.run(i, 'name'+ i)
    }
    stmt.finalize()
  })
  
db.close()
return;
db.serialize(function() {
    db.each('SELECT id,name FROM temp', function (err, row) {
        console.log(row.id + ': ' + row.name)
    })
});
db.close();
return;
//
db.serialize(function () {
  db.run('CREATE TABLE lorem (info TEXT)')
  var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

  for (var i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i)
  }

  stmt.finalize()

  db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
    console.log(row.id + ': ' + row.info)
  })
})

db.close()


