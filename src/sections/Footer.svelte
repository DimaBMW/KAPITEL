<script>
    import Container from "../components/Container.svelte";
    import Title from "../components/Title.svelte";
    import Text from "../components/Text.svelte";
    import Button_5 from "../components/Button_5.svelte";
    import Form_2 from "../components/Form_2.svelte";
    import Image from "../components/Image.svelte";
    import Icon from "../components/Icon.svelte";
</script>

<footer class="footer" id="footer">
    <Container class="footer-container">
        <Container class="footer-application">
            <Title class="footer-information__title font__style" level={2}
                >Оставьте заявку в один клик</Title
            >
            <Text class="footer-application__text font__style"
                >Мы перезвоним вам в течение 10 минут — поможем рассчитать
                стоимость проекта под ключ и ответим на все вопросы</Text
            >
            <Form_2 />
        </Container>
        <Container class="footer-information">
            <div class="footer-information__content">
                <Title class="footer-information__title font__style" level={2}
                    >Контактная информация</Title
                >
                <div class="inf-content">
                    <div class="information">
                        <Text class="footer-information__text font__style"
                            >9:00 – 19:00</Text
                        >
                        <Text class="footer-information__text font__style"
                            >Красных партизан 1/4, к.9, офис 20, Краснодар</Text
                        >
                    </div>
                    <div class="footer-information__icons">
                        <Icon name="Instagramm"class="instagramm"/>
                        <Icon name="Mail" class="mail"/>
                        <Icon name="Telegramm" class="telegramm"/>
                    </div>
                    <Button_5 class="footer-buttno">+7 (989) 141-28-08</Button_5
                    >
                </div>
            </div>
        </Container>
    </Container>
</footer><style lang="scss">
    $breakpoints-4k: 3839.98px;
    $breakpoints-2k:2559.98px;
    $class: ".footer";
    #{$class} {
        display: flex;
        justify-content: center;
        background-color: #f5f5f5;
        :global(#{$class}-container) {
            padding: 20px 40px 420px 40px;
            margin: 0;
            display: flex;
            align-items: center;
            position: relative;
            justify-content: center;
        }
        &-information__icons{
            display: flex;
            gap: 20px;
            :global(.icon){
                fill: gray;
                aspect-ratio: 1/1;
                width: 30px;
                @include mediaQueryMin($breakpoints-4k){
                    width: 50px;
                }
                &:hover{
                    cursor: pointer;
                    fill: #000000;
                }
            }
        }
        :global(#{$class}-application-title) {
            @include mediaQueryMin($breakpoints-2k){
                font-size: 36px;
                line-height: 20px;
                font-family: "Montserrat";
            }
        }
        :global(#{$class}-application) {
            flex: 0 1 50%;
            padding-left: 12%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @include mediaQueryMin($breakpoints-4k) {
                padding-left: 3%;
            }
            @include mediaQueryMin(2560px){
                padding-left: 22%;
            }
        }
        :global(#{$class}-application__text) {
            @include mediaQueryMin($breakpoints-4k) {
                font-size: 34px;
                line-height: 40px;
            }
            @include mediaQueryMin($breakpoints-2k){
                font-size: 18px;
                line-height: 20px;
                font-family: "Montserrat";
                padding-top: 10px;
            }
        }
        :global(#{$class}-information__icons) {
            display: flex;
        }
        :global(#{$class}-img) {
            @include mediaQueryMin($breakpoints-4k) {
                width: 80px;
                height: auto;
                margin: 20% 20px 0px 20px;
            }
            width: 40px;
            height: auto;
            margin: 0px 20px 0px 20px;
        }
        :global(#{$class}-information) {
            flex: 0 1 50%;
            padding-right: 16%;
            display: flex;
            justify-content: end;
            @include mediaQueryMin($breakpoints-4k) {
                padding-right: 7%;
            }
            @include mediaQueryMin($breakpoints-2k){
                padding-right: 25%;
            }
        }
        :global(.inf-content) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 380px;
            min-width: 330px;
            @include mediaQueryMin($breakpoints-4k) {
                min-height: 600px;
                
            }
            @include mediaQueryMin($breakpoints-2k){
                min-height: 400px;
            }
        }
        :global(#{$class}-information__content) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        :global(#{$class}-information__title) {
            font-weight: 500;
            font-size: 24px;
            line-height: 50px;
            @include mediaQueryMin($breakpoints-4k) {
                font-size: 48px;
            }
            @include mediaQueryMin($breakpoints-2k){
                font-size: 36px;
            }
        }
        :global(#{$class}-information__text) {
            margin-top: 10px;
            @include mediaQueryMin($breakpoints-4k) {
                font-size: 34px;
                margin-top: 20px;
                line-height: 40px;
            }
            @include mediaQueryMin($breakpoints-2k){
                font-size: 18px;
            }
        }
        :global(.font__style) {
            font-family: "Montserrat";
            font-style: normal;
            color: #000000;
        }
        :global(#{$class}-application__title) {
            font-weight: 500;
            font-size: 24px;
            line-height: 50px;
            @include mediaQueryMin($breakpoints-4k) {
                font-size: 48px;
            }
        }
    }
</style>
