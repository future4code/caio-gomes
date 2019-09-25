let devoOferecerBolo = true;
let pedacosDeBoloConsumidos = 0;

while (devoOferecerBolo) {
  devoOferecerBolo = confirm("Aceita um pedaço de bolo?");
      
  pedacosDeBoloConsumidos = pedacosDeBoloConsumidos + 1;

}

console.log("Você comeu ", pedacosDeBoloConsumidos, " pedaços de bolo");
