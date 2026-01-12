const snowContainer = document.getElementById("snow-container");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Random horizontal position
    snowflake.style.left = Math.random() * window.innerWidth + "px";

    // Bigger size variation
    const size = Math.random() * 4 + 3;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Slower fall but more flakes
    snowflake.style.animationDuration = 4 + Math.random() * 4 + "s";
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;

    snowContainer.appendChild(snowflake);

    // Remove after falling
    setTimeout(() => {
        snowflake.remove();
    }, 9000);
}

// ⬇️ INCREASE SNOW DENSITY HERE
setInterval(createSnowflake, 80); // ⬅️ lower = more snow
