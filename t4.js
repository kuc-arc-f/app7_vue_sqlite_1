// node ,sqlite sample
// delete

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('app1.sqlite')

db.serialize(function() {
    var stmt = db.prepare('delete from temp  where id= ?')
    stmt.run(1)
    stmt.finalize()    
});
db.close();
return;

