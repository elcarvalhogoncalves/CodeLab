// Função para deixar os números inteiros menores que 10 com dois digitos, sendo o primeiro digito 0
function dubleDigits(num){
    return num < 10 ? "0" + num : num
}

// Função para pegar o periodo do dia
function ampm(hh){
    return hh < 12 ? "AM" : "PM"
}
// Função para converter de 24 para 12 horas
function convertHoursTo12(hh){
    return hh > 12 ? hh - 12 : hh
}
// Função para atualizar o relogio
function updateClock() {
    // Adiquirindo a hora
    const date = new Date();

    // Pegando os segundos
    const ss = date.getSeconds();
    // Colocando os segundos no relogio digital
    document.querySelector(".seconds").innerHTML = dubleDigits(ss);
    // Colocando os segundos no relogio analogico atraves do angulo do ponteiro
    document.querySelector(".second").style.transform = `rotateZ(${ss*6}deg)`;
    // Pegando os minutos
    const mm = date.getMinutes();
    // Colocando os minutos no relogio analogico
    document.querySelector(".minute").style.transform = `rotateZ(${((mm*6)+(ss/10))}deg)`;
    // Pegando as horas
    const hh = date.getHours();    
    const newHour = +convertHoursTo12(hh); // Converte de 24 para 12 horas
    // Colocando as horas no relogio analogico
    document.querySelector(".hour").style.transform = `rotateZ(${((newHour*30)+(mm/2))}deg)`;
    // Colocando as horas e os minutos no relogio digital
    document.querySelector(".hours").innerHTML = dubleDigits(newHour) +":"+ dubleDigits(mm);
    // Colocando o periodo do dia no relogio digital
    document.querySelector(".time").innerHTML = ampm(hh);
}

// Função para atualizar o relogio a cada segundo atraves da função updateClock
setInterval(updateClock, 1000);
updateClock();