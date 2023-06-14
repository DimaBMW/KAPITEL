<script>
    import Container from "../components/Container.svelte";
    import Image from "../components/Image.svelte";
    import Main from "../components/Main.svelte";
    import Title from "../components/Title.svelte";
    import Selector_2 from "../components/Selector_2.svelte";
    import SelectorBlack from "../components/Selector_black.svelte";
    import Button_3 from "../components/Button_3.svelte";

    let innerWidth;
</script>

<svelte:window bind:innerWidth />
<section class="projectsuport" id="projectsuport">
    <Container class="projectsuport-container">
        <Main class="projectsuport-main">
            <Container class="projectsuport-container__white">
                {#if innerWidth > 3839.98}
                    <div class="designstages-main__rows" />
                    <div class="designstages-main__rows2">
                        <div class="projectsuport-white-contenet">
                            <div class="projectsuport-white-contenet__part">
                                <Selector_2
                                    class="projectsuport-select"
                                    selector={[
                                        {
                                            title: "Обоснуем площадь земельного участка ",
                                            text: "Помогаем выкупать участки, руководствуясь нормами градостроительного регламента на соответствующей территории, в соответствии с п. 1 ст. 11.9 ЗК РФ. Сформируем земельный участок необходимой площади под объект капитального строительства.",
                                        },
                                    ]}
                                />
                                <Selector_2
                                    class="projectsuport-select"
                                    selector={[
                                        {
                                            title: "Поможем использовать земли неразграниченной государственной собственности",
                                            text: "В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории).",
                                        },
                                    ]}
                                />
                                <Selector_2
                                    class="projectsuport-select"
                                    selector={[
                                        {
                                            title: "Согласуем размещение объектов в зонах с особыми условиями использования территории",
                                            text: "После согласования размещения объектов капитального строительства в особых зонах разработаем и согласуем проектную документацию в том числе на съезды с дорог федерального и регионального значения общего пользования/объекты культурного наследия и др.",
                                        },
                                    ]}
                                />
                                <Selector_2
                                    class="projectsuport-select"
                                    selector={[
                                        {
                                            title: "Можно ли обойтись без проекта частного дома?",
                                            text: "Помогаем выкупать участки, руководствуясь нормами градостроительного регламента на соответствующей территории, в соответствии с п. 1 ст. 11.9 ЗК РФ. Сформируем земельный участок необходимой площади под объект капитального строительства.",
                                        },
                                    ]}
                                />
                                <Selector_2
                                    class="projectsuport-select"
                                    selector={[
                                        {
                                            title: "Можно ли обойтись без проекта частного дома?",
                                            text: "Помогаем выкупать участки, руководствуясь нормами градостроительного регламента на соответствующей территории, в соответствии с п. 1 ст. 11.9 ЗК РФ. Сформируем земельный участок необходимой площади под объект капитального строительства.",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                {:else}
                    <div class="projectsuport-white-contenet">
                        <div class="projectsuport-white-contenet__part">
                            <Selector_2
                                class="projectsuport-select"
                                selector={[
                                    {
                                        title: "Можно ли обойтись без проекта частного дома?",
                                        text: "Помогаем выкупать участки, руководствуясь нормами градостроительного регламента на соответствующей территории, в соответствии с п. 1 ст. 11.9 ЗК РФ. Сформируем земельный участок необходимой площади под объект капитального строительства.",
                                    },
                                ]}
                            />
                            <Selector_2
                                class="projectsuport-select"
                                selector={[
                                    {
                                        title: "Какое проектирование жилого дома выбрать: индивидуальное или типовое",
                                        text: "В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории).",
                                    },
                                ]}
                            />
                            <Selector_2
                                class="projectsuport-select"
                                selector={[
                                    {
                                        title: "Какие типовые проекты домов под ключ бывают?",
                                        text: "После согласования размещения объектов капитального строительства в особых зонах разработаем и согласуем проектную документацию в том числе на съезды с дорог федерального и регионального значения общего пользования/объекты культурного наследия и др.",
                                    },
                                ]}
                            />
                            <Selector_2
                                class="projectsuport-select"
                                selector={[
                                    {
                                        title: "Делаете ли вы 3D-визуализацию готового проекта?",
                                        text: "После согласования размещения объектов капитального строительства в особых зонах разработаем и согласуем проектную документацию в том числе на съезды с дорог федерального и регионального значения общего пользования/объекты культурного наследия и др.",
                                    },
                                ]}
                            />
                            <Selector_2
                                class="projectsuport-select"
                                selector={[
                                    {
                                        title: "Что важно знать, заказывая индивидуальное проектировани",
                                        text: "После согласования размещения объектов капитального строительства в особых зонах разработаем и согласуем проектную документацию в том числе на съезды с дорог федерального и регионального значения общего пользования/объекты культурного наследия и др.",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                {/if}
            </Container>
        </Main>
    </Container>
</section>

<style lang="scss">
    $breakpoints-4k: 3839.98px;
    $breakpoints-2k:2559.98px;
    $class: ".projectsuport";
    #{$class} {
        width: 100%;
        position: relative;
        :global(#{$class}-container) {
            width: 100%;
            margin: 0 0;
            border: none;
        }
        :global(#{$class}-container__white) {
            padding: 50px 40px 50px 40px;
            margin: 0 0;
            width: 100%;
            background-color: #f5f5f5;
            @include mediaQueryMin($breakpoints-4k) {
                padding: 0px 100px 0px 100px;
                display: flex;
            }
            @include mediaQueryMin($breakpoints-2k){
                padding: 100px 40px 100px 40px;
            }
        }
        :global(#{$class}-white-contenet) {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            text-align: center;
            @include mediaQueryMin($breakpoints-4k) {
                padding-left: 50px;
            }
        }
        :global(#{$class}-white-contenet__part) {
            padding: 0px 50px 20px 0px;
            flex: 0 1 50%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        :global(#{$class}-white-contenet__part2) {
            padding: 20px 0px 20px 50px;
            flex: 0 1 50%;
            width: 100%;
            min-height: 600px;
            display: flex;
            flex-direction: column;
            position: relative;
            justify-content: space-between;
        }
        :global(#{$class}-container__black) {
            padding: 0px 40px 60px 40px;
            margin: 0 0;
            width: 100%;
            background-color: #000000;
            @include mediaQueryMin($breakpoints-4k) {
                padding: 0px 100px 60px 100px;
                display: flex;
            }
        }
        :global(#{$class}-main) {
            border: none;
        }
        :global(#{$class}-title) {
            text-align: center;
            margin: 0 auto;
            @include mediaQueryMin($breakpoints-4k) {
                text-align: left;
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 500;
                font-size: 64px;
                line-height: 78px;
                color: #000000;
                padding-left: 50px;
            }
        }
        :global(.designstages-main__rows) {
            flex: 0 1 20%;
            border-right: 1px solid #000000;
            border-left: 1px solid #000000;
            @include mediaQueryMin($breakpoints-4k){
                border: none;
            }
        }
        :global(.designstages-main__rows2) {
            flex: 0 1 75%;
            padding: 200px 700px 200px 0px;
            text-align: left;
        }
    }
</style>
