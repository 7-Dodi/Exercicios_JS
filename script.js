/*Praticando Logica com Java Script*/
let vector = [
    2,
    3,
    5,
    6,
    10,
    20,
    22,
    51,
    65
  ]; /*Criando um vetor de n posições */
  /*Crianções de variáveis*/
  let maior = vector[0];
  let menor = vector[0];
  let soma = 0;
  let quant = 0;
  
  for (let k in vector) {
    if (vector[k] > maior) {
      /*Procuarndo o maior valor */
      maior = vector[k];
    } else if (vector[k] < menor) {
      /*Procurando o menor valor*/
      menor = vector[k];
    }
    soma = soma + vector[k]; /*Somando as posiçõe do vetor*/
    quant++; /*Somando a quantidade de posições do vetor */
  }
  let media = soma / quant; /*Calculando a media do vetor*/
  
  /*Informando os resulatdos */
  console.log(`O maior termo do vetor eh: ${maior}`);
  console.log(`O menor termo do vetor eh: ${menor}`);
  console.log(`A soma de todos as posições do vetor eh: ${soma}`);
  console.log(`A quantidade de elementos do vetor eh: ${quant}`);
  console.log(`A media do vetor eh: ${media}`);
  