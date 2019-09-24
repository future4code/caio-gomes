// Coding together
function ex1() {
    const idade = Number(prompt("Qual é a sua idade?"));
    if(idade >= 3 && idade <= 4){
        console.log("Mirim");
    } else if(idade >=5 && idade <=7){
        console.log("Infantil A");
    } else if(idade >= 8 && idade <=10){
        console.log("Infantil B");
    } else if(idade >=11 && idade <=13){
        console.log("Juvenil A");
    } else if(idade >=14 && idade <=17){
        console.log("Juvenil B");
    } else if(idade >=18 && idade <=50){
        console.log("Adulto");
    } else if(idade >=51) {
      console.log("Veterano");
    } else {
    console.log("Idade inválida");
    }} 
  
  
  function ex2(){
    const numeroInformado = Number(prompt("Informe um número para checar a paridade"));
  
    if(numeroInformado % 2 === 0 ){
      console.log("Seu número é par");
    }else {
      console.log("Seu número é impar");
    }
  }
  
  //-----------------------------------------------------
  function aula3_ex1a(){
    const informeNumero = Number(prompt("Informe um número"));
    const informeNumero2 = Number(prompt("Informe outro número"));
     if (informeNumero === informeNumero2){
      console.log("Os números informados são iguais, por favor informe números diferentes!");
    } else if (informeNumero > informeNumero2){
      console.log(informeNumero, informeNumero2);
    } else if (informeNumero < informeNumero2){
      console.log(informeNumero2, informeNumero);
    }
  }
  //aula3_ex1a
  
  function aula3_ex1b() {
    const informeNumero = Number(prompt("Informe um número"));
    const informeNumero2 = Number(prompt("Informe outro número"));
    const informeNumero3 = Number(prompt("Informe outro número"));
      
      if(informeNumero === informeNumero2 && informeNumero2 === informeNumero3){
        console.log("Os números informados são iguais, por favor informe números diferentes!")
  
      } else if (informeNumero > informeNumero2 && informeNumero2 > informeNumero3){
        console.log(informeNumero, informeNumero2, informeNumero3);
  
      } else if (informeNumero < informeNumero2 && informeNumero2 < informeNumero3){
        console.log(informeNumero3, informeNumero2, informeNumero);
  
      } else if (informeNumero < informeNumero3 && informeNumero2 > informeNumero3){
        console.log(informeNumero2, informeNumero3, informeNumero);
  
      } else if (informeNumero3 > informeNumero && informeNumero > informeNumero2){
        console.log(informeNumero3, informeNumero, informeNumero2);
  
      } else if (informeNumero2 > informeNumero && informeNumero > informeNumero3){
        console.log(informeNumero2, informeNumero, informeNumero3);
      }
  }
  //aula3_ex1b
  
  function aula3_ex2a(){
      
      const animal = confirm("É um animal?");
  
          if (animal === true){
            const temPelo = confirm("Tem Pelo?");
            if (temPelo === true){
              const late = confirm("Late?");
              if (late === true){
                console.log("É um cachorro")
              }else{
                console.log("É um gato");
              }
            } else { 
              const voa = confirm("Voa?");
              if (voa === true){
                console.log("É um pássaro");
              } else{
                  console.log("É um peixe");
              }
            }
          } else {
            console.log("É uma pedra");
          }
  }
  //aula3_ex2a()
  
  function aula3_ex2b(){
  
    const animal = confirm("É um animal?");
  
          if (animal === true){
            const temPelo = confirm("Tem Pelo?");
            if (temPelo === true){
              const late = confirm("Late?");
              if (late === true){
                console.log("É um cachorro")
              }else{
                const naoLate = confirm("Gosta de queijo?");
                if (naoLate === true){
                  console.log("É um rato");
                } else{
                  console.log("É um gato");
                }
              }
            } else { 
              const voa = confirm("Voa?");
              if (voa === true){
                console.log("É um pássaro");
              } else{
                  const naoVoa = confirm("Anda na terra?");
                  if (naoVoa === true){
                    console.log("É um sapo");
                  } else {
                    console.log("É um peixe");
                  }
              }
            }
          } else {
            const naoAnimal = confirm("É verde?");
            if (naoAnimal === true){
              console.log("É uma planta");
            } else{
              console.log("É uma pedra");
            }
          }
  }
  //aula3_ex2b()
  
  
  function aula3_ex3() {
  
  }
  aula3_ex3()