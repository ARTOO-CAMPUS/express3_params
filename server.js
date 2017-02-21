var express = require('express');
var app = express();

//PARAMS
app.get('/movies/:id', function (req, res) {
	var id = req.params.id;
	res.send(`dettaglio del film con id ${id}`);
});

//QUERY STRING
app.get('/movies', function (req, res) {
	var titolo = req.query.titolo || 'no titolo';
	var year = req.query.year || 'no anno';
	var actor = req.query.actor || 'no attore';
	res.send(`film con titolo: ${titolo}, dell'anno: ${year} e con attore: ${actor}`);
});

app.get('/movies', function (req, res) {});


//START DEL SERVER
app.listen(3000, function (req, res) {
	console.log("Server in esecuzione");
})