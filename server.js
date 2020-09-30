const express = require ('express');
const app = express();
var PORT = process.env.PORT || 8085;
var notes = [{title: 'Anteckningar' , text: 'Detta är anteckningar.'} , 
{title: 'Frih', text: 'Jag heter James Frih.'}, 
{title: 'Klar', text: 'Denna uppgift är nu så att säga klar.'}];


app.get ('/', (req, res) => {
    res.send ('Hej! Skriv "/notes" för att komma till anteckningar.'); 
});

app.get ('/:id', (req, res) => {
    if (req.params.id == 'notes') {
        var number = 1;
        notes.forEach(function myFunction(item){
            res.write(number + '.'+ item.title + '\n');
            number++;
        })
        res.end();
    }
    else {
        res.send('ERROR: 404');
    }
});

app.get ('/notes/:id', (req, res) => {
    if (notes.some(x => x.title === req.params.id)){
        var result= notes.find(x => x.title === req.params.id);
        res.send(result.title + '. ' + result.text);
    }
    else {
        res.send('ERROR: 404');
    }
    
});

app.listen(PORT);

console.log('Running at Port 8085');

