<script>
    import Input from "$component/Input.svelte";
    import Button from "$component/Button.svelte";
    import Icon from "$component/Icon.svelte";


</script>

<form
    action="/"
    class="search  {$$props.class ? $$props.class : ''}"
    on:submit={_e => _e.preventDefault()}
>
    <Input type="search" class="search_input" placeholder="Поиск по сайту" />
    <Button type="submit" class="search_submit">
        <Icon name="search"/>
    </Button>
</form>

<style lang="scss">
    $class: '.search';
    #{$class} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        height: 48px;
        border: 4px solid $primary;
        background-color: $primary;
        border-radius: 6px;
        :global(#{$class}_input) {
            border-radius: 5px;
        }
        :global(#{$class}_submit) {
            background-color: transparent;
            border-radius: 5px;
        }
    }
</style>