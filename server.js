var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(bodyParser.json());
var path = require('path');
app.use(express.static( __dirname + '/angular/dist' ));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost/authors_crud');
mongoose.Promise = global.Promise;

var AuthorSchema = new mongoose.Schema({
    full_name: {type: String, required: true, minlength: 3},
});

mongoose.model('Author', AuthorSchema);
var Author = mongoose.model('Author')


app.get('/authors', function(req, res) {
    Author.find({}, function(err, data){
        if (err) {
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message:"Success", authors: data})
        }
    })
})

app.post("/authors/new", function(req, res){
    console.log(req.body);
    var author = new Author ({full_name: req.body.full_name});
    author.save(function(err, data){
        if(err) {
            console.log('something went wrong');
            // res.status(500).send(err)
            // res.json({message: "Error", error: err})
            res.json(err)
        } else {
          console.log('successfully added author:', req.body.full_name);
          console.log(data);
          res.json(data);
        }
    })
})

app.get("/authors/:id", function(req, res){
    Author.findOne({_id: req.params.id}, function(err, data){
        if (err) {
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message:"Display", data: data})
        }
    })
})

app.delete("/authors/remove/:id", function(req, res){
    Author.remove({_id: req.params.id}, function(err, data) {
        if (err) {
            console.log('something went wrong');
            res.json({message: "Error", error: err});
        }
        else {
            console.log('removed', req.params.task);
            res.json({message:"Removed"})
        }
    })
})

app.put("/authors/update/:id", function(req, res) {
    Author.find({_id: req.params.id}, function(err, data){
        if (err) {
            res.json({message: "Error", error: err})
        }
        else {
            if (req.body.full_name.length < 3) {
                console.log("Author's name must be at least 3 chars to edit");
                res.json({errors: "Name needs to be at least 3 characters."});
            }
            else {
                Author.update({_id: req.params.id}, {full_name: req.body.full_name}, function(err, data){
                    if (err) {
                        console.log('something went wrong');
                        res.json({message: "Error", error: err})
                    }
                    else {
                        console.log(data);
                        res.json({message: "Updated", full_name: req.body.full_name})
                    }
                })
            }
        }
    })
})



app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./angular/dist/index.html"))
    });

app.listen(8000, function() {
    console.log("listening on port 8000");
})
