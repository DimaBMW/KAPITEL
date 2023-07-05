<script>
    import Container from "../../components/Container.svelte";
    import Button from "../../components/Button.svelte";
    import Link from "../../components/Link.svelte";
    import Title from "../../components/Title.svelte";
    import Text from "../../components/Text.svelte";
    import NavigationMobile from "../../components/Navigation__mobile.svelte";
    import { openmenu } from "../../lib/stores/header_menu.js";
    import Icon from "../../components/Icon.svelte";
    import LogoMobile from "../../components/Logo_Mobile.svelte";
    import BurgerMobile from "../../components/Burger__mobile.svelte";
    import Navigation from "../../components/Navigation.svelte";
    import LogoMobileBlack from "../../components/Logo_MobileBlack.svelte";
    import LinkBlack from "../../components/Link__black.svelte";
    let Background_img = "/images/Header/Background.png";

    function disableScroll() {
        document.body.style.overflow = "hidden";
    }

    function enableScroll() {
        document.body.style.overflow = "auto";
    }

    export let openmenubox;
    const open = () => {
        openmenubox = !openmenubox;
        if (!openmenubox) {
            enableScroll();
        } else {
            disableScroll();
        }
    };

    let innerWidth;
</script>

<svelte:window bind:innerWidth />
<header
    class="header"
    id="header"
    style="--background:url({host}{Background_img})"
>
    <Container class="header-container">
        <section class="header-main">
            <div class="header-cap">
                <LogoMobile />
                {#if innerWidth > 767.98 && innerWidth < 1024.98}
                    <Navigation
                        class="header-navigation"
                        links={[
                            {
                                name: "Проекты",
                                href: "/project",
                            },
                            {
                                name: "О нас",
                                href: "/about_Us",
                            },
                            {
                                name: "Работы",
                                href: "/works",
                            },
                            {
                                name: "Контакты",
                                href: "/contacts",
                            },
                        ]}
                    />
                    <Link clas="header-cap__link" href="tel:+79891412808"
                        >+7 (989) 141-28-08</Link
                    >
                {:else}
                    <Link clas="header-cap__link" href="tel:+79891412808"
                        >+7 (989) 141-28-08</Link
                    >
                {/if}
                <button class="header-cap__menu" on:click={open}>
                    <BurgerMobile />
                </button>
            </div>
            <div class="header-content">
                <div class="header-content__textbox">
                    <Title class="header-content__text-title"
                        >Архитектурно-проектная организация Капитель — надежная
                        архитектура полного цикла</Title
                    >
                </div>
                <Text class="header-content__text">
                    Создаем дома и коттеджи, которые жалко, но легко продавать
                    Все виды типового и индивидуального проектирования под ключ
                </Text>
                <Button class="mobile-btn">ОСТАВИТЬ ЗАЯВКУ</Button>
            </div>
        </section>
    </Container>
    <div class="header-cap__menu-box {openmenubox ? 'is-active' : ''}">
        <div>
            <div class="header-menu-cap">
                <LogoMobileBlack
                    class="header-logo {openmenubox ? 'is-active' : ''}"
                />
                {#if innerWidth > 767.98 && innerWidth < 1024.98}
                    <Navigation
                        class="header-navigation2"
                        links={[
                            {
                                name: "Проекты",
                                href: "/project",
                            },
                            {
                                name: "О нас",
                                href: "/about_Us",
                            },
                            {
                                name: "Работы",
                                href: "/works",
                            },
                            {
                                name: "Контакты",
                                href: "/contacts",
                            },
                        ]}
                    />
                    <LinkBlack
                        clas="header-cap__link-black"
                        href="tel:+79891412808">+7 (989) 141-28-08</LinkBlack
                    >
                {:else}
                    <LinkBlack
                        clas="header-cap__link-black"
                        href="tel:+79891412808">+7 (989) 141-28-08</LinkBlack
                    >
                {/if}
            </div>
            <div class="header-menu-content">
                <NavigationMobile
                    class="header-navigation"
                    links={[
                        {
                            name: "Проекты",
                            href: "/project",
                        },
                        {
                            name: "О нас",
                            href: "/about_Us",
                        },
                        {
                            name: "Работы",
                            href: "/works",
                        },
                        {
                            name: "Контакты",
                            href: "/contacts",
                        },
                    ]}
                />
            </div>
        </div>
        <div class="header-menu-icon">
            <div class="footer-information__icons">
                <Icon name="Instagramm" class="instagramm" />
                <Icon name="Mail" class="mail" />
                <Icon name="Telegramm" class="telegramm" />
            </div>
        </div>
    </div>
</header>

<style lang="scss">
    $breakpoints: (
        md: 768px,
        xl: 1024px,
    );
    $class: ".header";
    #{$class} {
        width: 100%;
        height: 100vh;
        background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.4)
            ),
            var(--background) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        :global(#{$class}-container) {
            height: 100vh;
            width: 100%;
            padding: 20px 20px;
            margin: 0 0;
        }
        :global(#{$class}-navigation) {
            border: none;
        }
        :global(#{$class}-navigation2) {
            border: none;
            :global(.link) {
                color: #000000;
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
            }
        }
        :global(.mobile-btn){
            border: 2px solid #ffffff;
            @include mediaQueryMin(map-get($breakpoints, md)){
                width: 300px;
                height: 50px;
            }
        }
        :global(.footer-information__icons) {
            display: flex;
            gap: 20px;
            align-self: center;
            :global(.icon) {
                fill: rgba(0, 0, 0, 0.5);
                aspect-ratio: 1/1;
                width: 30px;
                &:hover {
                    cursor: pointer;
                    fill: rgb(255, 255, 255);
                }
            }
        }
        :global(#{$class}-menu-icon) {
            // position: absolute;
            // bottom: 0;
            align-self: center;
        }
        :global(#{$class}-main) {
            position: relative;
            height: 100%;
        }

        :global(#{$class}-cap) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        :global(#{$class}-content) {
            height: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        :global(#{$class}-cap__link) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #ffffff;
        }
        :global(#{$class}-logo) {
            padding: 0px 20px 0px 0px;
        }
        :global(#{$class}-cap__menu) {
            background: none;
            height: auto;
            position: relative;
            z-index: 10000;
        }
        :global(#{$class}-cap__menu-box) {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            padding: 20px;
            z-index: 1000;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgb(255, 255, 255);
            opacity: 0;
            visibility: hidden;
            transition: all 0.5s ease;
        }
        :global(#{$class}-menu-cap) {
            display: flex;
            align-items: center;
            padding-right: 80px;
            justify-content: space-between;
        }
        :global(#{$class}-menu-content) {
        }
        :global(#{$class}-cap__menu-box.is-active) {
            opacity: 1;
            visibility: visible;
        }
        :global(#{$class}-content__text-title) {
            font-family: "Montserrat";
            font-size: 24px;
            font-weight: 600;
            line-height: 29px;
            color: #ffffff;
            @include mediaQueryMin(map-get($breakpoints, md)){
                font-size: 40px;
                font-weight: 300;
                line-height: 40px;
            }
        }
        :global(#{$class}-content__text) {
            text-align: left;
            padding-right: 20px;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #ffffff;
            padding-top: 60px;
            @include mediaQueryMin(map-get($breakpoints, md)){
                display: none;
            }
        }
    }
</style>
