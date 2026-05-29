document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("[data-header]");
    const nav = document.querySelector("[data-nav]");
    const navToggle = document.querySelector("[data-nav-toggle]");
    const navBackdrop = document.querySelector("[data-nav-backdrop]");
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const revealItems = document.querySelectorAll(".reveal");
    const form = document.querySelector(".contact-form");
    const formNote = document.querySelector("[data-form-note]");

    const setHeaderState = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    const closeNav = () => {
        nav.classList.remove("is-open");
        header.classList.remove("nav-active");
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation");
        navBackdrop.setAttribute("aria-hidden", "true");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        header.classList.toggle("nav-active", isOpen);
        document.body.classList.toggle("nav-open", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        navBackdrop.setAttribute("aria-hidden", String(!isOpen));
    });

    navBackdrop.addEventListener("click", closeNav);

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && nav.classList.contains("is-open")) {
            closeNav();
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();
            closeNav();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    window.addEventListener("scroll", setHeaderState, { passive: true });
    setHeaderState();

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.16,
                rootMargin: "0px 0px -60px 0px"
            }
        );

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const slider = document.querySelector("[data-slider]");

    if (slider) {
        const track = slider.querySelector("[data-track]");
        const slides = Array.from(track.children);
        const dotsContainer = slider.querySelector("[data-dots]");
        const prevButton = slider.querySelector("[data-prev]");
        const nextButton = slider.querySelector("[data-next]");
        let activeIndex = 0;
        let autoPlayId;

        const dots = slides.map((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.setAttribute("aria-label", `Show testimonial ${index + 1}`);
            dotsContainer.appendChild(dot);
            dot.addEventListener("click", () => {
                updateSlider(index);
                restartAutoPlay();
            });
            return dot;
        });

        const updateSlider = (index) => {
            activeIndex = (index + slides.length) % slides.length;
            track.style.transform = `translateX(-${activeIndex * 100}%)`;
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle("is-active", dotIndex === activeIndex);
                dot.setAttribute("aria-current", dotIndex === activeIndex ? "true" : "false");
            });
        };

        const nextSlide = () => updateSlider(activeIndex + 1);
        const prevSlide = () => updateSlider(activeIndex - 1);

        const startAutoPlay = () => {
            autoPlayId = window.setInterval(nextSlide, 6200);
        };

        const stopAutoPlay = () => {
            window.clearInterval(autoPlayId);
        };

        const restartAutoPlay = () => {
            stopAutoPlay();
            startAutoPlay();
        };

        prevButton.addEventListener("click", () => {
            prevSlide();
            restartAutoPlay();
        });

        nextButton.addEventListener("click", () => {
            nextSlide();
            restartAutoPlay();
        });

        slider.addEventListener("mouseenter", stopAutoPlay);
        slider.addEventListener("mouseleave", startAutoPlay);
        slider.addEventListener("focusin", stopAutoPlay);
        slider.addEventListener("focusout", startAutoPlay);

        updateSlider(0);
        startAutoPlay();
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const message = String(formData.get("message") || "").trim();

        if (!name || !email || !message) {
            formNote.textContent = "Please share your name, email, and message so we can respond thoughtfully.";
            return;
        }

        form.reset();
        formNote.textContent = `Thank you, ${name}. Your note has been received and we will be in touch soon.`;
    });
});
