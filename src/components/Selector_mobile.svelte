<script>
    import Title from "./Title.svelte";
    import Image from "./Image.svelte";
    import Text from "./Text.svelte";
    import TitleMobile from "./Title_mobile.svelte";
    import { text } from "svelte/internal";
    import TextMobile from "./Text_mobile.svelte";


    export let selector=[];
    export let openselector;
    const open=()=>{
        openselector=!openselector;
    }

</script>

<div class="selectbox">
    <div class="select select2 {$$props.class} {!openselector ? '' : 'select-active'}">
    {#each selector as {title,text},index(index)}
        <button class="select-title-box" on:click={open}>
            <h2 class="select-title">{title}</h2>
            <div class="select-box-img">
                <Image src="/images/Post-projectSupportObject/Selector-white.svg" alt="стрелка вправо" class="select-img {!openselector ? '' : 'select-active'}"></Image>
            </div>
        </button>
        <div class="select-text__box {!openselector ? '' : 'select-active'}">
            <p class="select-text {!openselector ? '' : 'select-active'}">{text}</p>
        </div>
    {/each}
</div>
</div>



<style lang="scss">
    $breakpoints-2k: 2559.98px;
    $class:".select";
    #{$class}{
        padding-left: 0px;
        padding-right: 0px;
        text-align: left;
        align-items: center;
        width: 100%;
        position: relative;
        z-index: 2;
        transition: all .50s ease;
        background-color: #000000;
        :global(#{$class}-title){
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            text-transform: uppercase;
            color: #ffffff;
            text-align: left;
        }
        :global(#{$class}-text){
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #ffffff;
            width: 100%;
            height: 0;
            text-align: left;
            opacity: 0;
            transition: all .20s ease;
        }
        :global(#{$class}-text.select-active){
            position: relative;
            width: 100%;
            opacity: 1;
            z-index: 0;
        }
        :global(#{$class}-title-box){
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 15px;
            padding-top: 15px;
            display: flex;
            width: 100%;
            align-items:center;
            justify-content: space-between;
            background:none;
            position: relative;
            z-index: 100;
        }
        // ------------------------------------------------------------------------
        :global(#{$class}-text__box){
            width: 100%;
            visibility: hidden;
            padding: 0px 25px 0px 20px;
            height: 0%;
            display: flex;
            align-items: start;
            transition: all .50s ease;
        }
        :global(#{$class}-text__box.select-active){
            visibility: visible;
            height: 100%;
            margin-bottom: 200px;
            z-index: 0;
        }
        // ------------------------------------------------------------------------
        :global(#{$class}-img){
            width: 10px;
            height: auto;
            display: flex;
            align-items:center;
            transition: all 0.50s ease;
        }
        :global(#{$class}-img.select-active){
            transform: rotate(90deg);
            position: relative;
        }
        :global(#{$class}-box-img){
            width: 10px;
            aspect-ratio: 1/1;
        }
    }
    .selectbox{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .select-title-box:hover{
        cursor: pointer;
    }
</style>