const botaoCalcular = document.getElementById("botao-calcular");
const imcResultado = document.getElementById("imc-resultado");
const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");
const form = document.getElementById("formulario-imc");

function calculaImc(paciente) {
  const imc = paciente.peso / (paciente.altura * paciente.altura);
  testaImc(imc);

    return imc.toFixed(2);
  
}

function validaPeso(paciente){
if(paciente.peso > 0 && paciente.peso <= 200){
    return true;
}else{ form.reset(), alert("Peso inválido") }

}
function validaAltura(paciente){
    if(paciente.altura > 0 && paciente.altura < 3){
        return true;
    }else{ form.reset(), alert("Altura invalida")}
    }

botaoCalcular.addEventListener("click", (event) => {
  event.preventDefault();
  const paciente = {
    nome: document.getElementById("nome").value,
    peso: document.getElementById("peso").value,
    altura: document.getElementById("altura").value,
  };
  if (form.reportValidity() && validaAltura(paciente) && validaPeso(paciente)) {
    imcResultado.textContent = `${paciente.nome} o Seu IMC é
        ${calculaImc(paciente)}`;
    form.reset();
  }
});

function sinalVermelho() {
  apagaFarol();
  limpaTexto();
  vermelho.classList.add("vermelho");
}
function sinalAmarelo() {
  apagaFarol();
  limpaTexto();
  amarelo.classList.add("amarelo");
}
function sinalVerde() {
  apagaFarol();
  limpaTexto();
  verde.classList.add("verde");
}

function apagaFarol() {
  vermelho.classList.remove("vermelho");
  amarelo.classList.remove("amarelo");
  verde.classList.remove("verde");
}
function limpaTexto() {
  vermelho.textContent = "";
  amarelo.textContent = "";
  verde.textContent = "";
}

function testaImc(imc) {
  if (imc < 17) {
    sinalVermelho();
    vermelho.textContent = "Muito abaixo do peso!!!";
  }
  if (imc >= 17 && imc <= 18.49) {
    sinalAmarelo();
    amarelo.textContent = "Abaixo do peso!!";
  }
  if (imc >= 18.5 && imc <= 24.99) {
    sinalVerde();
    verde.textContent = "Parabés você está com o seu peso ideal!";
  }
  if (imc >= 25 && imc <= 29.99) {
    sinalAmarelo();
    amarelo.textContent = "Opa, está acima do peso!!";
  }
  if (imc > 30) {
    sinalVermelho();
    vermelho.textContent = "Muito acima do peso!!!";
  }
}
