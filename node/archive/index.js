// import { createConnection } from "mysql2";


// const connection = createConnection({
//     host: "192.168.0.19",
//     user: "root",
//     password: "123",
//     database: "test",
// });

// connection.connect(function(err) {
//     if (err) {
//         return console.error("Ошибка: " + err.message);
//     } else {
//         console.log("Подключение к серверу MySQL успешно установлено");
//     }
// });


// function insertRandomDataToDB() {
    fetch('https://api.randomdatatools.ru/?count=10&params=LastName,FirstName,FatherName,Phone,Login,Password,Email')
    .then(response => response.json())
    .then(json => {
        // console.log(json);
        // const connection = createConnection({
        //     host: "192.168.0.19",
        //     user: "root",
        //     password: "123",
        //     database: "test",
        // });

        const users = json.map(el => ([el.LastName, el.FirstName, el.FatherName, el.Phone, el.Login, el.Password, el.Email]));
        console.log(users);
        // const sql = `INSERT INTO users(LastName,FirstName,FatherName,Phone,Login,Password,Email) VALUES ?`;
            
        // connection.query(sql, [users],
        //     function(err, results) {
        //         if (err) console.log(err);
        //         //else console.log(results.insertId);
        //     }
        // );

        // connection.end();
    })
// }

    // setTimeout(function run() {
    //     insertRandomDataToDB();
    //     setTimeout(run, 5000);
    //   }, 5000);
    // setInterval(insertRandomDataToDB, 1000);

// connection.end();


// const connection = createConnection({
//     host: "192.168.0.19",
//     user: "root",
//     password: "123",
//     database: "test",
// }).promise();

// // for (let i = 0; i < 2; i++) {

//     let sql = `INSERT INTO users(LastName,FirstName,FatherName,Phone,Login,Password,Email) VALUES ?`;
//     let data = getRandomRecord();
//     let record = [data.lName, data.fName, data.fathName, data.phone, data.login, data.password, data.email];
//     console.log(record);
//     pool.query(sql, record, function(err, results) {
//         if(err) console.log(err);
//         console.log(results);
//       })
//         .then(result =>{
//             console.log(result[0]);
//         })
//         .catch(function(err) {
//             console.log(err.message);
//         })
//         .then();
// }

// setInterval(function() {
    
// }, 100);