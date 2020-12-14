const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

/* aqui fica configurado o css dentro da pasta public */
server.use(express.static('public'))
// server.use(express.static('public/css'))



server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    return res.render("index")
})

server.get("/sobre", function(req, res){
    return res.render("sobre")
})

server.get("/receitas", function(req, res){
    return res.render("receitas")
})

server.listen(5000, function(){
    console.log("server is running")
})