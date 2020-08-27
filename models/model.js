const json = require("../models/data2.json");

class Model {
    static get(cb){
        cb(json)
    }
}

module.exports = Model