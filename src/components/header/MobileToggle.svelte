<script>
    export let isOpen = false;
    
    const toggle = () => {
        isOpen = !isOpen;
    };
</script>

<button 
    class="md:hidden text-gray-100 hover:text-violet-400"
    on:click={toggle}
    aria-label="Toggle Menu"
>
    {#if isOpen}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    {/if}
</button>
