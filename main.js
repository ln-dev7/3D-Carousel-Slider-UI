import "./style.scss";
import gsap from "gsap";

const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    gsap.to(".texts", {
      duration: 1.5,
      x: `-${index * 100}%`,
      ease: "elastic.out(1,.85)",
    });
    gsap.to(".fruits", {
      duration: 1.5,
      y: `-${index * 100}%`,
      ease: "elastic.out(1,0.85)",
    });
    if (index === 0) {
      gsap.to("#app", {
        duration: 1.5,
        background: "radial-gradient(50% 50% at 50% 50%, #FFCCD9 0%, #FF3D6C 100%)",
        ease: "elastic.out(1,0.85)",
      });
      gsap.to(".beer-1", {
        top: "auto",
        left: "auto",
        rotate: 0,
        duration: 1.5,
        ease: "elastic.out(1,0.85)",
        opacity: 1,
      });
      gsap.to(".beer-2", {
        top: -20,
        left: -750,
        rotate: 48,
        duration: 1.5,
        ease: "elastic.out(1,0.85)",
        opacity: 0,
      });
      gsap.to(".beer-3", {
        top: 500,
        left: 1250,
        rotate: 120,
        duration: 1.5,
        ease: "elastic.out(1,0.85)",
        opacity: 0,
      });
    }
    if (index === 1) {
      gsap.to("#app", {
        duration: 1.5,
        background: "radial-gradient(50% 50% at 50% 50%, #FFE4C1 0%, #FF9B16 100%)",
        ease: "elastic.out(1,0.85)",
      });
      gsap.to(".beer-3", {
        top: -20,
        left: -750,
        rotate: 48,
        duration: 1.5,
        ease: "elastic.out(1,0.85)",
        opacity: 0,
      });
      gsap.to(".beer-2", {
        top: "auto",
        left: "auto",
        rotate: 0,
        duration: 1.5,
        ease: "elastic.out(1,0.85)",
        opacity: 1,
      });
      gsap.to(".beer-1", {
        top: 500,
        left: 1250,
        rotate: 120,
        duration: 1.5,
        ease: "elastic.out(1,0.85)",
        opacity: 0,
      });
    }
    if (index === 2) {
      gsap.to("#app", {
        duration: 1.5,
        background: "radial-gradient(50% 50% at 50% 50%, #E0FFC1 0%, #7FD925 100%)",
        ease: "elastic.out(1,0.85)",
      });
      gsap.to(".beer-2", {
        top: -20,
        left: -750,
        rotate: 48,
        duration: 1.5,
        ease: "elastic.out(1,0.85)",
        opacity: 0,
      });
      gsap.to(".beer-3", {
        top: "auto",
        left: "auto",
        rotate: 0,
        duration: 1.5,
        ease: "elastic.out(1,0.85)",
        opacity: 1,
      });
      gsap.to(".beer-1", {
        top: 500,
        left: 1250,
        rotate: 120,
        duration: 1.5,
        ease: "elastic.out(1,0.85)",
        opacity: 0,
      });
    }
  });
});
