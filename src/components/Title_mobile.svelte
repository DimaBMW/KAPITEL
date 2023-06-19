<script>
    import Text from '$component/Text.svelte';
    export let level = 2;
</script>

{#if      level === 1}
    <h1 class="title {$$props.class}"><slot /></h1>

{:else if level === 2}
    <h2 class="title {$$props.class}"><slot /></h2>

{:else if level === 3}
    <h3 class="title {$$props.class}"><slot /></h3>

{:else if level === 4}
    <h4 class="title {$$props.class}"><slot /></h4>

{:else if level === 5}
    <h5 class="title {$$props.class}"><slot /></h5>

{:else if level === 6}
    <h6 class="title {$$props.class}"><slot /></h6>

{:else}
    <Text class="title_error">Пожалуйста, укажите корректный уровень заголовка числом от 1 до 6!</Text>
{/if}

<style lang="scss">
    $breakpoints-2k: 2559.98px;
    $class: ".title";
    #{$class} {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #ffffff;
    }
    :global(#{$class}_error) {
        color: $red !important;
    }
</style>
