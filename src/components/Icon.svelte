<svg
    class="icon {$$props.class}"
    aria-hidden="true"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
>
    <use xlink:href="/icons/sprite.svg#{$$props.name}" />
</svg>

<style lang="scss">
    $class: ".icon";
    #{$class} {
        fill: $white;
        aspect-ratio: 1 / 1;
        width: 100%;
        transition: all .2s linear;
    }
</style>
