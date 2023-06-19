<script>
    import { onMount } from "svelte";
    import Glide from "@glidejs/glide";
    import Icon from "./Icon.svelte";
    import Title from "./Title.svelte";
    import Text from "./Text.svelte";
    import TitleMobile from "./Title_mobile.svelte";
    import TextMobile from "./Text_mobile.svelte";
    onMount(() => {
        new Glide(".glide", config).mount();
    });

    const config = {
        type: "carousel",
        perView: 1,
        focusAt: "center",
        peek: {
            before: 50,
            after: 0
        }
    };
</script>

<div class="glide">
    <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
            <li class="glide__slide glide__slide--active">
                <div class="glide__slide-box">
                    <div class="footer-information__icons">
                        <div class="icon">
                            <Icon name="proekt"class="instagramm"/>
                        </div>
                      </div>
                      <div class="title">
                        <TitleMobile class="content__1-title"
                        >Проектирование домов и коттеджей</TitleMobile> 
                      </div>
                      <div class="text">
                        <TextMobile class="text-1__1"
                        >В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной. 
                        </TextMobile>
                      </div>
                </div>
            </li>
            <li class="slider__frame glide__slide">
                <div class="glide__slide-box">
                    <div class="footer-information__icons">
                        <div class="icon">
                            <Icon name="proekt"class="instagramm"/>
                        </div>
                      </div>
                      <div class="title">
                        <TitleMobile class="content__1-title"
                        >Проектирование домов и коттеджей</TitleMobile> 
                      </div>
                      <div class="text">
                        <TextMobile class="text-1__1"
                        >В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной. 
                        </TextMobile>
                      </div>
                </div>
            </li>
            <li class="slider__frame glide__slide">
                <div class="glide__slide-box">
                    <div class="footer-information__icons">
                        <div class="icon">
                            <Icon name="proekt"class="instagramm"/>
                        </div>
                      </div>
                      <div class="title">
                        <TitleMobile class="content__1-title"
                        >Проектирование домов и коттеджей</TitleMobile> 
                      </div>
                      <div class="text">
                        <TextMobile class="text-1__1"
                        >В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной. 
                        </TextMobile>
                      </div>
                </div>
            </li>
            <li class="slider__frame glide__slide">
                <div class="glide__slide-box">
                    <div class="footer-information__icons">
                        <div class="icon">
                            <Icon name="proekt"class="instagramm"/>
                        </div>
                      </div>
                      <div class="title">
                        <TitleMobile class="content__1-title"
                        >Проектирование домов и коттеджей</TitleMobile> 
                      </div>
                      <div class="text">
                        <TextMobile class="text-1__1"
                        >В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной. 
                        </TextMobile>
                      </div>
                </div>
            </li>
            <li class="slider__frame glide__slide">
                <div class="glide__slide-box">
                    <div class="footer-information__icons">
                        <div class="icon">
                            <Icon name="proekt"class="instagramm"/>
                        </div>
                      </div>
                      <div class="title">
                        <TitleMobile class="content__1-title"
                        >Проектирование домов и коттеджей</TitleMobile> 
                      </div>
                      <div class="text">
                        <TextMobile class="text-1__1"
                        >В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной. 
                        </TextMobile>
                      </div>
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
    .glide {
        // position: absolute;
        right: 0;
        height: 430px;
        display: flex;
        align-items: center;
        background-color: #F5F5F5;
    }
    .glide__slide{
        display: flex;
        width:50%;
        height: 350px;
        padding: 40px 0px 40px 0px;
        transition: all .50s ease;
        align-items: center;
        justify-content: center;
    }
    .glide__slide-box{
        width: 100%;
        height: 100%;
        background-color: black;
        transition: all .10s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       padding: 50px 20px 50px 20px;
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

    :global(.footer-information__icons){
            display: flex;
            gap: 20px;
            align-self: left;
            :global(.icon){
                fill: rgba(255, 255, 255, 0.5);
                aspect-ratio: 1/1;
                width: 80px;
            }
    }
    .text-1__1{
        color:#FFFFFF;
    }

    .slider__bullet{
        background-color: rgba(128, 128, 128, 0.199);
        width: 18px;
        height: 4px;
        border-radius: 0px;
    }
    .glide__bullet--active{
        background-color: black;
        box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.685);
    }
</style>
