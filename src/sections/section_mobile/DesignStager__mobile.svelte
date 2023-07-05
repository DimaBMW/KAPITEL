<script>
    import Container from "../../components/Container.svelte";
    import Image from "../../components/Image.svelte";
    import SelectorMobile from "../../components/Selector_mobile.svelte";
    import TextMobile from "../../components/Text_mobile.svelte";
    import Title from "../../components/Title.svelte";
    import Button from "../../components/Button.svelte";
    import Text from "../../components/Text.svelte";
</script>

<section class="designstages" id="designstages">
    <Container class="designstages-container">
        <div class="title ttt">
            <Text class="title"
                >4 этапа проектирования — от эскиза до реализации
            </Text>
        </div>
        <Container class="designstages-container-box">
            <Image
                class="designstages-container-box__img"
                src="/images/DesignStsges/IMG_1.png"
                alt="ноутбуки и листы"
            />
            <div class="designstages-container-box__selector">
                <SelectorMobile
                    class="designstages-container-box__selectorr"
                    selector={[
                        {
                            title: "Знакомство и составление технического задания",
                            text: "В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории).",
                        },
                    ]}
                />
            </div>
        </Container>
        <Container class="designstages-container-box">
            <Image
                class="designstages-container-box__img"
                src="/images/DesignStsges/IMG_2.png"
                alt="ноутбуки и листы"
            />
            <div class="designstages-container-box__selector2">
                <SelectorMobile
                    class="designstages-container-box__selectorr2"
                    selector={[
                        {
                            title: "Эскизный проект, подготовка предварительных архитектурных чертежей",
                            text: "На этом этапе переносим задумки в документальный формат — прорисовываем планировку будущего дома, детально прорабатываем фасады и определяем расположение дома на участке с учетом сторон света согласно СНиП.",
                        },
                    ]}
                />
            </div>
        </Container>
        <Container class="designstages-container-box">
            <Image
                class="designstages-container-box__img"
                src="/images/DesignStsges/IMG_3.png"
                alt="ноутбуки и листы"
            />
            <div class="designstages-container-box__selector3">
                <SelectorMobile
                    class="designstages-container-box__selectorr3"
                    selector={[
                        {
                            title: "Рабочий проект, утрверждение полного пакета чертежей",
                            text: "Делаем архитектурно-строительные чертежи, включая монтажные планы: перекрытия, проемы, крепежные узлы. А также план фундамента и конструкции кровли с основными техническими и конструктивными параметрами.",
                        },
                    ]}
                />
            </div>
        </Container>
        <Container class="designstages-container-box">
            <Image
                class="designstages-container-box__img"
                src="/images/DesignStsges/IMG_4.png"
                alt="ноутбуки и листы"
            />
            <div class="designstages-container-box__selector4">
                <SelectorMobile
                    class="designstages-container-box__selectorr4"
                    selector={[
                        {
                            title: "Разделы инженерных систем",
                            text: "В соответствии с нормативами и опираясь на дизайн-проект вносим в чертежи системы отопления, электрики, водоснабжения, канализации и вентиляции.",
                        },
                    ]}
                />
            </div>
        </Container>
        <Button class="daw">Оставить заявку</Button>
    </Container>
</section>

