<script>
    import Container from "../../components/Container.svelte";
    import Image from "../../components/Image.svelte";
    import Selector_2Mobile from "../../components/Selector-2_mobile.svelte";
    import TextMobile from "../../components/Text_mobile.svelte";
    import Title from "../../components/Title.svelte";
    import Button from "../../components/Button.svelte";
</script>

<section class="designstages" id="designstages">
    <Container class="designstages-container">
        <div class="title ttt">
            <Title class="title"
                >Постпроектное сопровождение объекта
            </Title>
        </div>
        <Container class="designstages-container-box">
            <div class="designstages-container-box__selector">
                <Selector_2Mobile
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
            <div class="designstages-container-box__selector2">
                <Selector_2Mobile
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
            <div class="designstages-container-box__selector3">
                <Selector_2Mobile
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
            <div class="designstages-container-box__selector4">
                <Selector_2Mobile
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
        <Button class="daw">все услуги</Button>
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
            margin-top: 50px;
            border: 1px solid #000000;
            color:black;
            @include mediaQueryMin(map-get($breakpoints, md)){
                width: 100%;
            }
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
                width: 80%;
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
                    left: 40px;
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
                left: 35px;
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
                left: 20px;
            }
        }
        :global(#{$class}-container-box__img) {
            height: 150px;
            padding-left: 20px;
        }
        :global(#{$class}-container-box__selector){
            padding-left: 0px;
            position: relative;
        }
        :global(#{$class}-container-box__selector2){
            padding-left: 0px;
            position: relative;
        }
        :global(#{$class}-container-box__selector3){
            padding-left: 0px;
            position: relative;
        }
        :global(#{$class}-container-box__selector4){
            padding-left: 0px;
            position: relative;
        }
    }
</style>
