<script>
    import { Cursor } from "curseur";
    import { onMount } from "svelte";

    let isMobile = false;

    onMount(() => {
        isMobile = window.innerWidth <= 759.98;
    });
</script>

<button
    class="button {isMobile? 'mobile':''} {$$props.class}"
    type={$$props.type ? $$props.type : "button"}
>
    <slot />
</button>

<style lang="scss">
    $breakpoints-2k: 2559.98px;
    $breakpoints: (
        md: 768px,
        xl: 1024px,
    );
    $breakpoints-laptop:(
        mx:1440.98px,
        mn:1024.98px,
    );
    $class: ".button";
    #{$class} {
        position: relative;
        padding: 10px;
        height: 40px;
        width: 220px;
        overflow: hidden;
        position: relative;
        align-self: center;
        top: 17%;
        transform: translateY(-50%);
        background: none;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin-top: 30px;
        text-transform: uppercase;
        color: #ffffff;
        cursor: crosshair;
        transition: all 0.5s ease;
        &.mobile{
            border: 1px solid #FFFFFF;
        }
        @include mediaQueryMin($breakpoints-2k) {
            font-size: 18px;
            width: 230px;
        }
        @include mediaQueryMin(map-get($breakpoints, md)) {
            font-size: 18px;
            width: 230px;
            align-self: start;
        }
        @include mediaQueryMinMax(map-get($breakpoints-laptop, mn),map-get($breakpoints-laptop, mx)){
            font-size:14px;
        }
    }
    .button::after {
        position: absolute;
        content: "";
        z-index: -2;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #ffffff;
        transition: all 0.5s ease;
    }

    .button:hover {
        color: #000000;
        transition-delay: 0.5s;
    }

    .button:hover::after {
        transition-delay: 0.35s;
        width: 100%;
    }

    .button::before {
        position: absolute;
        content: "";
        z-index: -2;
        top: 0;
        right: 0;
        width: 0;
        height: 38px;
        border: 1px solid #ffffff;
        border-left: 0;
        border-right: 0;
        transition: all 0.5s ease;
    }
    .button:hover::before {
        width: 100%;
        transition-delay: 0s;
    }
</style>
