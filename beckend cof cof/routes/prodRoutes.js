const express = require("express");

/* Criando o 'router' que vai armazenar as rotas e ser exportado
    para o arquivo principal (app.js) */
const router = express.Router();

/* Importando o model para criar o produto */

const prod = require("../models/produto");

router.get("/create-product", (req,res)=>{
    res.render("createProd", {title: "Produtin",});
});

router.post("/create-product", (req,res)=>{
    /* 
        Utilizando o body-parser, retiro o que é necessário do form enviado
        ( como projetei o form, sei quais informações estão contidas nele),
        depois crio um objeto chamado novoProd.
    */
    let novoProd = {
        title: req.body.title,
        description: req.body.title,
        price: req.body.price,
    }
    /* Após criar o objeto, crio o novo item no BD de dados */
    prod.create = novoProd;

    /* 
        Olhar o método para criar um novo item na coleção do MongoDB 
        Olhar os comandos para navegar no prompt do Mongo também
    */
});


module.exports = router;