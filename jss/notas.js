let notas = ["4", "5", "7","8","9"];
let notas_aprovado = [];
for (var i = 0; i < notas.length; i++) {

if (notas[i] >= 6) { 
  notas_aprovado.push(notas[i])
}
}
console.log(notas_aprovado)