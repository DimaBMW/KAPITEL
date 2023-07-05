<script>
    import Container from "../components/Container.svelte";
    import Image from "../components/Image.svelte";
    import Main from "../components/Main.svelte";
    import Title from "../components/Title.svelte";
    import Selector from "../components/Selector.svelte";
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
                        <div class="projectsuport-title">
                            <Title>Поспроектное сопровождение объекта</Title>
                        </div>
                        <div class="projectsuport-white-contenet">
                            <div class="projectsuport-white-contenet__part">
                                <Selector
                                    class="projectsuport-select"
                                    selector={[
                                        {
                                            title: "Обоснуем площадь земельного участка ",
                                            text: "Помогаем выкупать участки, руководствуясь нормами градостроительного регламента на соответствующей территории, в соответствии с п. 1 ст. 11.9 ЗК РФ. Сформируем земельный участок необходимой площади под объект капитального строительства.",
                                        },
                                    ]}
                                />
                                <Selector
                                    class="projectsuport-select"
                                    selector={[
                                        {
                                            title: "Поможем использовать земли неразграниченной государственной собственности",
                                            text: "В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории).",
                                        },
                                    ]}
                                />
                                <Selector
                                    class="projectsuport-select"
                                    selector={[
                                        {
                                            title: "Согласуем размещение объектов в зонах с особыми условиями использования территории",
                                            text: "После согласования размещения объектов капитального строительства в особых зонах разработаем и согласуем проектную документацию в том числе на съезды с дорог федерального и регионального значения общего пользования/объекты культурного наследия и др.",
                                        },
                                    ]}
                                />
                            </div>
                            <div class="projectsuport-white-contenet__part2">
                                <Selector
                                    class="projectsuport-select"
                                    selector={[
                                        {
                                            title: "Сделаем заключение на условно разрешенный вид использования участка",
                                            text: "Соберем документацию, подтверждающую соблюдение условий и действующих техрегламентов. Получим разрешение на использование земельного участка для установленных целей.",
                                        },
                                    ]}
                                />
                                <Selector
                                    class="projectsuport-select"
                                    selector={[
                                        {
                                            title: "Обоснуем необходимые отклонения от предельных параметров разрешенного строительства",
                                            text: "– для строительства/реконструкции индивидуального жилого дома– для строительства дома блокированной застройки– для строительства коммерческих, общественно-деловых зданий– для строительства зданий складского и промышленных назначений",
                                        },
                                    ]}
                                />
                                <Selector
                                    class="projectsuport-select"
                                    selector={[
                                        {
                                            title: "Соберем полный пакет документов по планировке территории",
                                            text: "Предоставим схему планировочной организации земельного участка под индивидуальное строительство жилого дома с учетом отклонений от пожарных требований.",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                {:else}
                    <div class="projectsuport-title">
                        <Title>Поспроектное сопровождение объекта</Title>
                    </div>
                    <div class="projectsuport-white-contenet">
                        <div class="projectsuport-white-contenet__part">
                            <Selector
                                class="projectsuport-select"
                                selector={[
                                    {
                                        title: "Обоснуем площадь земельного участка ",
                                        text: "Помогаем выкупать участки, руководствуясь нормами градостроительного регламента на соответствующей территории, в соответствии с п. 1 ст. 11.9 ЗК РФ. Сформируем земельный участок необходимой площади под объект капитального строительства.",
                                    },
                                ]}
                            />
                            <Selector
                                class="projectsuport-select"
                                selector={[
                                    {
                                        title: "Поможем использовать земли неразграниченной государственной собственности",
                                        text: "В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории).",
                                    },
                                ]}
                            />
                            <Selector
                                class="projectsuport-select"
                                selector={[
                                    {
                                        title: "Согласуем размещение объектов в зонах с особыми условиями использования территории",
                                        text: "После согласования размещения объектов капитального строительства в особых зонах разработаем и согласуем проектную документацию в том числе на съезды с дорог федерального и регионального значения общего пользования/объекты культурного наследия и др.",
                                    },
                                ]}
                            />
                        </div>
                        <div class="projectsuport-white-contenet__part2">
                            <Selector
                                class="projectsuport-select"
                                selector={[
                                    {
                                        title: "Сделаем заключение на условно разрешенный вид использования участка",
                                        text: "Соберем документацию, подтверждающую соблюдение условий и действующих техрегламентов. Получим разрешение на использование земельного участка для установленных целей.",
                                    },
                                ]}
                            />
                            <Selector
                                class="projectsuport-select"
                                selector={[
                                    {
                                        title: "Обоснуем необходимые отклонения от предельных параметров разрешенного строительства",
                                        text: "– для строительства/реконструкции индивидуального жилого дома– для строительства дома блокированной застройки– для строительства коммерческих, общественно-деловых зданий– для строительства зданий складского и промышленных назначений",
                                    },
                                ]}
                            />
                            <Selector
                                class="projectsuport-select"
                                selector={[
                                    {
                                        title: "Соберем полный пакет документов по планировке территории",
                                        text: "Предоставим схему планировочной организации земельного участка под индивидуальное строительство жилого дома с учетом отклонений от пожарных требований.",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                {/if}
            </Container>
            <Container class="projectsuport-container__black">
                {#if innerWidth > 3839.98}
                    <div class="designstages-main__rows" />
                    <div class="designstages-main__rows2">
                        <div class="projectsuport-title">
                            <Title>Поспроектное сопровождение объекта</Title>
                        </div>
                        <div class="projectsuport-white-contenet">
                            <div class="projectsuport-white-contenet__part">
                                <SelectorBlack
                                    class="projectsuport-select-black"
                                    selector={[
                                        {
                                            title: "Подготовим все технические условия",
                                            text: "– обоснования планировочных решений; – объекты, не угрожающие жизни и здоровью человека.",
                                        },
                                    ]}
                                />
                                <SelectorBlack
                                    class="projectsuport-select-black"
                                    selector={[
                                        {
                                            title: "Помогаем добиться увеличения уровня земельного участка",
                                            text: "Проведем планово-высотную съемку и обозначим высотные отметки рельефа участка. На основании топографического плана обоснуем возможность повышения высотных отметок земельного участка.",
                                        },
                                    ]}
                                />
                                <SelectorBlack
                                    class="projectsuport-select-black"
                                    selector={[
                                        {
                                            title: "Сделаем проект перепланировки/переустройства помещений в многоквартирном доме",
                                            text: "Учитывая пожелания заказчика, внесем корректировки согласно нормативам, и согласуем проект в соответствующих инстанциях.",
                                        },
                                    ]}
                                />
                                <SelectorBlack
                                    class="projectsuport-select-black"
                                    selector={[
                                        {
                                            title: "Подготовим все заключения для суда",
                                            text: "– обоснования планировочных решений; – объекты, не угрожающие жизни и здоровью человека.",
                                        },
                                    ]}
                                />
                            </div>
                            <div class="projectsuport-white-contenet__part2">
                                <SelectorBlack
                                    class="projectsuport-select-black"
                                    selector={[
                                        {
                                            title: "Архитектурно-строительное проектирование под ключ",
                                            text: "Разработаем проектную и рабочую документацию гражданских зданий, жилых, нежилых, общественно-деловых, складских комплексов, производственных, в том числе линейных сооружений.",
                                        },
                                    ]}
                                />
                                <SelectorBlack
                                    class="projectsuport-select-black"
                                    selector={[
                                        {
                                            title: "Разработаем проект инженерной защиты объекта от затопления/подтопления",
                                            text: "Предварительно (перед разработкой тех.задания) проведем топографическую съемку и составим топографический план территории, оценим результаты инженерно-геологических и гидрометеорологических изысканий.",
                                        },
                                    ]}
                                />
                                <SelectorBlack
                                    class="projectsuport-select-black"
                                    selector={[
                                        {
                                            title: "Соберем заключения по пожарной безопасности",
                                            text: "Предоставим схему планировочной организации земельного участка под индивидуальное строительство жилого дома с учетом отклонений от пожарных требований.",
                                        },
                                    ]}
                                />
                                <Button_3 />
                            </div>
                        </div>
                    </div>
                {:else}
                    <div class="projectsuport-white-contenet">
                        <div class="projectsuport-black-contenet__part">
                            <SelectorBlack
                                class="projectsuport-select-black"
                                selector={[
                                    {
                                        title: "Подготовим все технические условия",
                                        text: "– обоснования планировочных решений; – объекты, не угрожающие жизни и здоровью человека.",
                                    },
                                ]}
                            />
                            <SelectorBlack
                                class="projectsuport-select-black"
                                selector={[
                                    {
                                        title: "Помогаем добиться увеличения уровня земельного участка",
                                        text: "Проведем планово-высотную съемку и обозначим высотные отметки рельефа участка. На основании топографического плана обоснуем возможность повышения высотных отметок земельного участка.",
                                    },
                                ]}
                            />
                            <SelectorBlack
                                class="projectsuport-select-black"
                                selector={[
                                    {
                                        title: "Сделаем проект перепланировки/переустройства помещений в многоквартирном доме",
                                        text: "Учитывая пожелания заказчика, внесем корректировки согласно нормативам, и согласуем проект в соответствующих инстанциях.",
                                    },
                                ]}
                            />
                            <SelectorBlack
                                class="projectsuport-select-black"
                                selector={[
                                    {
                                        title: "Подготовим все заключения для суда",
                                        text: "– обоснования планировочных решений; – объекты, не угрожающие жизни и здоровью человека.",
                                    },
                                ]}
                            />
                        </div>
                        <div class="projectsuport-black-contenet__part2">
                            <SelectorBlack
                                class="projectsuport-select-black"
                                selector={[
                                    {
                                        title: "Архитектурно-строительное проектирование под ключ",
                                        text: "Разработаем проектную и рабочую документацию гражданских зданий, жилых, нежилых, общественно-деловых, складских комплексов, производственных, в том числе линейных сооружений.",
                                    },
                                ]}
                            />
                            <SelectorBlack
                                class="projectsuport-select-black"
                                selector={[
                                    {
                                        title: "Разработаем проект инженерной защиты объекта от затопления/подтопления",
                                        text: "Предварительно (перед разработкой тех.задания) проведем топографическую съемку и составим топографический план территории, оценим результаты инженерно-геологических и гидрометеорологических изысканий.",
                                    },
                                ]}
                            />
                            <SelectorBlack
                                class="projectsuport-select-black"
                                selector={[
                                    {
                                        title: "Соберем заключения по пожарной безопасности",
                                        text: "Предоставим схему планировочной организации земельного участка под индивидуальное строительство жилого дома с учетом отклонений от пожарных требований.",
                                    },
                                ]}
                            />
                            <Button_3 />
                        </div>
                    </div>
                {/if}
            </Container>
        </Main>
    </Container>
    <Image
        class="projectsuport-container__backimg"
        src="/images/Post-projectSupportObject/Group@2x.svg"
        alt="план здания"
    />
</section>

<style lang="scss">
    $breakpoints-4k: 3839.98px;
    $breakpoints-2k: 2559.98px;
    $breakpoints-laptop:(
            mx:1440.98px,
            mn:1024.98px,
    );
    $class: ".projectsuport";
    #{$class} {
        width: 100%;
        position: relative;
        :global(#{$class}-container) {
            width: 100%;
            margin: 0 0;
            border:none;
        }
        :global(#{$class}-container__white) {
            padding: 50px 40px 50px 40px;
            margin: 0 0;
            width: 100%;
            background-color: #f5f5f5;
            @include mediaQueryMin($breakpoints-2k) {
                padding: 100px 40px 100px 40px;
            }
            @include mediaQueryMinMax(map-get($breakpoints-laptop, mn),map-get($breakpoints-laptop, mx)){
                padding: 50px 0px 50px 40px;;
            }
        }
        :global(#{$class}-white-contenet) {
            display: flex;
            width: 100%;
            height: 100%;
            @include mediaQueryMin($breakpoints-4k) {
                padding-left: 150px;
            }
        }
        :global(#{$class}-white-contenet__part) {
            padding: 0px 50px 0px 0px;
            flex: 0 1 50%;
            display: flex;
            flex-direction: column;
            justify-content: start;
            width: 100%;
            position: relative;
        }
        :global(#{$class}-white-contenet__part2) {
            padding: 0px 0px 0px 50px;
            flex: 0 1 50%;
            width: 100%;
            display: flex;
            justify-content: start;
            flex-direction: column;
        }
        :global(#{$class}-black-contenet__part) {
            padding: 0px 50px 0px 0px;
            flex: 0 1 50%;
            display: flex;
            flex-direction: column;
            justify-content: start;
            width: 100%;
            position: relative;
        }
        :global(#{$class}-black-contenet__part2) {
            padding: 0px 0px 0px 50px;
            flex: 0 1 50%;
            width: 100%;
            display: flex;
            justify-content: start;
            flex-direction: column;
        }
        :global(#{$class}-container__black) {
            padding: 50px 40px 50px 40px;
            margin: 0 0;
            width: 100%;
            background-color: #000000;
            @include mediaQueryMin($breakpoints-4k) {
                padding: 0px 100px 60px 100px;
                display: flex;
            }
            @include mediaQueryMin($breakpoints-2k) {
                padding: 100px 40px 100px 40px;
            }
        }
        :global(#{$class}-select-black) {
            color: #f5f5f5;
        }
        :global(#{$class}-main) {
            border: none;
        }
        :global(#{$class}-title) {
            text-align: left;
            padding-bottom: 50px;
            padding-left: 22%;
            font-weight: 600;
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
            @include mediaQueryMin($breakpoints-2k){
                margin-bottom: 50px;
            }
        }
        :global(#{$class}-container__backimg) {
            width: 40%;
            position: absolute;
            right: 0;
            top: 0;
            overflow: hidden;
            @include mediaQueryMin($breakpoints-4k){
                top: 0;
                            position: absolute;
                                        right: 0;
            }
        }
        :global(.designstages-main__rows) {
            flex: 0 1 20%;
            border-right: 1px solid #000000;
            border-left: 1px solid #000000;
        }
        :global(.designstages-main__rows2) {
            flex: 0 1 75%;
            padding: 300px 700px 300px 0px;
            text-align: left;
            @include mediaQueryMin($breakpoints-4k){
                padding: 300px 500px 300px 0px;
            }
        }
    }
</style>
