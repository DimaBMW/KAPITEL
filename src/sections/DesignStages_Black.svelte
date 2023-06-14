<script>
    import Container from "../components/Container.svelte";
    import Title from "../components/Title.svelte";
    import Main from "../components/Main.svelte";
    import Text from "../components/Text.svelte";
    import Image from "../components/Image.svelte";
    import Button_2 from "../components/Button_2.svelte";

    import StickyContent from '../components/StickyContent.svelte';//для фиксации жлементов на странице

    let stickToTop = true;
    let innerWidth;
</script>

<svelte:window bind:innerWidth />
<section class="designstages" id="designstages">
    <Container class="designstages-container">
        {#if innerWidth > 3839.98}
            <Main class="designstages-main">
                <div class="designstages-main__rows" />
                <div class="designstages-main__rows2">
                    <div class="designstages-content">
                        <Title class="content-title">Этап 3</Title>
                        <Image
                            class="content-img"
                            src="/images/DesignStsges/IMG_3.png"
                            alt="ноутбуки и листы"
                        />
                        <div class="content-text">
                            <Title class="content-text-title"
                                >Рабочий проект, утрверждение полного пакета
                                чертежей</Title
                            >
                            <Text class="designstages-text"
                                >Делаем архитектурно-строительные чертежи,
                                включая монтажные планы: перекрытия, проемы,
                                крепежные узлы. А также план фундамента и
                                конструкции кровли с основными техническими и
                                конструктивными параметрами.</Text
                            >
                        </div>
                    </div>
                    <div class="designstages-content">
                        <Title class="content-title__2">Этап 4</Title>
                        <Image
                            class="content-img"
                            src="/images/DesignStsges/IMG_4.png"
                            alt="ноутбуки и листы"
                        />
                        <div class="content-text">
                            <Title class="content-text-title"
                                >Разделы инженерных систем</Title
                            >
                            <Text class="designstages-text"
                                >В соответствии с нормативами и опираясь на
                                дизайн-проект вносим в чертежи системы
                                отопления, электрики, водоснабжения, канализации
                                и вентиляции.</Text
                            >
                        </div>
                    </div>
                </div>
            </Main>
        {:else}
            <Main class="designstages-main">
                <div class="designstages-content">
                    <Title class="content-title">Этап 3</Title>
                    <Image
                        class="content-img"
                        src="/images/DesignStsges/IMG_1.png"
                        alt="ноутбуки и листы"
                    />
                    <div class="content-text">
                        <Title class="content-text__title"
                            >Рабочий проект, утрверждение полного пакета
                            чертежей</Title
                        >
                        <Text class="designstages-text"
                            >Делаем архитектурно-строительные чертежи, включая
                            монтажные планы: перекрытия, проемы, крепежные узлы.
                            А также план фундамента и конструкции кровли с
                            основными техническими и конструктивными
                            параметрами.
                        </Text>
                    </div>
                </div>
                <div class="designstages-content">
                    <Title class="content-title__2">Этап 4</Title>
                    <Image
                        class="content-img"
                        src="/images/DesignStsges/IMG_2.png"
                        alt="ноутбуки и листы"
                    />
                    <div class="content-text">
                        <Title class="content-text__title"
                            >Разделы инженерных систем
                        </Title>
                        <Text class="designstages-text"
                            >В соответствии с нормативами и опираясь на
                            дизайн-проект вносим в чертежи системы отопления,
                            электрики, водоснабжения, канализации и вентиляции.
                        </Text>
                    </div>
                </div>
            </Main>
        {/if}
        <aside class="designstages-asaid">
                <!-- <div class="designstages-button">
                    <Button_2>ОСТАВИТЬ ЗАЯВКУ</Button_2>
                </div> -->
                <StickyContent>
                    
                </StickyContent>
        </aside>
    </Container>
</section>

<style lang="scss">
    $breakpoints-4k: 3839.98px;
    $breakpoints-2k: 2559.98px;
    $class: ".designstages";
    #{$class} {
        :global(.designstages-title) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 44px;
            color: #ffffff;
            @include mediaQueryMin($breakpoints-4k) {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 500;
                font-size: 64px;
                line-height: 78px;
                color: #ffffff;
                text-align: left;
                padding-left: 50px;
            }
        }
        :global(.content-text__title) {
            font-size: 18px;
            font-weight: 600;
            text-transform: uppercase;
            font-family: "Montserrat";
            line-height: 20px;
            padding: 10px 10px 30px 10px;
            color: #ffffff;
            text-align: left;
            @include mediaQueryMin($breakpoints-2k){
                font-size: 24px;
                line-height: 30px;
            }
        }
        :global(#{$class}-main) {
            border-left: 0.5px solid #ffffff;
        }
        :global(.content-text-title) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 34px;
            text-transform: uppercase;
            color: #ffffff;
        }
        :global(#{$class}-text) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #ffffff;
            text-align: left;
            position: relative;
            padding: 10px;
            @include mediaQueryMin($breakpoints-4k) {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 34px;
                color: #ffffff;
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
            border-right: 1px solid #ffffff;
        }
        :global(.designstages-main__rows2) {
            flex: 0 1 75%;
            padding: 300px 700px 0px 0px;
            text-align: left;
        }
        :global(#{$class}-container) {
            width: 100%;
            padding: 0px 40px 0px 40px;
            margin: 0 0;
            text-align: center;
            position: relative;
            z-index: 1;
            display: flex;
            background: #000000;
            @include mediaQueryMin($breakpoints-4k) {
                padding: 0px 100px 0px 100px;
                min-height: 3500px;
            }
        }
        :global(#{$class}-main) {
            @include mediaQueryMin($breakpoints-4k) {
                display: flex;
            }
            @include mediaQueryMin($breakpoints-2k) {
                padding: 10px 0px 0px 0px;
            }
        }
        :global(#{$class}-content) {
            width: 100%;
            height: 50%;
            display: flex;
            margin-top: 50px;
            padding-bottom: 50px;
            @include mediaQueryMin($breakpoints-4k) {
                width: 100%;
                padding: 0;
                display: block;
            }
            @include mediaQueryMin($breakpoints-2k){
                padding-bottom: 100px;
                margin-top: 80px;
            }
        }
        :global(.content-title) {
            text-align: left;
            writing-mode: vertical-rl;
            align-items: center;
            display: flex;
            left: 1.5%;
            padding: 20px 0px;
            background: #000000;
            position: absolute;
            top: 17%;
            transform: rotate(-180deg);
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            text-transform: uppercase;
            color: #ffffff;
            @include mediaQueryMin($breakpoints-4k) {
                font-size: 28px;
                left: 2.3%;
                top: 25%;
            }
            @include mediaQueryMin($breakpoints-2k) {
                left: 1.1%;
                top: 21%;
            }
        }
        :global(.content-title__2) {
            text-align: left;
            writing-mode: vertical-rl;
            align-items: center;
            display: flex;
            left: 1.5%;
            padding: 20px 0px;
            background: #000000;
            position: absolute;
            top: 66.5%;
            transform: rotate(-180deg);
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            text-transform: uppercase;
            color: #ffffff;
            @include mediaQueryMin($breakpoints-4k) {
                font-size: 28px;
                left: 2.3%;
                top: 75%;
            }
            @include mediaQueryMin($breakpoints-2k) {
                left: 1.1%;
                top: 70%;
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
                height: 400px;
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
            border: 1px solid #ffffff;
            transform: rotate(-45deg);
        }
        :global(.content-title::after) {
            content: "";
            top: -1px;
            left: 3px;
            position: absolute;
            width: 15px;
            border: 1px solid #ffffff;
            transform: rotate(-45deg);
        }
        :global(.content-title__2::before) {
            content: "";
            bottom: -1px;
            left: 3px;
            position: absolute;
            width: 15px;
            border: 1px solid #ffffff;
            transform: rotate(-45deg);
        }
        :global(.content-title__2::after) {
            content: "";
            top: -1px;
            left: 3px;
            position: absolute;
            width: 15px;
            border: 1px solid #ffffff;
            transform: rotate(-45deg);
        }
        :global(#{$class}-button) {
            flex: 0 1 40%;
            height: 100px;
            text-align: center;
            align-items: center;
            justify-content: center;
            position: relative;
            padding-top: 50px;
            padding-left: 15%;
            @include mediaQueryMin($breakpoints-4k) {
                height: 100%;
                display: flex;
            }
            @include mediaQueryMin($breakpoints-2k){
                padding-top: 100px;
            }
        }
    }
    $class_2: ".designstages-asaid";
    #{$class_2} {
        flex: 20%;
    }
</style>
