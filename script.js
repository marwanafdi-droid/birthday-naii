function startSurprise() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");

    // play musik
    document.getElementById("music").play();

    // mulai confetti
    startConfetti();
}

/* CONFETTI */
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];

    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speed: Math.random() * 3 + 1
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pieces.forEach(p => {
            ctx.fillStyle = "white";
            ctx.fillRect(p.x, p.y, p.size, p.size);

            p.y += p.speed;

            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(update);
    }

    update();
}