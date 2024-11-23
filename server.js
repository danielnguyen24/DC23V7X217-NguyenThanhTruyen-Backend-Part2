const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer(){
    try {
        console.log("Database URI:", config.db.uri); // Thêm dòng này để kiểm tra URI
        await MongoDB.connect(config.db.uri);
        console.log("Connect to the database!");

        const PORT = config.app.port;
        app.listen(PORT, ()=>{
            console.log(`Server is running on the post ${PORT}`);
        });
    } catch (error){
        console.log("Cannot connect to the Database!",error);
        process.exit();
    }
}

startServer();