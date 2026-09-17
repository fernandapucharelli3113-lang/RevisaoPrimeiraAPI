const express = require("express");

const app = express();
let ALUNOS = [
    {id:1, nome: "Bernardo", curso: "Desenvolvimento se sistemas"},
    {id:2, nome: "Camilly", curso: "Rede de computadores"},
    {id:3, nome: "Kaue", curso: "Banco de dados"},
    {id:4, nome: "Maria", curso: "Administração"},
    {id:5, nome: "Marjory", curso: "Desenvolvimento se sistemas"},
];

app.get("/",(req,res) =>{
    res.json({
        mensagem: "API Alunos Funcionando"
    })
})
const PORTA = 3000;
app.listen(PORTA, ()=>{
    console.log("Servidor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
})