<style lang="scss">
    $breakpoints: (
        md: 768px,
        xl: 1024px,
    );
    $class: ".designstages";
    #{$class} {
        :global(.daw){
            width: 100%;
            margin-top: 100px;
            border: 1px solid #000000;
            color:black;
            &::after{
                background-color: none;
            }
        }
        :global(#{$class}-container) {
            width: 100%;
            padding: 20px 20px 50px 20px;
            @include mediaQueryMin(map-get($breakpoints, md)){
                padding: 50px 40px 50px 40px;
            }
            margin: 0 0;
            // text-align: left;
            position: relative;
            z-index: 1;
            display: flex;
            gap: 50px;
            flex-direction: column;
            gap: 40px;
            background: #f5f5f5;
        }
        :global(.title) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            width: 90%;
            align-self: center;
            font-size: 18px;
            line-height: 22px;
            text-transform: uppercase;
            @include mediaQueryMin(map-get($breakpoints, md)){
                font-size: 28px;
                line-height: 30px;
                padding: 0px 10px 0px 20px;
            }
        }
        :global(.ttt::after){
                content: "";
                top: -0px;
                left: 12px;
                position: absolute;
                width: 17px;
                border-bottom: 0.5px solid #000000;
                transform: rotate(45deg);
                @include mediaQueryMin(map-get($breakpoints, md)){
                    top: 30px;
                    left: 41px;
                }
        }
        :global(#{$class}-container::after) {
            content: "";
            top: 0px;
            left: 11px;
            position: absolute;
            width: 79px;
            border-bottom: 0.5px solid #000000;
            transform: rotate(180deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                top: 30px;
                left: 41px;
            }
        }
        :global(#{$class}-container::before) {
            content: "";
            top: 10px;
            left: -9px;
            position: absolute;
            width: 59px;
            border-bottom: 0.5px solid #000000;
            transform: rotate(90deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                top: 45px;
                left: 21px;
            }
        }
        :global(#{$class}-container-box__img) {
            height: 150px;
            padding-left: 20px;
            @include mediaQueryMin(map-get($breakpoints, md)){
                height: 250px;
                padding-left: 80px;
                padding-right: 40px;
            }
        }
        :global(#{$class}-container-box__selector){
            padding-left: 20px;
            position: relative;
            @include mediaQueryMin(map-get($breakpoints, md)){
                padding-left: 80px;
                padding-right: 40px;
            }
        }
        :global(#{$class}-container-box__selector2){
            padding-left: 20px;
            position: relative;
            @include mediaQueryMin(map-get($breakpoints, md)){
                padding-left: 80px;
                padding-right: 40px;
            }
        }
        :global(#{$class}-container-box__selector3){
            padding-left: 20px;
            position: relative;
            @include mediaQueryMin(map-get($breakpoints, md)){
                padding-left: 80px;
                padding-right: 40px;
            }
        }
        :global(#{$class}-container-box__selector4){
            padding-left: 20px;
            position: relative;
            @include mediaQueryMin(map-get($breakpoints, md)){
                padding-left: 80px;
                padding-right: 40px;
            }
        }
        :global(#{$class}-container-box__selector::after) {
            content: "";
            bottom: -18px;
            left: -2px;
            position: absolute;
            width: 100%;
            border-bottom: 0.5px solid #000000;
            transform: rotate(180deg);
        }
        :global(#{$class}-container-box__selector::before) {
            content: "";
            bottom: 0px;
            left: -28px;
            position: absolute;
            width: 20%;
            border-bottom: 0.5px solid #000000;
            transform: rotate(90deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -45px;
                width: 19%;
            }
        }
        :global(#{$class}-container-box__selector2::after) {
            content: "";
            bottom: -20px;
            left: -2px;
            position: absolute;
            width: 100%;
            border-bottom: 0.5px solid #000000;
            transform: rotate(180deg);
        }
        :global(#{$class}-container-box__selector2::before) {
            content: "";
            bottom: 0px;
            left: -28px;
            position: absolute;
            width: 20%;
            border-bottom: 0.5px solid #000000;
            transform: rotate(90deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -45px;
                width: 19%;
            }
        }
        :global(#{$class}-container-box__selector3::after) {
            content: "";
            bottom: -20px;
            left: -2px;
            position: absolute;
            width: 100%;
            border-bottom: 0.5px solid #000000;
            transform: rotate(180deg);
        }
        :global(#{$class}-container-box__selector3::before) {
            content: "";
            bottom: 0px;
            left: -28px;
            position: absolute;
            width: 20%;
            border-bottom: 0.5px solid #000000;
            transform: rotate(90deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -45px;
                width: 19%;
            }
        }
        :global(#{$class}-container-box__selector4::after) {
            content: "";
            bottom: -20px;
            left: -2px;
            position: absolute;
            width: 100%;
            border-bottom: 0.5px solid #000000;
            transform: rotate(180deg);
        }
        :global(#{$class}-container-box__selector4::before) {
            content: "";
            bottom: 0px;
            left: -28px;
            position: absolute;
            width: 20%;
            border-bottom: 0.5px solid #000000;
            transform: rotate(90deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -45px;
                width: 19%;
            }
        }
        :global(#{$class}-container-box__selectorr::before) {
            content: "";
            bottom:-18px;
            left: -23px;
            position: absolute;
            width: 17px;
            border-bottom: 0.5px solid #000000;
            transform: rotate(45deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -67px;
            }
        }
        :global(#{$class}-container-box__selectorr::after) {
            content: "Этап 1";
            bottom:80px;
            left: -54px;
            letter-spacing: 2px;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            position: absolute;
            width: 77px;
            transform: rotate(-90deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -98px;
                bottom:120px;
            }
        }
        :global(#{$class}-container-box__selectorr2::before) {
            content: "";
            bottom:-20px;
            left: -23px;
            position: absolute;
            width: 17px;
            border-bottom: 0.5px solid #000000;
            transform: rotate(45deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -67px;
            }
        }
        :global(#{$class}-container-box__selectorr2::after) {
            content: "Этап 2";
            bottom:80px;
            left: -54px;
            letter-spacing: 2px;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            position: absolute;
            width: 77px;
            transform: rotate(-90deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -98px;
                bottom:120px;
            }
        }
        :global(#{$class}-container-box__selectorr3::before) {
            content: "";
            bottom:-20px;
            left: -23px;
            position: absolute;
            width: 17px;
            border-bottom: 0.5px solid #000000;
            transform: rotate(45deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -67px;
            }
        }
        :global(#{$class}-container-box__selectorr3::after) {
            content: "Этап 3";
            bottom:80px;
            left: -54px;
            letter-spacing: 2px;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            position: absolute;
            width: 77px;
            transform: rotate(-90deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -98px;
                bottom:120px;
            }
        }
        :global(#{$class}-container-box__selectorr4::before) {
            content: "";
            bottom:-20px;
            left: -23px;
            position: absolute;
            width: 17px;
            border-bottom: 0.5px solid #000000;
            transform: rotate(45deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -67px;
            }
        }
        :global(#{$class}-container-box__selectorr4::after) {
            content: "Этап 4";
            bottom:80px;
            left: -54px;
            letter-spacing: 2px;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            position: absolute;
            width: 77px;
            transform: rotate(-90deg);
            @include mediaQueryMin(map-get($breakpoints, md)){
                left: -98px;
                bottom:120px;
            }
        }
    }
</style>
