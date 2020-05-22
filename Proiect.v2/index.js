var express = require('express');/*include modulul express
memorand in variabila express obiectul asociat modulului(exportat de modul)*/
var path = require('path');
var app = express();

// pentru folosirea ejs-ului 
app.set('view engine', 'ejs');// asta imi permite sa scriu cod intre <%  si %>

console.log(__dirname);// in __dirname (predefinit!) am calea absoluta catre folderul radacina al proiectului 

//definirea folderului static de resurse
app.use(express.static(path.join(__dirname, "resurse")))


// cand se face o cerere get catre pagina de index 
app.get('/', function(req, res) {
	/*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
    res.render('html/index');
});

app.get('/pagina', function(req, res) {
	/*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
    res.render('html/pagina');
});
app.get('/recipes', function(req, res) {
	/*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
    res.render('html/recipes');
});


//fiind ultimul ajunge aici doar cand nu a gasit tratarea cererii mai sus
app.use(function(req, res){
	res.status(404).render("html/404")
})

app.listen(8080); //asteapta cereri
console.log('Aplicatia se va deschide pe portul 8080.');



