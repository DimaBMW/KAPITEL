<script>
    import Link from "$component/Link.svelte";
    import Image from "$component/Image.svelte";
    import Text from "./Text.svelte";
    import { onMount } from "svelte";

    export let path;
    let recipes;
    onMount(async () => {
        const response = await fetch(`${host}${path}`),
            recipesRes = JSON.parse(await response.text());

        recipes = recipesRes;
    });
</script>

<nav class="subnav">
    <ul class="subnav-list">
        {#if recipes}
            {#each recipes as { name, href, src }, index (index)}
                <li class="subnav-list-item">
                    <Link class="subnav_link" {href}>
                        <Image class="subnav_image" {src} alt={name} />
                        <Text class="subnav_text">{name}</Text>
                    </Link>
                </li>
            {/each}
        {/if}
    </ul>
</nav>

<style lang="scss">
    $class: ".subnav";
    #{$class} {
        opacity: 0;
        pointer-events: none;
        transform: translateX(50%) translateY($subnav_distance);
        transition: all 0.2s linear;
        position: absolute;
        top: calc(100% + 3px);
        right: 50%;
        padding: 15px;
        width: 400px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 10px 10px rgba($gray_500, 0.8);
        &-list {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            &-item {
                border-radius: 6px;
                overflow: hidden;
                transition: all 0.2s linear;
                width: 100%;
                &:hover {
                    // transform: scale(1.02);
                    box-shadow: 0 0 10px rgba(black, 0.4);
                    :global(#{$class}_image) {
                        filter: blur(0);
                    }
                }
            }
        }
        :global(#{$class}_link) {
            position: relative;
            overflow: hidden;
            border-radius: 6px;
            height: 100%;
        }
        :global(#{$class}_text) {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(black, 0.3);
            transform: translateX(-50%) translateY(-50%);
            text-shadow: 1px 1px $primary;
            font-size: 20px;
            font-weight: 700;
            color: white;
        }
        :global(#{$class}_image) {
            height: 55px;
            filter: blur(2px);
            transition: all 0.2s linear;
        }
    }
</style>
