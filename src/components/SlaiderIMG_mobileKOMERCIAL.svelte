<script>
    import { onMount } from "svelte";
    import Glide from "@glidejs/glide";
    import Icon from "./Icon.svelte";
    import Title from "./Title.svelte";
    import Text from "./Text.svelte";
    import TitleMobile from "./Title_mobile.svelte";
    import TextMobile from "./Text_mobile.svelte";
    import Image from "./Image.svelte";
    onMount(() => {
        new Glide(".glide3", config).mount();
    });

    const config = {
        type: "carousel",
        perView: 1,
        focusAt: "center",
        gap:15,
        peek: {
            before: 50,
            after: 0
        }
    };
</script>

<div class="glide3 {$$props.class}">
    <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
            <li class="glide__slide glide__slide--active">
                <div class="glide__slide-box">
                    <img alt="проект" src="/images/Slider/IMG_3.png" class="slide-img">
                </div>
            </li>
            <li class="slider__frame glide__slide">
                <div class="glide__slide-box">
                    <img alt="проект" src="/images/Slider/IMG_3.png" class="slide-img">
                </div>
            </li>
            <li class="slider__frame glide__slide">
                <div class="glide__slide-box">
                    <img alt="проект" src="/images/Slider/IMG_3.png" class="slide-img">
                </div>
            </li>
            <li class="slider__frame glide__slide">
                <div class="glide__slide-box">
                    <img alt="проект" src="/images/Slider/IMG_3.png" class="slide-img">
                </div> 
            </li>
            <li class="slider__frame glide__slide">
                <div class="glide__slide-box">
                    <img alt="проект" src="/images/Slider/IMG_3.png" class="slide-img">
                </div>
            </li>
        </ul>
        <div class="slider__bullets glide__bullets" data-glide-el="controls[nav]">
    
            <button class="slider__bullet glide__bullet" data-glide-dir="=0"></button>
          
            <button class="slider__bullet glide__bullet" data-glide-dir="=1"></button>
          
            <button class="slider__bullet glide__bullet" data-glide-dir="=2"></button>
          
            <button class="slider__bullet glide__bullet" data-glide-dir="=3"></button>
          
            <button class="slider__bullet glide__bullet glide__bullet--active" data-glide-dir="=4"></button>
        </div>
    </div>
</div>

<style lang="scss">
    $breakpoints-4k: 3839.98px;
    $breakpoints-2k: 2559.98px;
    .glide3 {
        // position: absolute;
        right: 0;
        height: 430px;
        display: flex;
        align-items: center;
        background-color: #000000;
    }
    .glide__slide{
        display: flex;
        width:100%;
        height: 350px;
        padding: 40px 0px 40px 0px;
        transition: all .50s ease;
        align-items: center;
        justify-content: center;
    }
    .slide-img{
        width: 100%; height: 320px;
    }
    .glide__slides{
        margin-bottom: 60px;
    }
    .glide__slide-box{
        width: 100%;
        height: 100%;
        background-color: black;
        transition: all .10s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       padding: 0px 0px 0px 0px;
        .title{
            opacity: 0;
            transition: all .50s ease;
        }
        .text{
            opacity: 0;
            transition: all .50s ease;
        }
        .icon{
            opacity: 0;
            transition: all .50s ease;
        }
    }
    .glide__slide-box2{
        background-color: red;
    }
    .glide__slide--active{
        padding: 10px 0px 10px 0px;
        .glide__slide-box{
            .title{
                opacity: 1;
            }
            .text{
                opacity: 1;
            }
            .icon{
                opacity: 1;
            }
        }
    }

    .slider__bullet{
        background-color: rgba(128, 128, 128, 0.199);
        width: 18px;
        height: 4px;
        border-radius: 0px;
    }
    .glide__bullet--active{
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.685);
    }
</style>
