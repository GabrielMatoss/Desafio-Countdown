 
 const formatarDigito = (digito) => digito < 10 ? "0" + digito : digito;

 const atualizar = (tempo) => {
     const segundos = document.getElementById("seconds");
     const minutos = document.getElementById("minutes");
     const horas = document.getElementById("hours");
     const dias = document.getElementById("days");

     const qtdSegundos = tempo % 60;
     const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
     const qtdHoras =  Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
     const qtdDias = Math.floor(tempo / (60 * 60 * 24));

     segundos.textContent = formatarDigito(qtdSegundos);
     minutos.textContent = formatarDigito(qtdMinutos);
     horas.textContent = formatarDigito(qtdHoras)
     dias.textContent = formatarDigito(qtdDias)
 }
 
 const contagemRegressiva = (tempo) => {
    const pararContagem = () => {clearInterval(idInterval)}

    const contar = () => {
        if(tempo === 0){
            pararContagem()
        }
        atualizar(tempo);
        tempo--;
    }
    const idInterval = setInterval(contar,1000);
 }
 contagemRegressiva(345600) // Aqui é colocado os segundos.
 //Eu poderia ter feito uma função para nao precisar colocar os segundos, porem eu decidi deixar os segundos mesmo :)

 //Modal 
 function press(){
    let modal = document.querySelector(".modal")

    modal.style.display = "flex";
}

function fechar(){
    let close = document.querySelector(".modal")

    close.style.display = "none";
}