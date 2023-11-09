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

app.get('/login', (req,res,next)=>{
    res.render('login.html');
})



app.get('/',async(req,res, next)=>{
    let resultado = await bd.query('select * from usuarios');
    resultado = resultado[0];
    console.log(resultado);
    res.render('index.html',{usuarios: resultado});
});

app.get('/cadastro-barragem', (req,res,next)=>{
    res.render('cadastro.html');
})

app.get('/cadastro-inspecao', async(req,res,next)=>{
    res.render('tabelas.html');
})

app.get('/barragens-cadastradas',async (req,res,next)=>{
    
    let resultado = await bd.query('select * from barragens');
    resultado = resultado[0];
    console.log(resultado);
    res.render('teste.html', { barragens: resultado});
})

app.get('/cadastro-operador', (req,res,next)=>{
    res.render('pesquisa-insp.html');
})

app.post('/cadastro-barragem', async (req,res,next)=>{
   console.log(req.body);
   let dados = req.body;
    let resultado = await bd.query('insert into barragens (nome,localizacao) values (?,?)',[dados.nomebarragem,dados.cidade]);
    let id = resultado[0].insertId;
    console.log(id);
    res.redirect(`/barragens-cadastradas`);
   
})

app.post('/login', async(req,res ,next)=>{
    console.log(req.body);
    let dados = req.body;
    let resultado = await bd.query('insert into usuarios (nome,funcao) values (?,?)',[dados.nomeuser,dados.funcaouser]);
    let id = resultado[0].insertId;
    console.log(id);
    res.redirect('/');
   
 
 });

 app.post('/cadastro-inspecao', async(req,res ,next)=>{
    console.log(req.body);
    let dados = req.body;
    await bd.query
    ('insert into avaliacoes (id_avaliacao,id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,1,1,1,1,now(),?,?,?,?)',
    [Number(dados.Si_1),Number(dados.Oi_1),Number(dados.Di_1), Number(dados.Si_1) * Number(dados.Oi_1) * Number(dados.Di_1)]);

  
    
    res.redirect('/cadastro-inspecao');
   
 
 });




 


app.listen(8080,function(){
    console.log("App rodando");
});
