<script>
    let isSpinning = false;
    let isViolet = false;

    const handleMouseEnter = () => {
        isSpinning = true;
        isViolet = !isViolet; 
        setTimeout(() => {
            isSpinning = false;
        }, 600);
    };
</script>

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
