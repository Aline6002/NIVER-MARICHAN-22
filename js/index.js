document.addEventListener("DOMContentLoaded", function () {
    // Contagem regressiva até o dia 3 de maio de 2026
    const targetDate = new Date("May 3, 2026 00:00:00").getTime();

    const interval = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "🎉 É hoje! Feliz Aniversário Mari e Chan! 🎉";
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const milliseconds = Math.floor(distance % 1000);

            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;
            // Preenche os milissegundos com zeros à esquerda para ter sempre 3 dígitos
            document.getElementById("milliseconds").textContent = String(milliseconds).padStart(3, '0');
        }
    }, 30);
});