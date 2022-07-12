const express = require('express')
const app = express()

//Estou dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs')

app.get('/:nome/:lang', (req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = true
    res.render('index', {
        nome: nome,
        lang: lang,
        empresa: 'Guia do programador',
        inscritos: 8040,
        msg: exibirMsg
    })
})

app.listen(3000, () => {
    console.log('App rodando!')
})