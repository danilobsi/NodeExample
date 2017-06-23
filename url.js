var url = require('url');

var adr = 'http://localhost:8080/test/default.html?year=2017&month=june';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var query = q.query;

console.log(query.month);