<script>
</script>

<p class="text {$$props.class}">
    <slot />
</p>

<style lang="scss">
    $class: ".text";
    #{$class} {
        font-size: $font-z;
        font-weight: $font-w;
        line-height: $line-h;

        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 17px;

        color: #000000;
    }
</style>
