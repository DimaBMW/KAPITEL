<script>
    import Container from "../components/Container.svelte";
    import Title from "../components/Title.svelte";
    import SiatBar from "../components/Siat-Bar.svelte";
    import Whywe from "./Whywe.svelte";
    import DesignStages from "./DesignStages.svelte";

    let innerWidth;
</script>

<svelte:window bind:innerWidth />
<section class="saitbar" id="saitbar">
    <Container class="saitbar-conainer">
        <div class="saitbar-maincontent">
            <Whywe />
            <DesignStages />
        </div>
        <div class="saitbar-content">
            <aside class="sait-bar">
                <div class="why-title">
                    <Title class="why-title">Последние проекты</Title>
                </div>
                {#if innerWidth > 1919.98 && innerWidth < 2559.98}
                    <SiatBar
                        class="whywe-saitbar"
                        saitbar={[
                            {
                                src: "/images/Whywe/IMG-why.png",
                                name: "Лофт на берегу моря",
                                text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                                line: "1",
                            },
                            {
                                src: "/images/Whywe/IMG_2.png",
                                name: "Альпийский стиль",
                                text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                                line: "1",
                            },
                            {
                                src: "/images/Whywe/IMG_2.png",
                                name: "Альпийский стиль",
                                text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                                line: "1",
                            },
                        ]}
                    />
                    {:else}
                    <SiatBar
                        class="whywe-saitbar"
                        saitbar={[
                            {
                                src: "/images/Whywe/IMG-why.png",
                                name: "Лофт на берегу моря",
                                text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                                line: "1",
                            },
                            {
                                src: "/images/Whywe/IMG_2.png",
                                name: "Альпийский стиль",
                                text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                                line: "1",
                            },
                            {
                                src: "/images/Whywe/IMG_2.png",
                                name: "Альпийский стиль",
                                text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                                line: "1",
                            },
                            {
                                src: "/images/Whywe/IMG_2.png",
                                name: "Альпийский стиль",
                                text: "Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.",
                                line: "1",
                            },
                        ]}
                    />
                {/if}
            </aside>
        </div>
    </Container>
</section>

<style lang="scss">
    $breakpoints-2k:2559.98px;
    $class: ".saitbar";
    #{$class} {
        :global(#{$class}-conainer) {
            display: flex;
            margin: 0;
            width: 100%;
        }
        :global(#{$class}-maincontent) {
            flex: 0 1 80%;
        }
        :global(#{$class}-content) {
            flex: 0 1 20%;
            background: #f5f5f5;
            padding: 50px 40px 0px 15px;
            @include mediaQueryMin($breakpoints-2k){
                padding: 100px 40px 0px 15px;
            }
        }
        :global(.why-title) {
            margin-bottom: 50px;
        }
    }
</style>
