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

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,13,2,1,now(),?,?,?,?)',
    [Number(dados.Si_7),Number(dados.Oi_7),Number(dados.Di_13), Number(dados.Si_7) * Number(dados.Oi_7) * Number(dados.Di_13)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,14,2,1,now(),?,?,?,?)',
    [Number(dados.Si_7),Number(dados.Oi_7),Number(dados.Di_14), Number(dados.Si_7) * Number(dados.Oi_7) * Number(dados.Di_14)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,15,2,1,now(),?,?,?,?)',
    [Number(dados.Si_8),Number(dados.Oi_8),Number(dados.Di_15), Number(dados.Si_8) * Number(dados.Oi_8) * Number(dados.Di_15)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,16,2,1,now(),?,?,?,?)',
    [Number(dados.Si_8),Number(dados.Oi_8),Number(dados.Di_16), Number(dados.Si_8) * Number(dados.Oi_8) * Number(dados.Di_16)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,17,2,1,now(),?,?,?,?)',
    [Number(dados.Si_9),Number(dados.Oi_9),Number(dados.Di_17), Number(dados.Si_9) * Number(dados.Oi_9) * Number(dados.Di_17)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,18,2,1,now(),?,?,?,?)',
    [Number(dados.Si_9),Number(dados.Oi_9),Number(dados.Di_18), Number(dados.Si_9) * Number(dados.Oi_9) * Number(dados.Di_18)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,19,2,1,now(),?,?,?,?)',
    [Number(dados.Si_10),Number(dados.Oi_10),Number(dados.Di_19), Number(dados.Si_10) * Number(dados.Oi_10) * Number(dados.Di_19)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,20,2,1,now(),?,?,?,?)',
    [Number(dados.Si_10),Number(dados.Oi_10),Number(dados.Di_20), Number(dados.Si_10) * Number(dados.Oi_10) * Number(dados.Di_20)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,21,2,2,now(),?,?,?,?)',
    [Number(dados.Si_11),Number(dados.Oi_11),Number(dados.Di_21), Number(dados.Si_11) * Number(dados.Oi_11) * Number(dados.Di_21)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,22,2,2,now(),?,?,?,?)',
    [Number(dados.Si_11),Number(dados.Oi_11),Number(dados.Di_22), Number(dados.Si_11) * Number(dados.Oi_11) * Number(dados.Di_22)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,23,2,2,now(),?,?,?,?)',
    [Number(dados.Si_12),Number(dados.Oi_12),Number(dados.Di_23), Number(dados.Si_12) * Number(dados.Oi_12) * Number(dados.Di_23)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,24,2,2,now(),?,?,?,?)',
    [Number(dados.Si_12),Number(dados.Oi_12),Number(dados.Di_24), Number(dados.Si_12) * Number(dados.Oi_12) * Number(dados.Di_24)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,25,2,2,now(),?,?,?,?)',
    [Number(dados.Si_13),Number(dados.Oi_13),Number(dados.Di_25), Number(dados.Si_13) * Number(dados.Oi_13) * Number(dados.Di_25)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,26,2,2,now(),?,?,?,?)',
    [Number(dados.Si_13),Number(dados.Oi_13),Number(dados.Di_26), Number(dados.Si_13) * Number(dados.Oi_13) * Number(dados.Di_26)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,27,2,2,now(),?,?,?,?)',
    [Number(dados.Si_14),Number(dados.Oi_14),Number(dados.Di_27), Number(dados.Si_14) * Number(dados.Oi_14) * Number(dados.Di_27)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,28,2,2,now(),?,?,?,?)',
    [Number(dados.Si_14),Number(dados.Oi_14),Number(dados.Di_28), Number(dados.Si_14) * Number(dados.Oi_14) * Number(dados.Di_28)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,29,2,3,now(),?,?,?,?)',
    [Number(dados.Si_15),Number(dados.Oi_15),Number(dados.Di_29), Number(dados.Si_15) * Number(dados.Oi_15) * Number(dados.Di_29)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,30,2,3,now(),?,?,?,?)',
    [Number(dados.Si_15),Number(dados.Oi_15),Number(dados.Di_30), Number(dados.Si_15) * Number(dados.Oi_15) * Number(dados.Di_30)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,31,2,3,now(),?,?,?,?)',
    [Number(dados.Si_16),Number(dados.Oi_16),Number(dados.Di_31), Number(dados.Si_16) * Number(dados.Oi_16) * Number(dados.Di_31)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,32,2,3,now(),?,?,?,?)',
    [Number(dados.Si_16),Number(dados.Oi_16),Number(dados.Di_32), Number(dados.Si_16) * Number(dados.Oi_16) * Number(dados.Di_32)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,33,2,3,now(),?,?,?,?)',
    [Number(dados.Si_17),Number(dados.Oi_17),Number(dados.Di_33), Number(dados.Si_17) * Number(dados.Oi_17) * Number(dados.Di_33)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,34,2,3,now(),?,?,?,?)',
    [Number(dados.Si_17),Number(dados.Oi_17),Number(dados.Di_34), Number(dados.Si_17) * Number(dados.Oi_17) * Number(dados.Di_34)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,35,2,3,now(),?,?,?,?)',
    [Number(dados.Si_18),Number(dados.Oi_18),Number(dados.Di_35), Number(dados.Si_18) * Number(dados.Oi_18) * Number(dados.Di_35)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,36,2,3,now(),?,?,?,?)',
    [Number(dados.Si_18),Number(dados.Oi_18),Number(dados.Di_36), Number(dados.Si_18) * Number(dados.Oi_18) * Number(dados.Di_36)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,37,2,4,now(),?,?,?,?)',
    [Number(dados.Si_19),Number(dados.Oi_19),Number(dados.Di_37), Number(dados.Si_19) * Number(dados.Oi_19) * Number(dados.Di_37)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,38,2,4,now(),?,?,?,?)',
    [Number(dados.Si_19),Number(dados.Oi_19),Number(dados.Di_38), Number(dados.Si_19) * Number(dados.Oi_19) * Number(dados.Di_38)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,39,3,1,now(),?,?,?,?)',
    [Number(dados.Si_20),Number(dados.Oi_20),Number(dados.Di_39), Number(dados.Si_20) * Number(dados.Oi_20) * Number(dados.Di_39)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,40,3,1,now(),?,?,?,?)',
    [Number(dados.Si_20),Number(dados.Oi_20),Number(dados.Di_40), Number(dados.Si_20) * Number(dados.Oi_20) * Number(dados.Di_40)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,41,3,2,now(),?,?,?,?)',
    [Number(dados.Si_21),Number(dados.Oi_21),Number(dados.Di_41), Number(dados.Si_21) * Number(dados.Oi_21) * Number(dados.Di_41)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,42,3,2,now(),?,?,?,?)',
    [Number(dados.Si_21),Number(dados.Oi_21),Number(dados.Di_42), Number(dados.Si_21) * Number(dados.Oi_21) * Number(dados.Di_42)]);

    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,43,4,1,now(),?,?,?,?)',
    [Number(dados.Si_22),Number(dados.Oi_22),Number(dados.Di_43), Number(dados.Si_22) * Number(dados.Oi_22) * Number(dados.Di_43)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,44,4,1,now(),?,?,?,?)',
    [Number(dados.Si_22),Number(dados.Oi_22),Number(dados.Di_44), Number(dados.Si_22) * Number(dados.Oi_22) * Number(dados.Di_44)]);
    
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,45,4,1,now(),?,?,?,?)',
    [Number(dados.Si_23),Number(dados.Oi_23),Number(dados.Di_45), Number(dados.Si_23) * Number(dados.Oi_23) * Number(dados.Di_45)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,46,4,1,now(),?,?,?,?)',
    [Number(dados.Si_23),Number(dados.Oi_23),Number(dados.Di_46), Number(dados.Si_23) * Number(dados.Oi_23) * Number(dados.Di_46)]);
    
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,47,5,1,now(),?,?,?,?)',
    [Number(dados.Si_24),Number(dados.Oi_24),Number(dados.Di_47), Number(dados.Si_24) * Number(dados.Oi_24) * Number(dados.Di_47)]);
    await bd.query
    ('insert into avaliacoes (id_barragem,id_parametros,id_sistema,id_subsistema,data_hora,si,oi,di,rpni) values (1,48,5,1,now(),?,?,?,?)',
    [Number(dados.Si_24),Number(dados.Oi_24),Number(dados.Di_48), Number(dados.Si_24) * Number(dados.Oi_24) * Number(dados.Di_48)]);

    
    
    
    
    
    res.redirect('/cadastro-inspecao');

   
 
 });




 


app.listen(8080,function(){
    console.log("App rodando");
});
