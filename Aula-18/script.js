const nome = document.getElementById('nome')
const preco = document.getElementById('preco')
const categoria = document.getElementById('categoria')



function imprimirDadosDoFormulario(){
const produto = {
nome: nome.value,
preco: preco.value,
categoria: categoria.value

}

console.log(produto)

}