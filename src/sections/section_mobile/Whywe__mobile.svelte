<script>
    import Container from "../../components/Container.svelte";
    import Title from "../../components/Title.svelte";
    import Text from "../../components/Text.svelte";
    import SlaiderMobile from "../../components/Slaider__mobile.svelte";
</script>
<section class="whywe" id="whywe" style="background-color: #f5f5f5;">
    <Container class="whywe-mobile-container">
        <Container class="whywe-mobile-container__text">
            <Title class="title"
            >Нет того, что нам не под силу — разработаем
            проекты любой сложности</Title
            >
            <Text class="text"
                >Архитектурная студия «Капитель» занимается
                проектированием капитальных строений и частных
                домов в Краснодаре с 2017 года. За это время мы
                отдали под реализацию более 300 проектов. В
                работе демонстрируем высокую
                клиентоориентированность, поэтому 9 из 10
                заказов получаем по рекомендации.
            </Text>
            <Text class="text"
                >Доверяя свои проекты студии «Капитель», вы
                можете быть спокойны за качество, бюджет и сроки
                исполнения. У нас работают специалисты со стажем
                более 15 лет. Мы тщательно согласовываем каждый
                этап с заказчиком и все рутинные процессы берем
                на себя.</Text
            >
        </Container>
        <Container class="whywe-mobile-container__slaider">
            
        </Container>
    </Container>
    <SlaiderMobile/>
</section>


<style lang="scss">
    $class: ".whywe";
    #{$class} {
        position: relative;
        :global(#{$class}-mobile-container) {
            width: 100%;
            padding: 50px 20px 0px 20px;
            position: relative;
            z-index: 1;
            background: #f5f5f5;
        }
        :global(#{$class}-mobile-container__text){
            display: flex;
            flex-direction: column;
            gap: 50px;
            position: relative;
            :global(.title){
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                width: 90%;
                align-self: center;
                font-size: 18px;
                line-height: 22px;
                text-transform: uppercase;
            }
            :global(.title::after){
                content: "";
                top: -20px;
                left: -10px;
                position: absolute;
                width: 19px;
                border-bottom: 0.5px solid #000000;
                transform: rotate(45deg);
            }
            :global(.text){
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
            }
        }
        :global(#{$class}-mobile-container__text::after){
            content: "";
            top: -20px;
            left: -10px;
            position: absolute;
            width: 79px;
            border-bottom: 0.5px solid #000000;
            transform: rotate(180deg);
        }
        :global(#{$class}-mobile-container__text::before){
            content: "";
            top: -10px;
            left: -30px;
            position: absolute;
            width: 59px;
            border-bottom: 0.5px solid #000000;
            transform: rotate(90deg);
        }
    }   
</style>