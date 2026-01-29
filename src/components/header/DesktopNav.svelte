<script>
    export let tabs = [];
</script>

<nav class="hidden md:flex items-center gap-4 pr-4">
    {#each tabs as { name, link }, i}
        <a href={link} class="duration-200 hover:text-violet-400 text-gray-100">
            {name}
        </a>
    {/each}
</nav>
