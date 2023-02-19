import mysql from "mysql2";
import {getRandomRecord} from "./data.mjs";

const connection = mysql.createConnection({
    host: "192.168.0.19",
    user: "root",
    database: "test",
    password: "123"
}).promise();
   
let i = 0;
setTimeout(function run() {
    let sql = `INSERT INTO users(LastName,FirstName,FatherName,Phone,Login,Password,Email) VALUES ?`;
    let record = [];
    for (let i = 0; i < 1000; i++) {
        let data = getRandomRecord();
        record.push([data.lName, data.fName, data.fathName, data.phone, data.login, data.password, data.email]);
    }

    // console.log(record);

    connection.query(sql, [record])
    .then(result =>{
        // console.log(result[0]);
    })
    .catch(err =>{
        console.log(err);
    });

    if (i < 100) {
        setTimeout(run, 10);
        i += 10;
    }
    else {
        connection.end();
    }
}, 10);