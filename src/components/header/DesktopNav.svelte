<script>
    export let tabs = [];
</script>

<nav class="hidden lg:flex items-center gap-6 pr-4">
    {#each tabs as { name, link }, i}
        <a href={link} class="duration-200 hover:text-violet-400 text-gray-100 text-sm font-medium tracking-wide">
            {name}
        </a>
    {/each}
</nav>
