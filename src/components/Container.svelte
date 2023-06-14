<script>
</script>

<div class="container {$$props.class}">
    <slot />
</div>

<style lang="scss">
    $class: ".container";
    #{$class} {
        @include mediaQueryMin($breakpoint-xs) {
            margin: 0 auto;
            width: 100%;
        }

        @include mediaQueryMin($breakpoint-sm) {
            width: 540px;
        }

        @include mediaQueryMin($breakpoint-md) {
            width: 700px;
        }

        @include mediaQueryMin($breakpoint-lg) {
            width: 930px;
        }

        @include mediaQueryMin($breakpoint-xl) {
            width: 1140px;
        }

        @include mediaQueryMin($breakpoint-xxl) {
            width: 1320px;
        }
        @include mediaQueryMin(1600px) {
            width: 1520px;
        }
        @include mediaQueryMin(1800px) {
            width: 1720px;
        }
        @include mediaQueryMin(2000px) {
            width: 1920px;
        }
        @include mediaQueryMin(2400px) {
            width: 2320px;
        }
    }
</style>
