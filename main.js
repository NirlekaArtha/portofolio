function submitForm(e) {
    e.preventDefault();
    alert("Pesan sudah terkirim ✔️");
}

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    const video = card.querySelector(".video-project");

    card.addEventListener("mouseenter", () => {
        if(video) video.play();
    });

    card.addEventListener("mouseleave", () => {
        if(video) video.pause();
    });
});

