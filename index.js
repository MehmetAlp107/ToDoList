const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mysql = require("mysql");
const port = 8000;
​
const app = express();
​
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));
​
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '12344321',
    database : 'todo-list'
});
​
connection.connect((hata) => {
    if(hata){ throw hata; }
    console.log("Bağlantı Başarılı....");
});
​
​
function getAllTodo (callback){ //todoları getirdiğimiz yer
    let sqlQuery = "SELECT * FROM todo";
    connection.query(sqlQuery,(error,results,fields) => {
        callback(results);
    });
}
​
function addTodo(newTodo,callback) { //todo eklediğimiz fonksiyon
    
    let sqlQuery = `INSERT INTO todo (todo_name) VALUES ('${newTodo}');`
​
    connection.query(sqlQuery,(error,results,fields) => {
        if(error){throw error;}
        callback(results);
    });
​
}
​
app.post("/ekle",(req,res) => {
    let todo = req.body.todo; //todo fomumuzadaki todo nameine sahip element
​
    //console.log(todo);    
    addTodo(todo,(gelenDeger) => {
        
        res.redirect("/")
​
    })
​
})
​
app.get("/",(req,res) => {
​
    getAllTodo((gelenDegerler) => {
        res.render("index",{
            allTodo : gelenDegerler
        });
    })
​
})
​
​
​
​
app.listen(port,() => {
    
    console.log(`localhost:${port} nolu port dinleniyor...`);
​
})
Collapse



