<script>
    import Container from "./Container.svelte";
</script>

<main class="main {$$props.class}">
    <Container class="main-container {$$props.class}">
        <slot/>
    </Container>
</main>

<style lang="scss">
    $breakpoints-4k:3840px;
    $class:".main";
    #{$class}{
        flex: 0 1 80%;
        border-left: 0.5px solid #000000;
        border-right: 0.5px solid #000000;
        :global(#{$class}-container){
            width: 100%;
            padding: 0px 0px 0px 0px;
            @include mediaQueryMin($breakpoints-4k){
                padding: 0;
            }
        }
    }
</style>