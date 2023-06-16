<script>
    import sticky from "../lib/stores/sticky.js";
    import Button_2 from "./Button_2.svelte";
    import { onMount } from "svelte";

    export let stickToTop = true;

    let isStuck = false;

    function handleStuck(e) {
        isStuck = e.detail.isStuck;
    }
    // ////////////////////////////////////////////////////////////////////////////
    $: y = 0
    $: innerWidth=0
    $:el_height=0
    $: clientHeighwwwt=el_height.clientHeight
</script>

<svelte:window bind:scrollY={y} bind:innerWidth/>


<section class="my-container" bind:this={el_height}>
    {#if !stickToTop}
        <slot />
    {/if}
    
    <div
        class="sticky {y>=innerWidth && y<=innerWidth+clientHeighwwwt*1.7 ? 'acti' : ''}"
        class:isStuck
        data-position={stickToTop ? "top" : "bottom"} 
        use:sticky={{ stickToTop }}
        on:stuck={handleStuck}
    >
        <Button_2>ОСТАВИТЬ ЗАЯВКУ</Button_2>
    </div>

    {#if stickToTop}
        <slot />
    {/if}
</section>

<style lang="scss">
    $breakpoints-4k: 3559.98px;
    $breakpoints-2k: 2559.98px;
    h2 {
        margin: 0;
    }

    .sticky {
        position: sticky;
        opacity: 1;
        transition: all .5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
    }
    .acti{
        opacity: 1;
        transition: all .2s eases;
    }
    .sticky[data-position="top"] {
        top: 90px;
    }

    .sticky[data-position="bottom"] {
        bottom: 1rem;
    }

    .sticky.isStuck {
        box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2),
            0px 0px 6px 0px rgba(0, 0, 0, 0.3);
    }
    section {
        margin-bottom: 1rem;
        height: 100%;
        opacity: 1;
    }
</style>
