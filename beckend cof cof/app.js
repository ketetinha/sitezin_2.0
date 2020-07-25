/* Importando os pacotes iniciais */
const express = require("express"),
      path    = require("path"),
    { static } = require("express"),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    User       = require("./models/user"),
    passport   = require("passport"),
    LocalStrategy = require("passport-local").Strategy,
    session    = require("express-session");

const app = express();

/* Iniciando a conexão com o servidor - Utilizando promises*/
mongoose.connect("mongodb://localhost/test_sitezin", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Servidor Mongo funcionou")
})
.catch(err => {
    console.log(err);
});

/* Configurando o express-sessions */
app.use(session({
    secret: 'Segredinho',
    resave: false,
    saveUninitialized: false,
  }))

/* Configurando o Passport JS com o passport-local-mongoose*/
app.use(passport.initialize());
app.use(passport.session()); //ver se realmente precisa disso depois

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


/* Importando as rotas dos módulos */
const generalRoutes = require("./routes/genRoutes"),
      authRoutes  = require("./routes/auth_routes"),
      testRoutes  = require("./routes/prodRoutes");
/* Colocando a Engine padrão para EJS */
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false}));

/* 
    Utilizando o método JOIN do module PATH é possível 
    concatenar os paths em qualquer sistema operacional
    sem risco de erro. Motivo: diferentes OS usam diferentes
    formas de escrever o caminho (backslash, forwardslash).
 */

app.use(express.static(path.join(__dirname,"public")));
app.use(authRoutes);
app.use(testRoutes);
app.use(generalRoutes);


/* Servidor escutando na porta 3000 */
app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("Iniciando na porta 3000");
    }
});