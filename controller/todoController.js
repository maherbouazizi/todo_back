const express = require('express');
const bodyParser = require('body-parser');

                                                                                                                                                                                        
var router = express.Router();
router.use(bodyParser.json());

router.get("/",(req, res)=>{
        res.send("hello from todo controller");
});
module.exports = router;
