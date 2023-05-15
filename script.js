// Desafio 1

document.getElementById("botao1").addEventListener("click", function () {
  const task1 = [];
  for (let i = 0; i <= 30; i++) {
    task1.push(i);
  }
  const impares = task1.filter((numero) => numero % 2 !== 0);
  alert(impares);
});

// Desafio 2

document.getElementById("botao2").addEventListener("click", function () {
  const task2 = [
    "arara",
    "amor",
    "asa",
    "longo",
    "ele",
    "dinossáuro",
    "esse",
    "peppa",
    "mamam",
    "tartaruga",
    "bandolin",
    "matam",
    "desodorante",
    "mundo",
    "metem",
    "terra",
    "água",
    "mirim",
    "fogo",
    "sopapos",
  ];
  const palindromos = task2.filter((palavra) => {
    const reversed = palavra.split("").reverse().join("");
    return palavra === reversed;
  });
  alert(palindromos);
});

// Desafio 3

document.getElementById("botao3").addEventListener("click", function () {
  function generateFibonacci(maximum) {
    var fib = [1, 1];
    var i = 2;

    while (fib[i - 1] + fib[i - 2] <= maximum) {
      fib[i] = fib[i - 1] + fib[i - 2];
      i++;
    }

    return fib;
  }

  var fibonacci = generateFibonacci(100);
  alert(fibonacci.join(" "));
});

//Desafio 4

document.getElementById("botao4").addEventListener("click", function () {
  let task4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  task4.unshift(0);
  task4.push(11);

  task4.splice(5, 1); // Remove o número 5 do array
  task4.splice(7, 1, 20, 21, 22); // Remove o número 8 e adiciona 20, 21 e 22 no índice 6
  alert(task4);
});

//Desafio 5
document.getElementById("botao5").addEventListener("click", function () {
  const pessoas = [
    { id: 1, nome: "Liz", idade: 2 },
    { id: 2, nome: "Thaís", idade: 32 },
    { id: 3, nome: "Jonathan", idade: 30 },
    { id: 4, nome: "Thainá", idade: 29 },
    { id: 5, nome: "Fabiano", idade: 45 },
  ];

  const nomesIdades = pessoas.map(
    (pessoa) => `${pessoa.nome}, ${pessoa.idade}`
  );

  alert(nomesIdades.join("\n"));
});

//Desafio 6
document.getElementById("botao6").addEventListener("click", function () {
  const pessoas = [
    { id: 1, nome: "Liz", idade: 2 },
    { id: 2, nome: "Thaís", idade: 32 },
    { id: 3, nome: "Jonathan", idade: 30 },
    { id: 4, nome: "Thainá", idade: 29 },
    { id: 5, nome: "Fabiano", idade: 45 },
  ];

  const tagsHTML = pessoas.map(
    (pessoa) => `<h3>${pessoa.id} - ${pessoa.nome} - ${pessoa.idade}</h3>`
  );
  alert(tagsHTML.join("\n"));
});

//Desafio 7
document.getElementById("botao7").addEventListener("click", function () {
  const objeto = {
    jason: "Jason",
    thais: "Thaís",
    liz: "Liz",
    jennei: "Jennei",
    jenyffer: "Jennyfer",
    joao: "João",
    bola: "Bola",
    gato: "Gato",
    jaguar: "Jaguar",
  };

  for (const prop in objeto) {
    if (prop.startsWith("j")) {
      delete objeto[prop];
    }
  }
  const resultado = JSON.stringify(objeto);
  alert(resultado);
});
