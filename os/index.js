require('dotenv').config(); 
const os = require('os'); 


function getOSInfo() {
    console.log("Платформа:", os.platform());
    console.log("Свободная память (MB):", (os.freemem() / 1024 / 1024).toFixed(2));
    console.log("Главная директория:", os.homedir());
    console.log("Имя ПК:", os.hostname());
    console.log("Сетевые интерфейсы:", os.networkInterfaces());
}


function checkMemory() {
    const freeMemoryGB = os.freemem() / 1024 / 1024 / 1024;
    if (freeMemoryGB > 4) {
        console.log("больше 4GB");
    } else {
        console.log("меньше 4GB");
    }
}

function runIfAdmin() {
    if (process.env.MODE === "admin") {
        console.log("Доступ разрешен");
        getOSInfo();
    } else {
        console.log("У вас недостаточно");
    }
}


runIfAdmin();
checkMemory();
