var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send(`Benvenuto`);
});

//PARAMS 1
app.get('/movies/:id', function (req, res) {
	var id = req.params.id;
	res.send(`dettaglio del film con id ${id}`);
});

//PARAMS 2
app.get('/post/:idpost/comment/:idcomment', function (req, res) {
	var idpost = req.params.idpost;
	var idcomment = req.params.idcomment;
	res.send(`commento con id ${idcomment} del post con id ${idpost}`);
});

//QUERY STRING 1
app.get('/youtube', function (req, res) {
	var ricerca = req.query.v || '';
	res.send(`lista dei video con nome: ${ricerca}`);
});

//QUERY STRING 2
app.get('/movies', function (req, res) {
	var titolo = req.query.titolo || 'no titolo';
	var year = req.query.year || 'no anno';
	var actor = req.query.actor || 'no attore';
	res.send(`film con titolo: ${titolo}, dell'anno: ${year} e con attore: ${actor}`);
});




//START DEL SERVER
app.listen(3000, function (req, res) {
	console.log("Server in esecuzione");
})