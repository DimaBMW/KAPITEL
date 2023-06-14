<script>
    import Title from "./Title.svelte";
    import Image from "./Image.svelte";
    import Text from "./Text.svelte";
    export let saitbar = [];
</script>

<div class="saitbar {$$props.class}">
    {#each saitbar as {src,name,text,line} , index(index)}
        <Image {src} alt="картинка" class="saitbar-img {$$props.class}"></Image>
        <Title class="saitbar-title {$$props.class}">{name}</Title>
        <Text class="saitbar-text {$$props.class}">{text}</Text>
        {#if line==='1'}
            <div class="saitbar-line {$$props.class}"></div>
        {/if}
    {/each}
</div>

<style lang="scss">
    $breakpoints-4k:3840px;
    $breakpoints-2k:2559.98px;
    $class:".saitbar";
    #{$class}{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
         @include mediaQueryMin($breakpoints-4k){
                display: flex;
                flex-direction: column;
                justify-content: space-between;
        }
        height: 97%;
        :global(#{$class}-title){
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
            text-transform: uppercase;
            color: #000000;
            margin-bottom: 20px;
            @include mediaQueryMin($breakpoints-2k){
                font-size: 24px;
                line-height: 24px;
            }
        }
        :global(#{$class}-img){
            width: 100%;
            margin-bottom: 40px;
        }
        :global(#{$class}-text){
            text-align: left;
            padding-bottom: 20px;
            font-family: 'Montserrat';
            font-size: 14px;
            line-height: 20px;
            padding-top: 20px;
            line-height: 20px;
            @include mediaQueryMin($breakpoints-2k){
                font-size: 18px;
                line-height: 20px;
            }
        }
        :global(#{$class}-line){
            border: 1px solid rgba(0, 0, 0, 0.5);
            margin-bottom: 20px;
            margin-top: 20px;
            @include mediaQueryMin($breakpoints-4k){
                margin-left: 50px;
            }
        }
    }
</style>