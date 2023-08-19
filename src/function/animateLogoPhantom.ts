import { gsap } from "gsap";

let isCompleteAnimate = true
export default function animateLogoPhantom() {
    if (!isCompleteAnimate) return;
    const tlBody = gsap.timeline();
    tlBody
        .to('.body-phantom', { delay: 0.5, duration: 0.2, rotate: 4, transformOrigin: 'center' })
        .to('.body-phantom', { rotate: -3, duration: 0.3, transformOrigin: 'center' })
        .to('.body-phantom', { rotate: 2, duration: 0.2, transformOrigin: 'center' })
        .to('.body-phantom', { rotate: 0, duration: 0.3, transformOrigin: 'center' });

    const tl = gsap.timeline({
        onStart() {
            isCompleteAnimate = (false);
        },
        onComplete() {
            isCompleteAnimate = (true);
        },
    });
    tl.to('.eye-circle', { delay: 0.5, scale: 0.1, duration: 0, transformOrigin: 'center' })
        .to('.eye-heart', { scale: 1.1, transformOrigin: 'center' })
        .to('.eye-heart', { rotate: 20, duration: 0.2, x: 3, y: 3 })
        .to('.eye-heart', {
            rotate: -10,
            duration: 0.2,
        })
        .to('.eye-heart', {
            rotate: 6,
            duration: 0.2,
        })
        .to('.eye-heart', {
            rotate: -2,
            duration: 0.2,
        })
        .to('.eye-heart', {
            rotate: 0,
            duration: 0.2,
        })
        .to('.eye-heart', { rotate: 0, duration: 0.2, scale: 1, transformOrigin: 'center', x: 0, y: 0 })
        .to('.eye-heart', { rotate: 0, duration: 0, scale: 0 })
        .to('.eye-circle', { scale: 1, duration: 0.3, transformOrigin: 'center' });
}