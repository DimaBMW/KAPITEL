<script>
    import { onMount } from "svelte";
    import Glide from "@glidejs/glide";
    onMount(() => {
        new Glide(".glide", config).mount();
    });

    const config = {
        type: "carousel",
        perView: 4,
        autoplay: 1000,
        gap: 40,
        focusAt: "center",
        animationDuration: 5000,
        hoverpause: false,
        animationTimingFunc: "linear",
    };
</script>

<div class="glide">
    <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
            <li class="glide__slide">
                <img alt="" src="/images/Partners/DomRU.svg" class="slide-img" />
            </li>
            <li class="glide__slide">
                <img alt="" src="/images/Partners/JUNIOR.svg" class="slide-img" />
            </li>
            <li class="glide__slide">
                <img alt="" src="/images/Partners/MTC.svg" class="slide-img" />
            </li>
            <li class="glide__slide">
                <img alt="" src="/images/Partners/ROSSETI.svg" class="slide-img" />
            </li>
            <li class="glide__slide">
                <img alt="" src="/images/Partners/MTC.svg" class="slide-img" />
            </li>
            <li class="glide__slide">
                <img alt="" src="/images/Partners/DomRU.svg" class="slide-img" />
            </li>
        </ul>
    </div>
</div>

<style lang="scss">
    $breakpoints-4k: 3839.98px;
    $breakpoints-2k: 2559.98px;
    .glide {
        cursor:auto;
        right: 0;
        position: absolute;
        height: 100px;
        display: flex;
        align-items: center;
    }
    .glide__slide {
        @include mediaQueryMin($breakpoints-4k) {
            width: 500px;
            height: 800px;
        }
        @include mediaQueryMin($breakpoints-2k){
            width: 400px;
            height: 800px;
        }
    }
    .slide-img {
        width: 200px;
        height: 50px;
        border-radius: 5px;
        position: relative;
        z-index: -10;
        @include mediaQueryMin($breakpoints-4k) {
            width: 500px;
            height: 800px;
            border-radius:10px;
        }
        @include mediaQueryMin($breakpoints-2k) {
            width: 400px;
            height: 800px;
            border-radius:10px;
        }
    }
</style>
