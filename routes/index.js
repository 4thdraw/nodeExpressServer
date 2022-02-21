// routes/index

var express = require('express')
var router = express.Router()

router.get('/',function(req, res, next ){
    res.json({'message' : 'json message value'})
})

module.exports = router