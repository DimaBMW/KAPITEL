<script>

</script>

<a href={$$props.href} class="link {$$props.class}">
    <slot />
</a>

<style lang="scss">
    $breakpoints-4k:3840px;
    $breakpoints-2k:2559.98px;
    $class: '.link';
    #{$class} {
        position: relative;
        text-decoration: none;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        line-height: calc($line-h + 5px);
        transition: all .2s linear;
        padding-bottom: 5px;
        @include mediaQueryMin($breakpoints-4k){
            font-size: 24px;
        }
        @include mediaQueryMin($breakpoints-2k){
            font-size: 18px;
        }
        &::after {
            content: '';
            position: absolute;
            top: 100%; left: 0;
            width: 0%; height: 0.5px;
            border-radius: 10px;
            background-color: rgb(0, 0, 0);
            transition: all .2s linear;
        }
        &:hover {
            color: white;
            &::after {
                background-color: white;
                width: 100%;
            }
            :global(.icon) {
                fill: white;
            }
        }
    }
</style>