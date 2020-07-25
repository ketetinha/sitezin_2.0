const express = require("express"),
      User    = require("../models/user"),
      passport= require("passport"),
      {welcomeEmail} = require("../emails/account");

const router = express.Router();

router.get("/entrar", (req, res)=>{
    res.render("entrar.ejs", {title: "Entrar",});
});

router.post("/entrar", 
            passport.authenticate('local', {
                successRedirect: "/",
                failureRedirect: "/entrar",
            }),
            (req,res)=>{
                //nao tem nada
            }
);

router.get("/registrar", (req,res)=>{
    res.render("registrar.ejs", {title: "Registrar",});
});

router.post("/registrar", (req,res)=>{
    if(req.body.password === req.body.cpassword){
        User.findOne({username: req.body.username}, (err, foundUser)=>{
            if(err) console.log("Error " + err);
            else if(!foundUser){
                    let newUser = {
                        username: req.body.username,
                        name: req.body.name,
                        lastName: req.body.lastName,
                    }
                    console.log(newUser);
                User.register(new User(newUser), req.body.password, (err, newUser) =>{
                        if(err) console.log("Error " + err);
                        else{
                            console.log(newUser)
                            passport.authenticate('local')(req, res, ()=>{
                                welcomeEmail(newUser.username, newUser.name);
                                res.redirect("/");    
                            });
                        }
                    });
            }
            else{
                //inforar que ja existe uma conta com esse email
                res.redirect("/registrar");
            }
        });
    } else {
        //Se as duas senhas informadas forem diferentes
        res.redirect("/registrar");
    }
});

module.exports = router;