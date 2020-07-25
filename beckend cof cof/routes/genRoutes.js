const express = require("express");


const router = express.Router();

router.get("/", (req,res)=>{
    res.render("landingPage", {title: "Café Moinho de Loiro",});
});

router.get("/teste", (req,res)=>{
    res.render("teste", {title: "Test Site",});
});

router.get("*", (req,res)=>{
    res.render("404page", {title: "404:Página não encontrada"})
});


module.exports = router;