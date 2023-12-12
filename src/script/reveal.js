const partner = document.querySelector(".partner");

const partnerObserver  = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const toReveals = entry.target.querySelectorAll(".reveal > *");
        toReveals.forEach(toReveal => toReveal.classList.add("reveal-visible"))
        
    })
}, {
    threshold: 0.5
})

partnerObserver.observe(partner);