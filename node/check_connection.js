import { createConnection } from "mysql2";

const connection = createConnection({
    host: "192.168.0.19",
    user: "root",
    password: "123",
    database: "test",
});

connection.connect(function(err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

connection.end();