<script>
	import Footer from './Footer.svelte';
  import Container from "../components/Container.svelte";
  import Logo from "../components/Logo.svelte";
  import Navigation from "../components/Navigation.svelte";
  import Button from "../components/Button.svelte";
  import Link from "../components/Link.svelte";
  import Title from "../components/Title.svelte";
  import Text from "../components/Text.svelte";
  import Burger from "../components/Burger.svelte";
  import { openmenu } from "../lib/stores/header_menu.js";
  import Icon from "../components/Icon.svelte";
  // variables
  let Background_img = "/images/Header/Background.png";
  let innerWidth;
  //Адаптив мобилка
  import { onMount } from 'svelte';
    import LogoMobile from '../components/Logo_Mobile.svelte';

    let isMobile = false;

    onMount(() => {
        isMobile = window.innerWidth <= 375.98;
    });

</script>

<svelte:window bind:innerWidth />

<header
  id="header"
  class="header"
  style="--background:url({host}{Background_img})"
>
  <Container class="header-container">
    <section class="header-main">
      <div class="header-cols__1">
        <Logo class="header-logo" />
        <div class="header-hamburger">
          <Burger {openmenu} />
        </div>
      </div>
      <div class="header-cols__2">
        <div class="header-cols__2-nav">
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
          <div class="header-button">
            <Button>ОСТАВИТЬ ЗАЯВКУ</Button>
            <Link clas="sait-bar-link" href="tel:+79891412808"
              >+7 (989) 141-28-08</Link
            >
          </div>
        </div>
        <div class="header-text">
          {#if innerWidth > 3839.98}
            <div class="header-text-t">
              <Title class="header-text__title-4k"
                >Архитектурно-проектная организация</Title
              >
              <Title class="header-text__title-2-4k"
                >КАПИТЕЛЬ — НАДЕЖНАЯ АРХИТЕКТУРА ПОЛНОГО ЦИКЛА</Title
              >
            </div>
            <Text class="header-text__text-4k">
              Создаем дома и коттеджи, которые жалко, но легко продавать Все
              виды типового и индивидуального проектирования под ключ
            </Text>
          {:else}
            <div class="header-text-t">
              <Title class="header-text__title"
                >Архитектурно-проектная организация</Title
              >
              <Title class="header-text__title-2"
                >КАПИТЕЛЬ — НАДЕЖНАЯ АРХИТЕКТУРА ПОЛНОГО ЦИКЛА</Title
              >
            </div>
            <Text class="header-text__text">
              Создаем дома и коттеджи, которые жалко, но легко продавать Все
              виды типового и индивидуального проектирования под ключ
            </Text>
          {/if}
        </div>
      </div>
    </section>
    <aside class="sait-bar">
      <div class="sait-bar-datas">
        <div class="footer-information__icons">
          <Icon name="Instagramm"class="instagramm"/>
          <Icon name="Mail" class="mail"/>
          <Icon name="Telegramm" class="telegramm"/>
        </div>
      </div>
    </aside>
  </Container>
</header>

<style lang="scss">
  $breakpoints-2k: 2559.98px;
  $class: ".header";
  #{$class} {
    width: 100%;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      var(--background) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    :global(#{$class}-container) {
      height: 100vh;
      width: 100%;
      padding: 0px 40px;
      margin: 0 0;
      display: flex;
    }
    :global(#{$class}-container.mobile){
      display: none;
      visibility: hidden;
    }
    :global(.footer-information__icons){
            display: flex;
            gap: 20px;
            :global(.icon){
                fill: rgba(255, 255, 255, 0.5);
                aspect-ratio: 1/1;
                width: 30px;
                &:hover{
                    cursor: pointer;
                    fill:rgb(255, 255, 255);
                }
            }
        }
    :global(#{$class}-hamburger) {
      text-align: left;
      writing-mode: vertical-rl;
      align-items: center;
      display: flex;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    :global(#{$class}-hamburger-title) {
      transform: rotate(-180deg);
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 20px;
      color: #ffffff;
    }
    :global(#{$class}-main) {
      flex: 0 1 80%;
      display: flex;
      border-left: 0.5px solid #ffffff95;
      border-right: 0.5px solid #ffffff95;
    }
    :global(#{$class}-cols__1) {
      flex: 0 1 25%;
      border-right: 0.5px solid #ffffff95;
    }
    :global(#{$class}-cols__2) {
      flex: 0 1 75%;
    }
    :global(#{$class}-cols__2-nav) {
      display: flex;
    }
    :global(#{$class}-text) {
      padding: 40% 0px 0px 35px;
      @include mediaQueryMin($breakpoints-2k) {
        padding: 40% 0px 0px 35px;
      }
    }
    :global(#{$class}-text-t) {
      width: 70%;
      @include mediaQueryMin($breakpoints-2k) {
        width: 80%;
      }
    }
    :global(#{$class}-text__title) {
      font-family: "Montserrat";
      text-transform: uppercase;
      font-size: 30px;
      font-weight: 300;
      line-height: 30px;
      color: #ffffff;
      @include mediaQueryMin($breakpoints-2k) {
        font-size: 48px;
        line-height: 59px;
      }
    }
    :global(#{$class}-text__title-2) {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 30px;
      color: #ffffff;
      @include mediaQueryMin($breakpoints-2k) {
        font-size: 48px;
        line-height: 59px;
      }
    }
    :global(#{$class}-text__title-4k) {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 64px;
      line-height: 78px;
      color: #ffffff;
      text-transform: uppercase;
    }
    :global(#{$class}-text__title-2-4k) {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 78px;
      color: #ffffff;
    }
    :global(#{$class}-text__text) {
      width: 40%;
      text-align: left;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
      color: #ffffff;
      padding-top: 60px;
      @include mediaQueryMin($breakpoints-2k){
        font-size: 20px;
        line-height: 25px;
      }
    }
    :global(#{$class}-text__text-4k) {
      width: 50%;
      text-align: left;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 45px;
      color: #ffffff;
      padding-top: 60px;
    }
    :global(#{$class}-logo__title) {
      color: white;
    }
    :global(#{$class}-navigation) {
      position: relative;
      flex: 0 1 60%;
    }
    :global(#{$class}-navigation::before) {
      content: "";
      bottom: -1px;
      left: -9px;
      position: absolute;
      width: 15px;
      border: 1px solid #ffffff;
      transform: rotate(-45deg);
    }
    :global(#{$class}-button) {
      flex: 0 1 40%;
      text-align: center;
      display: flex;
      gap: 50px;
      align-items: center;
      justify-content: center;
      border-bottom: 0.5px solid #ffffff95;
      position: relative;
    }
    :global(#{$class}-button::after) {
      content: "";
      bottom: -1px;
      right: -9px;
      position: absolute;
      width: 15px;
      border: 1px solid #ffffff;
      transform: rotate(-45deg);
    }
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||Mobile||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    :global(#{$class}-container__mobile){
      display: none;
      visibility: hidden;
    }
    :global(#{$class}-container__mobile.mobile){
      display: block;
      visibility: hidden;
      height: 100vh;
      width: 100%;
      z-index: 10000;
      padding: 0px 20px;
      position: relative;
      margin: 0 0;
    }
  }
  $class_2: ".sait-bar";
  #{$class_2} {
    flex: 20%;
    :global(#{$class_2}-datas) {
      width: 100%;
      height: 100px;
      display: flex;
      border-bottom: 0.5px solid #ffffff95;
      text-align: center;
      align-items: center;
      justify-content: end;
      position: relative;
    }
    :global(#{$class_2}-datas::after) {
      content: "";
      bottom: -0.5px;
      right: -40px;
      position: absolute;
      width: 40px;
      border-bottom: 0.5px solid #ffffff95;
      transform: rotate(-180deg);
    }
  }
</style>
