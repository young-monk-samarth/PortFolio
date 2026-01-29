<div class="pure-scroller-container">
    <div class="scroller-track">
        <!-- First set of text -->
        <span class="scroll-content">
            <span class="scroll-text">Let's build something great • Available for freelance work</span>
            <span class="scroll-divider"></span>
        </span>
        <!-- Duplicate set for seamless scrolling -->
        <span class="scroll-content" aria-hidden="true">
            <span class="scroll-text">Let's build something great • Available for freelance work</span>
            <span class="scroll-divider"></span>
        </span>
    </div>
</div>

<style>
    :root {
        --text-color: white;
        --scroll-speed: 20s;
        --text-size: 1.5rem;
    }

    .pure-scroller-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        background: transparent;
        color: white;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }

    .scroller-track {
        display: flex;
        width: max-content;
        animation: scroll var(--scroll-speed) linear infinite;
    }

    .scroll-content {
        display: flex;
        align-items: center;
    }

    .scroll-text {
        color: var(--text-color);
        font-size: var(--text-size);
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 3px;
        padding: 0 4rem; /* Increased padding for better spacing */
        white-space: nowrap;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }

    .scroll-divider {
        /* Optional divider or spacing if needed inside content */
    }

    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }

    .scroll-text:hover {
        color: #bdecff; /* Subtle hover effect color change */
        text-shadow: 0 0 10px rgba(189, 236, 255, 0.5);
        transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
        :root {
            --text-size: 1.2rem; /* Adjusted for mobile */
        }
        .scroll-text {
            padding: 0 2rem;
        }
    }
</style>
