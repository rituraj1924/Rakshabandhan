// Random background emojis
    const emojis = ["💖", "💕", "❤️", "🎉", "💝", "💓", "✨"];
    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.fontSize = Math.random() * 2 + 1 + "rem";
        emoji.style.animationDuration = Math.random() * 5 + 5 + "s";
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 10000);
    }
    setInterval(createEmoji, 200);

    // Video overlay click event
    document.getElementById('playVideo').addEventListener('click', function () {
        document.getElementById('videoOverlay').style.display = 'flex';
    });