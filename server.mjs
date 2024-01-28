import app from "./src/index.mjs";

async function start(){
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log("Started");
    });
};


start();