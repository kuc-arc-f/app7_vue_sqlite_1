// node ,sqlite sample
// UPDATE

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('app1.sqlite')

db.serialize(function() {
    var stmt = db.prepare('update temp set name= ? where id= ?')
  
//    stmt.run('update-0', 0)
    stmt.run('update-1', 1)
    stmt.finalize()    
});
db.close();
return;

