/* Neon Effects JS */

document.addEventListener('DOMContentLoaded', () => {
    initMatrixRain();
    updateGreeting();
});

function updateGreeting() {
    const hour = new Date().getHours();
    const statusText = document.querySelector('.status-bar');
    if (!statusText) return;

    let greeting = "SYSTEM ONLINE";
    if (hour < 12) greeting = "MORNING PROTOCOL INITIATED";
    else if (hour < 18) greeting = "AFTERNOON CYCLES ACTIVE";
    else greeting = "NIGHT MODE ENGAGED";

    statusText.textContent = greeting + " // WELCOME USER";
}

function initMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.classList.add('bg-grid'); // Re-using positioning style or add new class if needed
    // Overwrite some styles to make it a background
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-2'; // Behind the grid
    canvas.style.opacity = '0.3';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const cols = Math.floor(width / 20) + 1;
    const ypos = Array(cols).fill(0);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    function matrix() {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';

        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            else ypos[ind] = y + 20;
        });
    }

    setInterval(matrix, 50);
}
