// EXERCICIO 1
// function arrNumber(numbers: number[]){
// 	const odd = numbers.filter((number) => {
// 		return number % 2 !== 0
// 	})

// 	return {
// 		comprimentoDaArray: numbers.length,
// 		numerosImpares: odd.length,
// 		somaTotal: numbers.reduce((accum, currentValue) => {
// 			return accum + currentValue;
// 		}),
// 	}
// }
// console.log(arrNumber([1, 17, 60, 22, 35, 30, 8, 47, 62]));

//EXERCICIO 2
// type post = {
//   autor: string;
//   texto: string;
// };

// const post1: post = {
//   autor: 'Mussum',
//   texto: 'Todo mundo vê os porris que eu tomo'
// };

// const post2: post = {
//   autor: 'Chuck',
//   texto: 'Eu contei até o infinito. Duas vezes.'
// };

// const post3: post = {
//   autor: 'Mussum',
//   texto: 'mas ninguém vê os tombis que eu levo!'
// };

// const post4: post = {
//   autor: 'Astrodev',
//   texto: 'Grato.'
// };

// const post5: post = {
//   autor: 'Madruga, Seo',
//   texto: 'A vingança nunca é plena, mata a alma e a envenena.'
// };

// const arrayPosts: post[] = [post1, post2, post3, post4, post5];

// function pegarPostsPorAutor(posts: post[], autor: string): post[] {
//   if (autor) {
//     return posts.filter((el: post) => {
//       return el.autor === autor;
//     });
//   }
//   return arrayPosts;
// }

// console.log(pegarPostsPorAutor(arrayPosts, 'Mussum'));


//EXERCICIO 3

// function determinaAno (ano: number, sigla: string) {
// 	if(sigla === ''){
// 		return ano + 'DC'
// 	} else if (sigla === 'DC'){
// 		return ano + sigla
// 	} else if (sigla === 'AC'){
// 		return ano + sigla
// 	} else {
// 		return 'Erro ao determinar ano'
// 	}
// }

// console.log(determinaAno(1990, ''))