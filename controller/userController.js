const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


var { User } = require('../models/user')
var { mongoose } = require('../db/config')

var router = express.Router();

router.use(bodyParser.json());

router.get("/", (req, res) => {
        res.send("hello from user controller");
});

router.post("/inscription", (req, res) => {
        //1 - Recuperation des donnees 
        let data = req.body;

        //2-Creation d'un objet du model user
        var salt = bcrypt.genSaltSync(10);
        var mdpCrypte = bcrypt.hashSync(data.motdepasse, salt)

        var user = new User({
                nom:data.nom,
                prenom:data.prenom,
                email:data.email,
                telephone:data.telephone,
                motdepasse:mdpCrypte
        });

        //3-Insertion des donnees
        user.save().then(()=>{
                res.status(200).send({message:'Utilisateur inscri avec success'});
        }).catch((e)=>{
                res.status(400).send({message: 'Erreur Insertion'+e});
        });
        
});

module.exports = router;