<script>
    export let y;
    export let tabs = [
        { name: "PROJECTS", link: "#projects" },
        { name: "ABOUT ME", link: "#about" },
        { name: "EXPERIENCE", link: "#xp" },
        { name: "TECHSTACK", link: "#tech" },
        { name: "CERTIFICATES", link: "#cert" },
        { name: "CONTACT", link: "#connect" },
    ];
    let isMenuOpen = false;
    let isSpinning = false;
    let isViolet = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    const handleMouseEnter = () => {
        isSpinning = true;
        isViolet = !isViolet; // Toggle color
        // Reset spinning after animation completes
        setTimeout(() => {
            isSpinning = false;
        }, 600); // Matches animation duration (0.6s)
    };
</script>

<header class="sticky top-0 z-10 flex flex-col px-4 py-3 md:px-6 md:py-4 duration-200 border-b-2 border-transparent bg-[#0c0a09]">
    <div class="flex items-center justify-between">
        <h1 class="text-2xl font-medium md:text-3xl flex items-center gap-2 md:gap-3">
            <!-- Dice Icon with Spin and Toggle Color -->
            <i 
                class="fa-solid fa-dice-d20 text-xl md:text-2xl spin-toggle" 
                class:spinning={isSpinning}
                style="color: {isViolet ? '#c084fc' : '#f3f4f6'};"
                on:mouseenter={handleMouseEnter}
            ></i>
            <!-- Portfolio Link -->
            <a href="/" class="font-bold poppi text-gray-100 cursor-pointer relative inline-block group">
                <span class="relative">
                    <b>PORT</b>FOLIO
                    <span class="absolute bottom-0 left-0 w-0 h-[3px] bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
            </a>
        </h1>

        <!-- Mobile Menu Button -->
        <button 
            class="md:hidden text-gray-100 hover:text-violet-400"
            on:click={toggleMenu}
        >
            {#if isMenuOpen}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            {/if}
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-4 pr-4">
            {#each tabs as { name, link }, i}
                <a href={link} class="duration-200 hover:text-violet-400 text-gray-100">
                    {name}
                </a>
            {/each}
        </nav>
    </div>

    <!-- Mobile Navigation Menu -->
    {#if isMenuOpen}
        <nav class="md:hidden mt-4 flex flex-col items-center gap-4 pb-4">
            {#each tabs as { name, link }, i}
                <a 
                    href={link} 
                    class="w-full text-center py-2 text-gray-100 hover:text-violet-400 duration-200"
                    on:click={() => isMenuOpen = false}
                >
                    {name}
                </a>
            {/each}
        </nav>
    {/if}
</header>

<style>
    .poppi {
        font-family: 'Poppins', sans-serif;
    }

    /* Base styles */
    .spin-toggle {
        transition: color 0.3s ease;
    }

    /* Animation for spin */
    .spinning {
        animation: spin 0.6s ease forwards;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>