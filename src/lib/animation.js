// src/lib/animation.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    console.log('GSAP and ScrollTrigger loaded');
    gsap.registerPlugin(ScrollTrigger);
}

export function initializeAnimations() {
    if (typeof window === 'undefined') return;
    console.log('initializeAnimations called');

    // Intro Section
    const introText = document.querySelector('#introPage .flex-col');
    console.log('Intro text element:', introText);
    if (introText) {
        gsap.from(introText, {
            scale: 0.5,
            rotation: -15,
            opacity: 0,
            duration: 1.2,
            ease: 'elastic.out(1, 0.5)',
            delay: 0.3,
            onStart: () => console.log('Intro text animation started')
        });
    } else {
        console.log('Intro text element not found');
    }

    const introImage = document.querySelector('#introPage .wrapper');
    console.log('Intro image element:', introImage);
    if (introImage) {
        gsap.from(introImage, {
            scale: 0,
            rotation: 360,
            opacity: 0,
            duration: 1.5,
            ease: 'back.out(1.7)',
            delay: 0.6,
            onStart: () => console.log('Intro image animation started')
        });
    } else {
        console.log('Intro image element not found');
    }

    // Projects Section
    const projectTitles = document.querySelectorAll('#projects h6, #projects h3');
    console.log('Project titles found:', projectTitles.length);
    if (projectTitles.length) {
        gsap.from(projectTitles, {
            rotationX: 90,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#projects',
                start: 'top 80%',
                toggleActions: 'play none none reset',
                onEnter: () => console.log('Projects titles entered viewport')
            }
        });
    } else {
        console.log('Project titles not found');
    }

    const projectItems = document.querySelectorAll('#projects .grid > *');
    console.log('Project items found:', projectItems.length);
    if (projectItems.length) {
        gsap.from(projectItems, {
            y: 100,
            scale: 0.8,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: 'bounce.out',
            scrollTrigger: {
                trigger: '#projects .grid',
                start: 'top 80%',
                toggleActions: 'play none none reset',
                onEnter: () => console.log('Projects grid items entered viewport')
            }
        });
    } else {
        console.log('Project items not found');
    }

    // Add similar checks for other sections if needed
}

export function addStepClass() {
    if (typeof window === 'undefined') return;
    console.log('addStepClass called');
    const stepElements = document.querySelectorAll('#projects .grid > div');
    console.log('Step elements found:', stepElements.length);
    stepElements.forEach((el, index) => {
        el.classList.add(`step-${index}`);
        console.log(`Added class step-${index} to Step element`);
    });
}