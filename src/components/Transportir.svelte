<script>
    import Image from "./Image.svelte";
</script>

<div class="transportir transportir__container">
    <Image
        src="{host}/images/Whywe/trasbortit-part1.svg"
        alt="transportir"
        class="transportir-img__1"
    />
</div>

<style lang="scss">
        .transportir__container{
            display: flex;
            justify-content: space-between;
            position: absolute;
            z-index: 1000;
            top:58%;
            // left: -10%;
            width: 200px;
            height: 200px;
            background: red;

            animation: wheel 1.5s 1s linear;
            animation-fill-mode:both;
            transform-origin: right top;
            img{
                position: relative;
            }

        }
        @keyframes wheel {
            from {
                transform: translateX(0) rotate(0);
            }
            to {
                transform: translateX(0px) rotate(1turn);
            }
        }
</style>