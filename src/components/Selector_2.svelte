<script>
    import Title from "./Title.svelte";
    import Image from "./Image.svelte";
    import Text from "./Text.svelte";
    import { text } from "svelte/internal";


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
            <Title class="select-title">{title}</Title>
            <div class="select-box-img">
                <Image src="/images/Post-projectSupportObject/selector.svg" alt="стрелка вправо" class="select-img {!openselector ? '' : 'select-active'}"></Image>
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
        width: 1200px;
        border-bottom: 0.5px solid #7F7F7F;
        margin-top: 30px;
        position: relative;
        z-index: 2;
        transition: all .50s ease;
        @include mediaQueryMin($breakpoints-2k){
            width: 100%;
        }
        :global(#{$class}-title){
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            padding-bottom: 20px;
            @include mediaQueryMin($breakpoints-2k){
                font-size: 20px;
                font-weight: 600;
                line-height: 24px;
                padding-right: 20px;
            }
            line-height: 24px;
            text-transform: uppercase;
            text-align: left;
        }
        :global(#{$class}-text){
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            @include mediaQueryMin($breakpoints-2k){
                font-size: 18px;
                line-height: 20px;
            }
            color: #000000;
            width: 70%;
            height: 0;
            text-align: left;
            opacity: 0;
            transition: all .30s ease;
        }
        :global(#{$class}-text.select-active){
            position: relative;
            width: 70%;
            opacity: 1;
            z-index: 0;
        }
        :global(#{$class}-title-box){
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 10px;
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
            margin-bottom: 100px;
            z-index: 0;
        }
        // ------------------------------------------------------------------------
        :global(#{$class}-img){
            width: 20px;
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
            width: 20px;
            height: 100%;
        }
    }
    .selectbox{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .select::after{
            content: "";
            bottom: 0;
            left: -5px;
            position: absolute;
            width: 15px;
            z-index: 1000;
            border-bottom: 1px solid #7F7F7F;
            transform: rotate(-45deg);
    }
    .select::before{
            content: "";
            bottom: 0;
            right: -8px;
            position: absolute;
            width: 15px;
            border-bottom: 1px solid #7F7F7F;
            transform: rotate(-45deg);
    }
    .select-title-box:hover{
        cursor: pointer;
    }
</style>