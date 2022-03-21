

const app = require("./index");

const connect = require("./configs/db");

app.listen(6672,async function(){
    try {
        await connect();
        console.log("listening to 6672");
    } catch (error) {
        console.log(error);
    }
})