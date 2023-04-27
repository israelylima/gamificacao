function sortearImagem() {
	// Obtém o elemento da imagem
	var imagem = document.getElementById("imagem");

	// Verifica se uma imagem foi selecionada
	if (imagem.src != "img/semcasa.png") {
		// Remove a imagem que já está sendo exibida
		var imagens = ["img/corvinal.png", "img/sonserina.png", "img/grifinoria.png", "img/lufalufa.png"];
		var index = imagens.indexOf(imagem.src.split('/').pop());
		if (index !== -1) {
			imagens.splice(index, 1);
		}
	} else {
		// Obtém uma lista de todas as imagens
		var imagens = ["img/corvinal.png", "img/sonserina.png", "img/grifinoria.png", "img/lufalufa.png"];
	}

	// Seleciona uma imagem aleatória da lista
	var imagemSorteada = imagens[Math.floor(Math.random() * imagens.length)];

	// Define a imagem sorteada na janela
	imagem.src = imagemSorteada;
}

const texto = "Bem-vindo(a) jovem bruxo(a)! Sei que você está ansioso(a) para descobrir em qual casa de Hogwarts irá se juntar. Mas antes disso, preciso que você clique no botão do lado para sortear sua casa. Lembre-se, a casa em que você será selecionado(a) é determinada não apenas por suas habilidades, mas também por suas escolhas e qualidades. Então, clique sabiamente! Estou ansioso para ver sua casa.";
let index = 0;

function escrever() {
  document.getElementById("texto").innerHTML += texto.charAt(index);
  index++;
  setTimeout(escrever, 30);
}

escrever();

