const express = require ('express');
const bodyParser = require ('body-parser');
const nunjucks = require('nunjucks');
const bd = require('./bd');

const app = express();

app.use(express.static('public'))

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser.urlencoded ({extended:false}));
app.use(bodyParser.json());


app.get('/login',function(req,res ,next){
    res.render('login.html');
});

app.get('/',function(req,res, next){
    res.render('index.html');
});

app.get('/cadastro-barragem', (req,res,next)=>{
    res.render('cadastro.html');
})

app.get('/cadastro-inspecao', (req,res,next)=>{
    res.render('tabelas.html');
})

app.get('/barragens-cadastradas',async (req,res,next)=>{
    
    let resultado = await bd.query('select * from barragens');
    resultado = resultado[0];
    console.log(resultado);
    res.render('teste.html', { barragens: resultado});
})

app.get('/cadastro-operador', (req,res,next)=>{
    res.render('cadastroOperador.html');
})

app.post('/cadastro-barragem', async (req,res,next)=>{
   console.log(req.body);
   let dados = req.body;
    let resultado = await bd.query('insert into barragens (nome,localizacao) values (?,?)',[dados.nomebarragem,dados.cidade]);
    let id = resultado[0].insertId;
    console.log(id);
   res.redirect(`/barragens-cadastradas`);
})



app.listen(8080,function(){
    console.log("App rodando");
});
