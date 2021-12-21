const botaoCalcular = document.getElementById('botao-calcular')





function calculaImc(paciente){
    const imc = paciente.peso / (paciente.altura * paciente.altura)
    return imc.toFixed(2);
 }

botaoCalcular.addEventListener('click', (event)=>{
    event.preventDefault()
    const paciente = {
        nome: document.getElementById('nome').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value
       }
       
    console.log(`${paciente.nome} o Seu IMC é ${calculaImc(paciente)} portanto está OK`)
})

