<script>
    import Container from "../../components/Container.svelte";
    import Title from "../../components/Title.svelte";
    import Text from "../../components/Text.svelte";
    import Image from "../../components/Image.svelte";
    import Selector_2Mobile from "../../components/Selector-22_mobile.svelte";
</script>

<section class="partners" id="partners">
    <Container class="partners-container">
        <Container class="partners-container__text">
            <Title class="title">C нами работают, нам доверяют</Title>
            <Text class="text"
                >Архитектурная студия Капитель работает в Краснодаре с 1872
                года. У нас большой опыт в проектировании и 100 реализованных
                объектов.
            </Text>
        </Container>
        <Container class="partners-container__img">
            <Container class="partners-container__img-rows1">
                <Image
                    class="content-img"
                    src="/images/Partners/DomRU-black.svg"
                    alt="ноутбуки и листы"
                />
                <Image
                    class="content-img"
                    src="/images/Partners/JUNIOR-black.svg"
                    alt="ноутбуки и листы"
                />
            </Container>
            <Container class="partners-container__img-rows2">
                <Image
                    class="content-img"
                    src="/images/Partners/MTC-black.svg"
                    alt="ноутбуки и листы"
                />
                <Image
                    class="content-img"
                    src="/images/Partners/ROSSETI-black.svg"
                    alt="ноутбуки и листы"
                />
            </Container>
        </Container>
        <Container class="partners-container__quetions">
            <Selector_2Mobile
                class="projectsuport-select"
                selector={[
                    {
                        title: "Можно ли обойтись без проекта частного дома?",
                        text: "Помогаем выкупать участки, руководствуясь нормами градостроительного регламента на соответствующей территории, в соответствии с п. 1 ст. 11.9 ЗК РФ. Сформируем земельный участок необходимой площади под объект капитального строительства.",
                    },
                ]}
            />
            <Selector_2Mobile
                class="projectsuport-select"
                selector={[
                    {
                        title: "Какое проектирование жилого дома выбрать: индивидуальное или типовое",
                        text: "В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории).",
                    },
                ]}
            />
            <Selector_2Mobile
                class="projectsuport-select"
                selector={[
                    {
                        title: "Какие типовые проекты домов под ключ бывают?",
                        text: "После согласования размещения объектов капитального строительства в особых зонах разработаем и согласуем проектную документацию в том числе на съезды с дорог федерального и регионального значения общего пользования/объекты культурного наследия и др.",
                    },
                ]}
            />
            <Selector_2Mobile
                class="projectsuport-select"
                selector={[
                    {
                        title: "Делаете ли вы 3D-визуализацию готового проекта?",
                        text: "После согласования размещения объектов капитального строительства в особых зонах разработаем и согласуем проектную документацию в том числе на съезды с дорог федерального и регионального значения общего пользования/объекты культурного наследия и др.",
                    },
                ]}
            />
            <Selector_2Mobile
                class="projectsuport-select"
                selector={[
                    {
                        title: "Что важно знать, заказывая индивидуальное проектировани",
                        text: "После согласования размещения объектов капитального строительства в особых зонах разработаем и согласуем проектную документацию в том числе на съезды с дорог федерального и регионального значения общего пользования/объекты культурного наследия и др.",
                    },
                ]}
            />
        </Container>
    </Container>
</section>

<style lang="scss">
    $class: ".partners";
    #{$class} {
        position: relative;
        background: #f5f5f5;
        :global(#{$class}-container) {
            width: 100%;
            padding: 50px 20px 50px 20px;
            position: relative;
            z-index: 1;
        }
        :global(#{$class}-container__quetions){
            display: flex;
            flex-direction: column;
            gap: 50px;
        }
        :global(#{$class}-container__text) {
            display: flex;
            flex-direction: column;
            gap: 50px;
            position: relative;
            :global(.title) {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 600;
                width: 90%;
                color: #000000;
                align-self: center;
                font-size: 18px;
                line-height: 22px;
                text-transform: uppercase;
            }
            :global(.projectsuport-select){
                border-top: 0.5px solid #7F7F7F;
            }
            :global(.title::after) {
                content: "";
                top: -20px;
                left: -10px;
                position: absolute;
                width: 19px;
                border-bottom: 0.5px solid #000000;
                transform: rotate(45deg);
            }
            :global(.text) {
                color: #000000;
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                padding-left: 20px;
                font-size: 14px;
                line-height: 16px;
            }
        }
        :global(#{$class}-container__text::after) {
            content: "";
            top: -20px;
            left: -10px;
            position: absolute;
            width: 79px;
            border-bottom: 0.5px solid #000000;
            transform: rotate(180deg);
        }
        :global(#{$class}-container__text::before) {
            content: "";
            top: 45px;
            left: -85px;
            position: absolute;
            width: 169px;
            border-bottom: 0.5px solid #000000;
            transform: rotate(90deg);
        }
        :global(#{$class}-container__img) {
            padding: 50px 0px 50px 0px;
            display: flex;
            flex-direction: column;
            gap: 50px;
        }
        :global(#{$class}-container__img-rows1) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        :global(#{$class}-container__img-rows2) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        :global(.content-img) {
            width: 150px;
            height: auto;
        }
    }
</style>
