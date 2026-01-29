<script>
    import Logo from "./header/Logo.svelte";
    import DesktopNav from "./header/DesktopNav.svelte";
    import MobileToggle from "./header/MobileToggle.svelte";
    import MobileMenu from "./header/MobileMenu.svelte";

    export let y; // Kept for compatibility with layout, though unused
    export let tabs = [
        { name: "PROJECTS", link: "#projects" },
        { name: "ABOUT ME", link: "#about" },
        { name: "EXPERIENCE", link: "#xp" },
        { name: "TECHSTACK", link: "#tech" },
        { name: "CERTIFICATES", link: "#cert" },
        { name: "CONTACT", link: "#connect" },
    ];
    let isMenuOpen = false;
</script>

<header class="sticky top-0 z-10 flex flex-col px-4 py-3 lg:px-6 lg:py-4 duration-200 border-b border-white/5 bg-black/70 backdrop-blur-md">
    <div class="flex items-center justify-between">
        <Logo />
        <MobileToggle bind:isOpen={isMenuOpen} />
        <DesktopNav {tabs} />
    </div>

    <MobileMenu {tabs} bind:isOpen={isMenuOpen} />
</header>