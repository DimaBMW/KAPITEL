<script>
    import Container from "../components/Container.svelte";
    import Title from "../components/Title.svelte";
    import Main from "../components/Main.svelte";
    import Text from "../components/Text.svelte";
    import Image from "../components/Image.svelte";
    import SiatBar from "../components/Siat-Bar.svelte";
    let innerWidth;

      //Адаптив мобилка
  import { onMount } from 'svelte';

    let isMobile = false;

    onMount(() => {
        isMobile = window.innerWidth <= 375.98;
    });
</script>

<svelte:window bind:innerWidth />
<section class="designstages" id="designstages">
    <Container class="designstages-container">
        {#if innerWidth > 3839.98}
            <Main class="designstages-main">
                <div class="designstages-main__rows" />
                <div class="designstages-main__rows2">
                    <Title class="designstages-title"
                        >4 этапа проектирования — от эскиза до</Title
                    >
                    <Title class="designstages-title">реализации</Title>
                    <div class="designstages-content">
                        <Title class="content-title">Этап 1</Title>
                        <Image
                            class="content-img"
                            src="/images/DesignStsges/IMG_1.png"
                            alt="ноутбуки и листы"
                        />
                        <div class="content-text">
                            <Title class="content-text-title"
                                >Знакомство и составление технического задания</Title
                            >
                            <Text class="designstages-text"
                                >В своём стремлении улучшить пользовательский
                                опыт мы упускаем, что диаграммы связей
                                ассоциативно распределены по отраслям.</Text
                            >
                        </div>
                    </div>
                    <div class="designstages-content">
                        <Title class="content-title__2">Этап 2</Title>
                        <Image
                            class="content-img"
                            src="/images/DesignStsges/IMG_2.png"
                            alt="ноутбуки и листы"
                        />
                        <div class="content-text">
                            <Title class="content-text-title"
                                >Эскизный проект, подготовка предварительных
                                архитектурных чертежей</Title
                            >
                            <Text class="designstages-text"
                                >На этом этапе переносим задумки в
                                документальный формат — прорисовываем планировку
                                будущего дома, детально прорабатываем фасады и
                                определяем расположение дома на участке с учетом
                                сторон света согласно СНиП.</Text
                            >
                        </div>
                    </div>
                </div>
            </Main>
        {:else}
            <Main class="designstages-main">
                <div class="main-container-2">
                    <Title class="designstages-title"
                        >Этапы проектирования</Title
                    >
                    <div class="designstages-content-1">
                        <Title class="content-title">Этап 1</Title>
                        <Image
                            class="content-img"
                            src="/images/DesignStsges/IMG_1.png"
                            alt="ноутбуки и листы"
                        />
                        <div class="content-text">
                            <Title class="content-text__title"
                                >Знакомство и составление технического задания</Title
                            >
                            <Text class="designstages-text"
                                >Обсуждаем объем работы: состав и размеры
                                помещений, конструктивные особенности, толщину и
                                материал стен, внешний вид будущего строения и
                                наличие дополнительных сооружений.
                            </Text>
                        </div>
                    </div>
                    <div class="designstages-content">
                        <Title class="content-title__2">Этап 2</Title>
                        <Image
                            class="content-img"
                            src="/images/DesignStsges/IMG_2.png"
                            alt="ноутбуки и листы"
                        />
                        <div class="content-text">
                            <Title class="content-text__title"
                                >Эскизный проект, подготовка предварительных
                                архитектурных чертежей
                            </Title>
                            <Text class="designstages-text"
                                >На этом этапе переносим задумки в
                                документальный формат — прорисовываем планировку
                                будущего дома, детально прорабатываем фасады и
                                определяем расположение дома на участке с учетом
                                сторон света согласно СНиП.
                            </Text>
                        </div>
                    </div>
                </div>
            </Main>
        {/if}
    </Container>
</section>

<style lang="scss">
    $breakpoints-4k: 3839.98px;
    $breakpoints-2k: 2559.98px;
    $breakpoints-laptop:(
            mx:1440.98px,
            mn:1024.98px,
    );
    $class: ".designstages";
    #{$class} {
        :global(.why-title) {
            height: 70px;
        }
        :global(.whywe-saitbar) {
            @include mediaQueryMin($breakpoints-4k) {
                padding: 0px 0px 0px 50px;
                text-align: left;
                font-size: 28px;
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 34px;
                color: #000000;
            }
        }
        :global(.designstages-text111){
            font-family: "Montserrat";
            font-size: 18px;
            line-height: 20px;
        }
        :global(.content-text__title) {
            font-size: 18px;
            font-weight: 600;
            text-transform: uppercase;
            font-family: "Montserrat";
            line-height: 25px;
            padding: 10px 10px 10px 10px;
            @include mediaQueryMin($breakpoints-2k){
                font-size: 24px;
                line-height: 30px;
                padding: 10px 10px 30px 10px;
            }
        }
        :global(.main-container-2) {
            padding-top: 50px;
            @include mediaQueryMin($breakpoints-2k){
                padding-top: 100px;
            }
        }
        :global(.designstages-title) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 24px;
            padding-left: 28%;
            color: #000000;
            @include mediaQueryMin($breakpoints-2k){
                padding-left: 27%;
                font-size: 36px;
                line-height: 44px;
            }
            @include mediaQueryMin($breakpoints-4k) {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 500;
                font-size: 64px;
                line-height: 78px;
                color: #000000;
                text-align: left;
                padding-left: 50px;
            }
        }
        :global(.content-text-title) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 34px;
            text-transform: uppercase;
            color: #000000;
        }
        :global(#{$class}-text) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #000000;
            text-align: left;
            position: relative;
            padding: 10px;
            @include mediaQueryMin($breakpoints-4k) {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 34px;
                color: #000000;
                margin-top: 70px;
                padding: 0;
            }
            @include mediaQueryMin($breakpoints-2k){
                font-size: 18px;
                line-height: 20px;
            }
        }
        :global(.designstages-main__rows) {
            flex: 0 1 25%;
            border-right: 1px solid #000000;
        }
        :global(.designstages-main__rows2) {
            flex: 0 1 75%;
            padding: 300px 700px 0px 0px;
            text-align: left;
        }
        :global(#{$class}-container) {
            width: 100%;
            padding: 0px 25px 0px 40px;
            margin: 0 0;
            text-align: left;
            position: relative;
            z-index: 1;
            background: #f5f5f5;
            @include mediaQueryMin($breakpoints-4k) {
                padding: 0px 100px 0px 100px;
                min-height: 4000px;
            }
        }
        :global(#{$class}-main) {
            @include mediaQueryMin($breakpoints-4k) {
                display: flex;
            }
        }
        :global(#{$class}-content) {
            width: 100%;
            height: 50%;
            display: flex;
            margin-top: 80px;
            padding-bottom: 100px;
            @include mediaQueryMin($breakpoints-4k) {
                width: 100%;
                padding: 0;
                display: block;
            }
        }
        :global(#{$class}-content-1) {
            width: 100%;
            height: 50%;
            display: flex;
            margin-top: 80px;
            padding-bottom: 0px;
            @include mediaQueryMin($breakpoints-4k) {
                width: 100%;
                padding: 0;
                display: block;
            }
        }
        :global(.content-title) {
            text-align: left;
            writing-mode: vertical-rl;
            align-items: center;
            display: flex;
            left: 1.85%;
            padding: 20px 0px;
            background: #f5f5f5;
            position: absolute;
            top: 27.5%;
            transform: rotate(-180deg);
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            text-transform: uppercase;
            color: #000000;
            @include mediaQueryMin($breakpoints-4k) {
                font-size: 28px;
                left: 2.3%;
                top: 25%;
            }
            @include mediaQueryMin($breakpoints-2k) {
                left: 1.4%;
                top: 30%;
            }
            @include mediaQueryMinMax(map-get($breakpoints-laptop, mn),map-get($breakpoints-laptop, mx)){
                left: 2.4%;
            }
        }
        :global(.content-title__2) {
            text-align: left;
            writing-mode: vertical-rl;
            align-items: center;
            display: flex;
            left: 1.85%;
            padding: 20px 0px;
            background: #f5f5f5;
            position: absolute;
            top: 66.5%;
            transform: rotate(-180deg);
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            text-transform: uppercase;
            color: #000000;
            @include mediaQueryMin($breakpoints-4k) {
                font-size: 28px;
                left: 2.3%;
                top: 75%;
            }
            @include mediaQueryMin($breakpoints-2k) {
                left: 1.4%;
                top: 71%;
            }
            @include mediaQueryMinMax(map-get($breakpoints-laptop, mn),map-get($breakpoints-laptop, mx)){
                left: 2.4%;
            }
        }
        :global(.content-img) {
            width: 20%;
            height: 250px;
            flex: 0 1 50%;
            padding: 0px 32px 0px 50px;
            @include mediaQueryMin($breakpoints-4k) {
                width: 100%;
                margin-bottom: 70px;
                padding: 0px 32px 0px 50px;
            }
            @include mediaQueryMin($breakpoints-2k){
                width: 20%;
                height: 400px;
                flex: 0 1 50%;
                padding: 0px 32px 0px 50px;
            }
        }

        :global(.content-text) {
            flex: 1 0 50%;
            padding: 0% 10% 0px 5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        :global(.content-title::before) {
            content: "";
            bottom: -1px;
            left: 3px;
            position: absolute;
            width: 15px;
            border: 1px solid #000000;
            transform: rotate(-45deg);
        }
        :global(.content-title::after) {
            content: "";
            top: -1px;
            left: 3px;
            position: absolute;
            width: 15px;
            border: 1px solid #000000;
            transform: rotate(-45deg);
        }
        :global(.content-title__2::before) {
            content: "";
            bottom: -1px;
            left: 3px;
            position: absolute;
            width: 15px;
            border: 1px solid #000000;
            transform: rotate(-45deg);
        }
        :global(.content-title__2::after) {
            content: "";
            top: -1px;
            left: 3px;
            position: absolute;
            width: 15px;
            border: 1px solid #000000;
            transform: rotate(-45deg);
        }
    }
    $class_2: ".designstages-asaid";
    #{$class_2} {
        flex: 20%;
        @include mediaQueryMin($breakpoints-4k) {
            padding-bottom: 20px;
        }
    }
</style>
