<script>
    import Button from "$component/Button.svelte";
    import Icon from "$component/Icon.svelte";
    import Text from "$component/Text.svelte";
</script>

<div class="profile {$$props.class ? $$props.class : ''}">
    <ul class="profile-list">
        <li class="profile-list-li">
            <Button class="profile-button">
                <Icon class="profile-button_icon" name="profile" />
                <Text class="profile-button_text">Профиль</Text>
            </Button>
        </li>
        <li class="profile-list-li">
            <Button class="profile-button">
                <Icon class="profile-button_icon"name="heart" />
                <Text class="profile-button_text">Избранное</Text>
            </Button>
        </li>
        <li class="profile-list-li">
            <Button class="profile-button">
                <Icon class="profile-button_icon" name="cart" />
                <Text class="profile-button_text">Корзина</Text>
            </Button>
        </li>
    </ul>
</div>

<style lang="scss">
    $class: ".profile";
    #{$class} {
        &-list {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            width: 100%;
            // &-li {
            //     flex: 1;
            // }
        }
        :global(#{$class}-button) {
            // aspect-ratio: 1 / 1;
            padding: 10px;
            min-width: 100px;
            height: 58px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            justify-content: center;
            // overflow: visible;
            border-radius: 6px;
        }
        :global(#{$class}-button_text) {
            width: 100%;
            font-size: 14px;
            font-weight: 600;
        }
        :global(#{$class}-button_icon) {
            width: 30px; min-height: 30px;
            fill: black;
        }
    }
</style>
