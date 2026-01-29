<script>
    export let tabs = [];
    export let isOpen = false;
</script>

{#if isOpen}
    <nav class="lg:hidden mt-4 flex flex-col items-center gap-4 pb-4">
        {#each tabs as { name, link }, i}
            <a 
                href={link} 
                class="w-full text-center py-2 text-gray-100 hover:text-violet-400 duration-200"
                on:click={() => isOpen = false}
            >
                {name}
            </a>
        {/each}
    </nav>
{/if}
