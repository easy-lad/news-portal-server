const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;
const objectId = mongoose.Schema.Types.ObjectId;

mongoose.Promise = Promise;


class NewsMongodb {
    constructor (settings) {
        const c = mongoose.createConnection(`mongodb://localhost:8008/test`, {useMongoClient:true});
        this._ModelEntry = c.model('NewsEntry', NewsMongodb.NEWS_ENTRY_SCHEMA);
    }
    
    add (fields) {
        return this._ModelEntry.create({}).then(() => 'new entry has been created', () => {throw {code:500, text:'MongoDB failed'}});
    }
}

NewsMongodb.NEWS_ENTRY_SCHEMA = new mongoose.Schema({
    _id     : {type: objectId, 'default': new ObjectId      },
    title   : {type: String,   'default': 'no title given'  },
    summary : {type: String,   'default': 'no summary given'},
    body    : {type: String,   'default': 'no body given'   },
    tags    : {type: [String], 'default': []                }
});

module.exports = NewsMongodb;
