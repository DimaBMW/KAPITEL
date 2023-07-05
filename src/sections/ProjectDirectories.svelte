<script>
    import Container from "../components/Container.svelte";
    import Title from "../components/Title.svelte";
    import Text from "../components/Text.svelte";
    import Button_4 from "../components/Button_4.svelte";
    import ProjectCard from "../components/ProjectCard.svelte";

    let innerWidth;
</script>

<svelte:window bind:innerWidth />
<section
    class="projecdirection"
    id="projecdirection"
    style="background-color: #000000;"
>
    <Container class="projecdirection-container">
        <div class="projecdirection-tile">
            {#if innerWidth > 3839.98}
                <div class="designstages-main__rows" />
                <div class="designstages-main__rows2">
                    <Title class="title__item"
                        >Каталог реализованных проектов</Title
                    >
                    <div class="projecdirection-text">
                        <Text class="text__item1"
                            >Ежегодно компания «Капитель» реализует от 50
                            крупных объектов под ключ. Мы делаем индивидуальное
                            проектирование за 30-45 дней, включая этапы
                            согласования.</Text
                        >
                    </div>
                </div>
            {:else}
                <div class="designstages-main__rows" />
                <div class="designstages-main__rows2">
                    <Title class="title__item"
                        >Каталог реализованных проектов</Title
                    >
                    <div class="projecdirection-text">
                        <Text class="text__item1"
                            >Ежегодно компания «Капитель» реализует от 50
                            крупных объектов под ключ. Мы делаем индивидуальное
                            проектирование за 30-45 дней, включая этапы
                            согласования.</Text
                        >
                    </div>
                </div>  
            {/if}
        </div>
        <div class="card-container">
            <div class="card-rows1">
                <div class="card-rows1__container">
                    <h4 class="card-rows1__title">Место для вашего дома</h4>
                    <Text class="card-rows1__title2">жилые помещения</Text>
                </div>
                <ProjectCard
                    card={[
                        {
                            name: "M762",
                            arctikul: "428 М2",
                            src: "/images/Slider/IMG_1.png",
                            text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                        },
                    ]}
                />
                <ProjectCard
                    card={[
                        {
                            name: "M762",
                            arctikul: "428 М2",
                            src: "/images/Slider/IMG_2.png",
                            text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                        },
                    ]}
                />
                <ProjectCard
                    card={[
                        {
                            name: "M762",
                            arctikul: "428 М2",
                            src: "/images/Slider/IMG_3.png",
                            text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                        },
                    ]}
                />
                <ProjectCard
                    card={[
                        {
                            name: "M762",
                            arctikul: "428 М2",
                            src: "/images/Slider/IMG_4.png",
                            text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                        },
                    ]}
                />
            </div>
            <div class="card-rows1">
                <ProjectCard
                    card={[
                        {
                            name: "M762",
                            arctikul: "428 М2",
                            src: "/images/Slider/IMG_5.png",
                            text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                        },
                    ]}
                />
                <ProjectCard
                    card={[
                        {
                            name: "M762",
                            arctikul: "428 М2",
                            src: "/images/Slider/IMG_6.png",
                            text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                        },
                    ]}
                />
                <ProjectCard
                    card={[
                        {
                            name: "M762",
                            arctikul: "428 М2",
                            src: "/images/Slider/IMG_7.png",
                            text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                        },
                    ]}
                />
                <ProjectCard
                    card={[
                        {
                            name: "M762",
                            arctikul: "428 М2",
                            src: "/images/Slider/IMG_8.png",
                            text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                        },
                    ]}
                />
                <div class="card-rows2__container">
                    <Button_4>Смотреть еще</Button_4>
                </div>
            </div>
        </div>
    </Container>
</section>

<style lang="scss">
    $breakpoints-4k: 3839.98px;
    $breakpoints-2k: 2559.98px;
    $breakpoints-laptop:(
            mx:1440.98px,
            mn:1024.98px,
    );
    $class: ".projecdirection";
    #{$class} {
        :global(#{$class}-container) {
            width: 100%;
            padding: 55px 40px 55px 40px;
            margin: 0 0;
            position: relative;
            z-index: 1;
            background: #ffffff;
            border: none;
            @include mediaQueryMin($breakpoints-4k) {
                padding: 55px 100px 100px 100px;
            }
            @include mediaQueryMin($breakpoints-2k) {
                padding: 100px 100px 100px 100px;
            }
        }
        :global(#{$class}-tile){
            display: flex;
        }
        .card-rows2__container {
            width: 350px;
            height: 550px;
            margin-top: 15px;
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            @include mediaQueryMin($breakpoints-4k) {
                width: 400px;
                height: 620px;
            }
            @include mediaQueryMinMax(map-get($breakpoints-laptop, mn),map-get($breakpoints-laptop, mx)){
                width: 250px;
                height: 400px;
            }
        }
        .card-rows1__container {
            width: 350px;
            height: 550px;
            margin-top: 15px;
            border: 1px solid #000000;
            margin-right: 10px;
            display: flex;
            align-items: center;
            text-align: left;
            justify-content: center;
            @include mediaQueryMin($breakpoints-4k) {
                width: 400px;
                height: 620px;
            }
            @include mediaQueryMinMax(map-get($breakpoints-laptop, mn),map-get($breakpoints-laptop, mx)){
                width: 250px;
                height: 400px;
            }
        }
        :global(.card-rows1__title2) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            width: 300px;
            text-align: center;
            text-transform: uppercase;
            background-color: #ffffff;
            color: #000000;
            position: absolute;
            transform: rotate(-90deg);
            left: -4.1%;
            @include mediaQueryMin($breakpoints-4k) {
                left: 19%;
            }
            @include mediaQueryMin($breakpoints-2k) {
                left: 9.4%;
            }
            @include mediaQueryMinMax(map-get($breakpoints-laptop, mn),map-get($breakpoints-laptop, mx)){
                left: -7.5%;
            }
        }
        :global(.card-rows1__title2::after) {
            content: "";
            bottom: 10px;
            left: -9px;
            position: absolute;
            width: 15px;
            border: 1px solid #000000;
            transform: rotate(45deg);
        }
        :global(.card-rows1__title2::before) {
            content: "";
            bottom: 10px;
            right: -9px;
            position: absolute;
            width: 15px;
            border: 1px solid #000000;
            transform: rotate(45deg);
        }
        .card-rows1__title2::before {
        }
        .card-rows1__title {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
            @include mediaQueryMin($breakpoints-4k) {
                font-size: 24px;
                font-weight: 500;
            }
            @include mediaQueryMin($breakpoints-2k){
                font-size: 18px;
                font-weight: 500;
            }
        }
        .card-container {
            min-height: 500px;
        }
        .card-rows1 {
            min-height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            @include mediaQueryMin($breakpoints-4k) {
                margin-bottom: 25px;
            }
            @include mediaQueryMinMax(map-get($breakpoints-laptop, mn),map-get($breakpoints-laptop, mx)){
                margin-bottom: 0px;
                justify-content: space-between;
            }
        }
        :global(#{$class}-tile) {
            width: 100%;
            margin-bottom: 110px;
            @include mediaQueryMin($breakpoints-4k) {
                display: flex;
            }
        }
        :global(.designstages-main__rows) {
            flex: 0 1 1.5%;
            @include mediaQueryMin($breakpoints-4k) {
                border: none;
            }
            @include mediaQueryMin($breakpoints-2k){
                border: none;
                flex: 0 1 14%;
            }
        }
        :global(.designstages-main__rows2) {
            flex: 0 1 95%;
            padding: 0px 700px 0px 0px;
            text-align: left;
            @include mediaQueryMin($breakpoints-4k) {
                padding-left: 50px;
            }
        }
        :global(#{$class}-text) {
            width: 60%;
            display: flex;
            padding-top: 40px;
        }
        :global(.title__item) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 44px;
            color: #000000;
            @include mediaQueryMin($breakpoints-4k) {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 500;
                font-size: 64px;
                line-height: 78px;
            }
        }
        :global(.text__item1) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
            padding-right: 60px;
            @include mediaQueryMin($breakpoints-4k) {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 34px;
                color: #000000;
            }
            @include mediaQueryMin($breakpoints-2k) {
                font-size: 18px;
                line-height: 20px;
                width: 600px;
            }
        }
        :global(.text__item2) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
            padding-left: 60px;
        }
        :global(.content-title__2) {
            text-align: left;
            writing-mode: vertical-rl;
            align-items: center;
            display: flex;
            left: -5%;
            padding: 20px 0px;
            background: #000000;
            position: absolute;
            top: 20%;
            transform: rotate(-180deg);
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            line-height: 24px;
            text-transform: uppercase;
            color: #000000;
            @include mediaQueryMin($breakpoints-4k) {
                font-size: 28px;
                left: -2.5%;
                top: 25%;
            }
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
</style>
