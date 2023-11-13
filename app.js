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
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,1,1,1,now(),?,?,?,?)',
    [Number(dados.Si_1),Number(dados.Oi_1),Number(dados.Di_1), Number(dados.Si_1) * Number(dados.Oi_1) * Number(dados.Di_1)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,2,1,1,now(),?,?,?,?)',
    [Number(dados.Si_1),Number(dados.Oi_1),Number(dados.Di_2), Number(dados.Si_1) * Number(dados.Oi_1) * Number(dados.Di_2)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,3,1,2,now(),?,?,?,?)',
    [Number(dados.Si_2),Number(dados.Oi_2),Number(dados.Di_3), Number(dados.Si_2) * Number(dados.Oi_2) * Number(dados.Di_3)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,4,1,2,now(),?,?,?,?)',
    [Number(dados.Si_2),Number(dados.Oi_2),Number(dados.Di_4), Number(dados.Si_2) * Number(dados.Oi_2) * Number(dados.Di_4)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,5,1,2,now(),?,?,?,?)',
    [Number(dados.Si_3),Number(dados.Oi_3),Number(dados.Di_5), Number(dados.Si_3) * Number(dados.Oi_3) * Number(dados.Di_5)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,6,1,2,now(),?,?,?,?)',
    [Number(dados.Si_3),Number(dados.Oi_3),Number(dados.Di_6), Number(dados.Si_3) * Number(dados.Oi_3) * Number(dados.Di_6)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,7,1,2,now(),?,?,?,?)',
    [Number(dados.Si_4),Number(dados.Oi_4),Number(dados.Di_7), Number(dados.Si_4) * Number(dados.Oi_4) * Number(dados.Di_7)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,8,1,2,now(),?,?,?,?)',
    [Number(dados.Si_4),Number(dados.Oi_4),Number(dados.Di_8), Number(dados.Si_4) * Number(dados.Oi_4) * Number(dados.Di_8)]);
    await bd.query    
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,9,1,3,now(),?,?,?,?)',
    [Number(dados.Si_5),Number(dados.Oi_5),Number(dados.Di_9), Number(dados.Si_5) * Number(dados.Oi_5) * Number(dados.Di_9)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,10,1,3,now(),?,?,?,?)',
    [Number(dados.Si_5),Number(dados.Oi_5),Number(dados.Di_10), Number(dados.Si_5) * Number(dados.Oi_5) * Number(dados.Di_10)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,11,1,4,now(),?,?,?,?)',
    [Number(dados.Si_6),Number(dados.Oi_6),Number(dados.Di_11), Number(dados.Si_6) * Number(dados.Oi_6) * Number(dados.Di_11)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,12,1,4,now(),?,?,?,?)',
    [Number(dados.Si_6),Number(dados.Oi_6),Number(dados.Di_12), Number(dados.Si_6) * Number(dados.Oi_6) * Number(dados.Di_12)]);
    
    
    
    
    res.redirect('/cadastro-inspecao');
   
 
 });




 


app.listen(8080,function(){
    console.log("App rodando");
});
