const mysql = require("mysql2");
const express = require("express");
var app = express();
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Madhavam@2004",
  database: "employee",
  multipleStatements: true,
});
mysqlConnection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log("express server is running"));

app.get("/foodcategory", (req, res) => {
    mysqlConnection.query(
      "SELECT * from foodcategory;",
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });

  

  app.get("/fooditems", (req, res) => {
    mysqlConnection.query(
      "SELECT * from fooditems;",
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });

  app.get('/fooditems/:id' , (req, res) => {
    mysqlConnection.query('SELECT * from fooditems WHERE customer_id = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

  

app.get("/foodregion", (req, res) => {
  mysqlConnection.query(
    "SELECT foodcategory.foodid,foodcategory.food_region,fooditems.foodname,fooditems.food_price from fooditems join foodcategory on foodcategory.customer_id=fooditems.customer_id;",
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});



    app.post("/update", (req, res) => {
    mysqlConnection.query(
        "insert into foodcategory(foodid,food_region) values(15,'Trivandrum');",
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });