let confirmaJogo = confirm("Quer iniciar uma nova rodada?");
  
  if (confirmaJogo === true){
    console.log("Bem-Vindo ao jogo de BlackJack!");
    const carta = comprarCarta(); 
  } else {
    console.log("O jogo acabou.");
  }

  
   function comprarCarta() {
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const naipes = ["♦️", "♥️", "♣️", "♠️"];
    const numeroUser1 = cartas[Math.floor(Math.random() * 13)];
    const numeroUser2 = cartas[Math.floor(Math.random() * 13)];
    const numeroComp1 = cartas[Math.floor(Math.random() * 13)];
    const numeroComp2 = cartas[Math.floor(Math.random() * 13)];
    const naipeUser1 = naipes[Math.floor(Math.random() * 4)];
    const naipeUser2 = naipes[Math.floor(Math.random() * 4)];
    const naipeComp1 = naipes[Math.floor(Math.random() * 4)];
    const naipeComp2 = naipes[Math.floor(Math.random() * 4)];
    let valorUser1;
    let valorUser2;
    let valorComp1;
    let valorComp2;
    
    
    if (numeroUser1 === "A") {
      valorUser1 = 11;
    } else if (numeroUser1 === "J" || numeroUser1 === "Q" || numeroUser1 === "K") {
      valorUser1 = 10;
    } else {
      valorUser1 = Number(numeroUser1);
    }

    if (numeroUser2 === "A") {
      valorUser2 = 11;
    } else if (numeroUser2 === "J" || numeroUser2 === "Q" || numeroUser2 === "K") {
      valorUser2 = 10;
    } else {
      valorUser2 = Number(numeroUser2);
    }


    if (numeroComp1 === "A") {
      valorComp1 = 11;
    } else if (numeroComp1 === "J" || numeroComp1 === "Q" || numeroComp1 === "K") {
      valorComp1 = 10;
    } else {
      valorComp1 = Number(numeroComp1);
    }

    if (numeroComp2 === "A") {
      valorComp2 = 11;
    } else if (numeroComp2 === "J" || numeroComp2 === "Q" || numeroComp2 === "K") {
      valorComp2 = 10;
    } else {
      valorComp2 = Number(numeroComp2);
    }


    let cartaUser1 = {
      textoUser1: numeroUser1 + naipeUser1,
      valorUser1: valorUser1
    }
    let cartaUser2 = {
      textoUser2: numeroUser2 + naipeUser2,
      valorUser2 : valorUser2
    }
      
    let cartaComp1 = {
      textoComp1 : numeroComp1 + naipeComp1,
      valorComp1 : valorComp1
    }
    
    let cartaComp2 = {
      textoComp2 : numeroComp2 + naipeComp2,
      valorComp2 : valorComp2
    }
    
    let pontuacaoUser = valorUser1 + valorUser2;
    let pontuacaoComp = valorComp1 + valorComp2;
    
    console.log("Usuário - cartas: " + cartaUser1.textoUser1 + " " + cartaUser2.textoUser2 + "  - " + "pontuação " + pontuacaoUser);
    console.log("Computador - cartas: " + cartaComp1.textoComp1 + " " + cartaComp2.textoComp2 + "  - " + "pontuação " + pontuacaoComp);


    if (pontuacaoUser === pontuacaoComp) {
      console.log("Empate!");
     } else if (pontuacaoUser > pontuacaoComp) {
       console.log("Usuário ganhou!");
     } else {
       console.log("Computador ganhou!");
     }

 
}



