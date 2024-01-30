// import app from "./src/index.js";
const app = require("./src/index.js");

async function start(){
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log("Started");
    });
};


start();