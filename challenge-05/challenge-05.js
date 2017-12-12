/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = ['leandro', true, function() {}, null, 1.7, false, {valor: 32}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunction(arr) {
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myfunction( myArr[1] ); // true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function returnArray(arr, valor) {
  return arr[valor];
}
console.log(returnArray(myArr,3)); // null

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var mixedValuesArray = ['Curso', 33, true, undefined, null]; 

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnArray( mixedValuesArray, 0)); // 'Curso'
console.log(returnArray( mixedValuesArray, 1)); // 33
console.log(returnArray( mixedValuesArray, 2)); // true
console.log(returnArray( mixedValuesArray, 3)); // undefined
console.log(returnArray( mixedValuesArray, 4)); // null

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (nameBook) {
	var libraryBooks = {
		caixadepassaros: {
			quantidadePaginas: 272,
			autor: 'Malerman, Josh',
			editora: 'Intriseca'
		},
		1984: {
			quantidadePagina: 416,
			autor: 'Orwell, Geroge',
			editora: 'Compainha das Letras'
		},
		apocalipseZ: {
			quantidadePaginas: 312,
			autor: 'Loureiro, Manel',
			editora: 'No bolso'
		} 
	}
	return libraryBooks.nameBook;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
