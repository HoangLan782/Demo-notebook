document.getElementById("open-config").addEventListener("click", function() {
    openModal();
});

var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".backdrop");
modal.style.opacity = 0;
backdrop.style.opacity = 0;
let duration = 0.5;
let timeOut = duration * 1100;
backdrop.addEventListener("click", function() {
    closeModal();
    document.querySelector(".confirm-modal").style.display = "none";
})

function openModal() {
    modal.style.display = "block";
    backdrop.style.display = "block";
    gsap.fromTo(
        modal,
        duration, {
            opacity: 1,
            y: 40,
        }, {
            opacity: 1,
            y: 0,
            ease: Power1.easeOut,
        }
    );
    gsap.fromTo(
        backdrop,
        duration, {
            opacity: 1,
            y: 40,
        }, {
            opacity: 1,
            y: 0,
            ease: Power1.easeOut,
        }
    );
}

function closeModal() {
    gsap.fromTo(
        modal,
        duration, {
            opacity: 1,
            y: 0,
        }, {
            opacity: 0,
            y: 40,
            ease: Power1.easeOut,
        }
    );
    gsap.fromTo(
        backdrop,
        duration, {
            opacity: 1,
            y: 0,
        }, {
            opacity: 0,
            y: 40,
            ease: Power1.easeOut,
        }
    );

    setTimeout(function() {
        modal.style.display = "none";
        backdrop.style.display = "none";
    }, timeOut);
}