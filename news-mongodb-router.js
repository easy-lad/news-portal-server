const express     = require('express');
const NewsMongodb = require('./news-mongodb.js');

module.exports = (settings) => {
    const router = express.Router();
    const db = new NewsMongodb(settings);
    
    /* Create */  router.post  ('/',    (req, res) => db.add(req.body).then(v => res.status(v.httpCode).json(v)));
    /* Read   */  router.get   ('/',    (req, res) => res.status(501).send('GETing from MongoDB is to be implemented.'));
    /* Update */  router.put   ('/',    (req, res) => res.status(501).send('PUTing to MongoDB is to be implemented.'));
    /* Delete */  router.delete('/:id', (req, res) => db.remove(req.params.id).then(v => res.status(v.httpCode).json(v)) );
    
    return router;
}
