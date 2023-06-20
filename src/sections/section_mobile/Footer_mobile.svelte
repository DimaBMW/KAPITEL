<script>
    import Container from "../../components/Container.svelte";
    import Title from "../../components/Title.svelte";
    import Text from "../../components/Text.svelte";
    import FormMobile from "../../components/Form_mobile.svelte";
    import Button from "../../components/Button.svelte";
    import Icon from "../../components/Icon.svelte";
</script>

<footer class="footer" id="footer">
    <Container class="footer-container">
        <Container class="footer-container-text">
            <Title class="title">Оставьте заявку в один клик</Title>
            <Text class="text"
                >Мы перезвоним вам в течение 10 минут — поможем рассчитать
                стоимость проекта под ключ и ответим на все вопросы
            </Text>
        </Container>
        <Container class="footer-container-form">
            <FormMobile />
            <Button class="footer-buttno">Оставить заявку</Button>
        </Container>
        <Container class="footer-container-information">
            <div class="footer-information__content">
                <Container class="footer-container-text">
                    <Title class="title">кОНТАКТНАЯ ИНФОРМАЦИЯ</Title>
                    <Text class="text">9:00 – 19:00</Text>
                    <Text class="text">Красных партизан 1/4, к.9, офис 20, Краснодар</Text>
                </Container>
                <div class="inf-content">
                    <div class="footer-information__icons">
                        <Icon name="Instagramm" class="instagramm" />
                        <Icon name="Mail" class="mail" />
                        <Icon name="Telegramm" class="telegramm" />
                    </div>
                    <Button class="footer-buttno">+7 (989) 141-28-08</Button>
                </div>
            </div>
        </Container>
    </Container>
</footer>

<style lang="scss">
    $class: ".footer";
    #{$class} {
        :global(#{$class}-container) {
            width: 100%;
            padding: 20px 20px 50px 20px;
            margin: 0 0;
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 50px;
            z-index: 1;
            background: #000000;
        }
        :global(#{$class}-container-text) {
            display: flex;
            flex-direction: column;
            gap: 50px;
            position: relative;
            :global(.title) {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 600;
                width: 90%;
                align-self: center;
                color: #fff;
                font-size: 18px;
                line-height: 22px;
                text-transform: uppercase;
            }
            :global(.text) {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                color: #fff;
                font-size: 14px;
                line-height: 16px;
            }
        }
        :global(.footer-information__content) {
            display: flex;
            flex-direction: column;
            gap: 50px;
        }
        &-information__icons {
            display: flex;
            gap: 20px;
            :global(.icon) {
                fill: gray;
                aspect-ratio: 1/1;
                width: 30px;
                &:hover {
                    cursor: pointer;
                    fill: #000000;
                }
            }
        }
        :global(.footer-buttno){
            margin-top: 50px;
            width: 100%;
        }
    }
</style>
