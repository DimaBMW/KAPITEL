<script>
    import Container from "../components/Container.svelte";
    import Slider from "../components/Slider.svelte";
    import Text from "../components/Text.svelte";
    import Title from "../components/Title.svelte";


</script>

<section class="partners" id="partners">
    <Container class="partners-container">
        <Container class="partners-container__text">
            <Title level={2} class="partners-container__text-title text__style">с нами работают, нам доверяют</Title>
            <Text class="partners-container__text-text text__style">Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов.</Text>
        </Container>
        <Container class="partners-container__slider">
                <Slider></Slider>
        </Container>
    </Container>
</section>


<style lang="scss">
    $breakpoints-4k: 3839.98px;
    $breakpoints-2k: 2559.98px;
    $class:".partners";
    #{$class}{
        background: #000000;
        min-height: 200px;
        @include mediaQueryMin($breakpoints-4k){
            min-height: 500px;
            display: flex;
        }
        @include mediaQueryMin($breakpoints-2k){
            min-height: 300px;
            display: flex;
        }
        :global(#{$class}-container){
            min-width: 100%;
            padding: 20px 20px 20px 40px;
            margin: 0;
            display: flex;
            align-items: center;
            position: relative;
            justify-content: space-between;
        }
        :global(#{$class}-container__text){
            flex: 0 1 30%;
            text-align: left;
            min-height: 250px;
            border-right: 0.5px solid #FFFFFF;
            box-shadow: 30px 0px 50px 0px rgba(0, 0, 0, 0.916);
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 100;
            @include mediaQueryMin($breakpoints-2k){
                flex: 0 1 30%;
                padding: 0px 80px 0px 20px;
            }
        }
        :global(#{$class}-container__text::after){
            content: "";
            top: 15px;
            right: -9px;
            position: absolute;
            width: 15px;
            border-bottom: 0.5px solid #ffffff;
            transform: rotate(-45deg);
        }
        :global(#{$class}-container__text::before){
            content: "";
            bottom:15px;
            right: -9px;
            position: absolute;
            width: 15px;
            border-bottom: 1px solid #ffffff;
            transform: rotate(-45deg);
        }
        :global(#{$class}-container__slider){
            flex: 0 1 70%;
            min-height: 200px;
            display: flex;
            align-items: center;
            position: relative;
            @include mediaQueryMin($breakpoints-2k){
                flex: 0 1 70%;
                min-height: 300px;
            }
        }
        :global(#{$class}-container__slider::after){
            content: "";
            top: -10px;
            left:-40px;
            position: absolute;
            width: 60px;
            z-index: 100;
            border-bottom: 1px solid #ffffff;
            transform: rotate(180deg);
            @include mediaQueryMin($breakpoints-2k){
                top: 40px;
                left:-40px;
            }
        }
        :global(#{$class}-container__slider::before){
            content: "";
            bottom:-10px;
            left: -40px;
            position: absolute;
            width: 60px;
            z-index: 100;
            border-bottom: 1px solid #ffffff;
            transform: rotate(180deg);
            @include mediaQueryMin($breakpoints-2k){
                top: 40px;
                left:-40px;
            }
        }
        :global(#{$class}-container__text-title){
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
            padding-right: 130px;
            text-transform: uppercase;
            @include mediaQueryMin($breakpoints-4k){
                font-size: 40px;
                line-height: 50px;
            }
            @include mediaQueryMin($breakpoints-2k){
                font-size: 36px;
                padding-right: 180px;
                line-height: 35px;
            }
        }
        :global(#{$class}-container__text-text){
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            padding-right: 50px;
            margin-top: 10px;
            @include mediaQueryMin($breakpoints-4k){
                font-size: 20px;
            }
            @include mediaQueryMin($breakpoints-2k){
                font-size: 18px;
                line-height: 20px;
            }
        }
        :global(.text__style){
            font-family: 'Montserrat';
            font-style: normal;
            color: #FFFFFF;
        }
    }
</style>