// script.js

document.getElementById('celebrateButton').addEventListener('click', function() {
    // Define multiple origins for the confetti pops
    const origins = [
        { x: 0.2, y: 0.2 },
        { x: 0.8, y: 0.2 },
        { x: 0.2, y: 0.8 },
        { x: 0.8, y: 0.8 }
    ];

    for (let i = 0; i < origins.length; i++) {
        for (let j = 0; j < 5; j++) {
            // Delay each pop
            setTimeout(function() {
                // Create a confetti effect from different origins
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: origins[i]
                });
            }, j * 200); // Delay each pop by 200 milliseconds
        }
    }
});
