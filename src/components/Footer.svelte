<script>
    import ScrollingBanner from "./footer/ScrollingBanner.svelte";
    import ConnectButton from "./footer/ConnectButton.svelte";
    import SocialLinks from "./footer/SocialLinks.svelte";
</script>

<footer
    class="py-20 sm:py-32 bg-transparent border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"
>
    <ScrollingBanner />
    <ConnectButton />
    <SocialLinks />

    <p class="flex items-center">
        <i class="fas fa-location-dot text-red-500 mr-2"></i> Bengaluru
    </p>

    <p class="text-center text-sm text-slate-500 mt-8">
        &copy; SAMARTH MUKTAMATH.<br>2024-All Rights Reserved.
    </p>
</footer>
