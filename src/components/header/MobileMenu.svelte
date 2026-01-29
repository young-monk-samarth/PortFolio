<script>
    import { animate } from "motion";
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    
    export let tabs = [];
    export let isOpen = false;

    function menuEntrance(node) {
        // Only internal link animations here - the 'slide' transition handles the height
        const items = node.querySelectorAll('a');
        animate(items, 
            { 
                opacity: [0, 1],
                y: [10, 0]
            }, 
            { 
                delay: (i) => i * 0.05 + 0.1, 
                duration: 0.4,
                ease: "easeOut" 
            }
        );
    }
</script>

{#if isOpen}
    <nav 
        transition:slide={{ duration: 500, easing: quintOut }}
        use:menuEntrance
        class="lg:hidden mt-4 flex flex-col items-center gap-4 pb-4 overflow-hidden border-t border-white/5 pt-2"
    >
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
