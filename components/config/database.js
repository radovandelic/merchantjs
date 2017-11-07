var mongoose = require("mongoose");
var keys = process.env.dbusername ? {
    dbusername: process.env.dbusername,
    dbpassword: process.env.dbpassword
} : require("./keys");

module.exports = {
    database: `mongodb://${keys.username}:${keys.password}@ds251435.mlab.com:51435/merchantjs`,
    startDB: function () {
        //to get rid of annoying promise/deprecated warnings
        mongoose.Promise = global.Promise;
        mongoose.connect(this.database, { useMongoClient: true });
        db = mongoose.connection;

        db.once("open", () => {
            console.log("Connected to mongodb");
        });

        db.on("error", (error) => {
            console.log(error);
        });
    }
}