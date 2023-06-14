
<input
    type={$$props.type}
    class="input {$$props.class ? $$props.class : ''}"
    placeholder={$$props.placeholder}
/>

<style lang="scss">
    $class: '.input';
    #{$class} {
        padding: 0 10px;
        background-color: $white;
        height: 100%; width: 100%;
    }
</style>