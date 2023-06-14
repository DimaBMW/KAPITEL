<script>

</script>

<div class="image {$$props.class}">
    <img src={$$props.src} alt={$$props.alt} />
</div>

<style lang="scss">
    $class: '.image';
    #{$class} {
        width: 100%; height: auto;
        img {
            width: 100%; height: 100%;
            object-fit: cover;
        }
    }
</style>