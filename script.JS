const altura1 = document.getElementById("altura");
const peso1 = document.getElementById("peso");
const resultado1 = document.getElementById("resultado");
const calcular = document.getElementById("button");
calcular.addEventListener("click", calcularIMC)
function calcularIMC(){
    const altura = parseFloat(altura1.value)
    const peso= parseFloat(peso1.value)
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado1.value = "Esta entrada não é válida";
        return;
    }
    else{
        const imc = peso/(altura * altura);
        resultado1.value = `seu imc é ${imc.toFixed(2)}`;
        setTimeout(()=>{
            resultado1.textContent="";
            altura1.textContent="";
            peso1.textContent="";
        },100000);
    }
}
