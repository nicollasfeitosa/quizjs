// Java Script

// function proximaFase(idEsconde, idExibe) {
// 	document.getElementById(idEsconde).style.display="none";
// 	document.getElementById(idExibe).style.display="block";
// }

// function marcaErrada(id) {
// 	document.getElementById(id).classList.add("marcaerrada");
// }

// Opções de Recomeçar o jogo!

// function resetar() {
// 	window.history.go(0)
// }

// Metodo correto:

// Universal
var numeroum = 1

// Sistema de vida:
var life = 3

document.getElementById('lifeCount').innerText=life

function verificaVida() {
	if (life == 0) {
		document.getElementById('fases').style.display="none";
		document.getElementById('LifeViwer').style.display="none";
		document.getElementById('gameover').style.display="block";
			document.getElementById('jogardnv').addEventListener("click", function(){
				window.history.go(0)
			});	

	} else {
		document.getElementById('lifeCount').innerHTML=life
	}
}

// Sistema de score:
var score = 5
var errou = 0

function adicionaScore() {
	score += numeroum;
}

// Funções de funcionamento
function marcaErrada(id) { // Marca a escolha errada
	document.getElementById(id).addEventListener("click", function(){
		document.getElementById(id).classList.add("marcaerrada");
			// Reduz em -1 a vida!
			life -= numeroum;
				verificaVida()
			// Conta erro
			errou += numeroum;
			// Remove score
			score -= numeroum
	});	
}

function proximaFase(idClick, idEsconde, idExibe) { // Avança para a proxima fase
	document.getElementById(idClick).addEventListener("click", function(){
		document.getElementById(idEsconde).style.display="none";
		document.getElementById(idExibe).style.display="block";
			// Aumenta a vida apos avançar de fase!
			life += numeroum;
				verificaVida()
			// Aumenta o Score
				adicionaScore()
	});	
}

function final(idClick, idEsconde, idExibe) {
	document.getElementById(idClick).addEventListener("click", function(){
		document.getElementById(idEsconde).style.display="none";
		document.getElementById(idExibe).style.display="block";
			// Aumenta a vida apos avançar de fase!
			life += numeroum;
				verificaVida()
			// Aumenta o Score
				adicionaScore()
		// Muda a pagina
		document.getElementById('LifeViwer').style.display="none";
		document.getElementById('qntdErros').innerText=errou;
		document.getElementById('LifeCount2').innerText=life;
		document.getElementById('score').innerHTML=score;
	});	
}


function resetar(idClick) {
	document.getElementById(idClick).addEventListener("click", function(){
		window.history.go(0)
	});	
}



// Fase 1
marcaErrada('f1-img1')
proximaFase('f1-img2', 'fase1', 'fase2')
marcaErrada('f1-img3')

// Fase 2
proximaFase('f2-img1', 'fase2', 'fase3')
marcaErrada('f2-img2')
marcaErrada('f2-img3')
marcaErrada('f2-img4')

// Fase 3
marcaErrada('f3-img1')
marcaErrada('f3-img2')
marcaErrada('f3-img3')
proximaFase('f3-img4', 'fase3', 'fase4')
marcaErrada('f3-img5')

// Fase 4
marcaErrada('f4-img1')
proximaFase('f4-img2','fase4', 'fase5')
marcaErrada('f4-img3')
marcaErrada('f4-img4')
marcaErrada('f4-img5')
marcaErrada('f4-img6')

// Fase 5
marcaErrada('f5-img1')
marcaErrada('f5-img2')
marcaErrada('f5-img3')
final('f5-img4','fase5', 'final')
marcaErrada('f5-img5')
marcaErrada('f5-img6')
marcaErrada('f5-img7')

// Fase Final
resetar('jogardnv')
resetar('jogardnv2')







