<script>
    import Button from "$component/Button.svelte";
    import Title from "./Title.svelte";
    import { onMount } from "svelte";

    export let openmenu;
    const open=()=>{
        openmenu=!openmenu;
    }
</script>

<div class="hamburger {openmenu ? '' : 'is-active'}" >
    <button class="hamburger-btn" on:click={open} ></button>
    <div class="hamburger__container">
        <div class="hamburger__inner" />
        <div class="hamburger__hidden" />
    </div>
    <Title class="header-hamburger-title">МЕНЮ</Title>
</div>

<style lang="scss">
    $h-padding:35px;
    $h-width: 20px;
    $h-height: 54px;
    $h-background-color: transparent;
    $h-line-color: #fff;
    $h-hover-line-color: rgb(255, 255, 255);
    $h-line-height: 3px;
    $h-border-radius: 5px;
    $h-transition-time: 0.4s;
    $h-transition-function: ease;
    $h-transition-opacity: 0;
    $h-vertical-gap: 8px;
    $h-initial-opposition: 5px;
    $h-hide-distance: $h-width + $h-padding;
    $breakpoints-4k:3840px;

    @mixin line-props {
        width: 100%;
        height: $h-line-height;
        background-color: $h-line-color;
        border-radius: $h-border-radius;
        position: absolute;
        transition-property: transform, opacity;
        transition-timing-function: ease;
        transition-duration: $h-transition-time;
        @include mediaQueryMin($breakpoints-4k){
            height: 4px;
        }
    }
    .hamburger-btn{
        position: absolute;
        z-index: 1000;
        background:none;
        width: 30px;
        height: 100%;
        cursor: pointer;
    }
    .hamburger {
        padding: $h-padding;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        display: flex;
        text-align: center;
        align-items:center;
        writing-mode:vertical-rl;
        background-color: $h-background-color;
        &__container {
            width: $h-width;
            height: $h-height;
            position: relative;
            transform: rotate(-90deg);
            @include mediaQueryMin($breakpoints-4k){
                height: 40px;
                width: 40px;
            }
        }
        @include mediaQueryMin($breakpoints-4k){
            padding-left:100px;
        }

        &:hover &__inner {
            transform: translate(-#{$h-hide-distance}, 50%);
            opacity: $h-transition-opacity;
        }

        &:hover &__inner::before,
        &:hover &__inner::after {
            transform: translate(#{$h-hide-distance * 2}, 0);
            opacity: $h-transition-opacity;
        }

        &.is-active &__inner {
            display: none;
        }

        &__inner {
            @include line-props();
            top: 50%;
            transform: translate($h-initial-opposition, -50%);
            opacity: 1;

            &::before,
            &::after {
                @include line-props();

                content: "";
                opacity: 1;
                transform: translate(-#{$h-initial-opposition}, 0);
            }

            &::before {
                top: -#{$h-vertical-gap};
                @include mediaQueryMin($breakpoints-4k){
                    top: -15px;
                }
            }

            &::after {
                top: $h-vertical-gap;
                @include mediaQueryMin($breakpoints-4k){
                    top: 15px;
                }
            }
        }

        &:hover &__hidden {
            opacity: 1;
            transform: translate(0, -50%);
        }

        &:hover &__hidden::before,
        &:hover &__hidden::after {
            opacity: 1;
            transform: translate(0, 0);
        }

        &.is-active &__hidden {
            opacity: 1;
            transform: rotate(45deg);
        }

        &.is-active &__hidden::before {
            transform: translate(0, #{$h-vertical-gap}) rotate(90deg);
            transform-origin: center;
            @include mediaQueryMin($breakpoints-4k){
                    transform: translate(0, 15px) rotate(90deg);
                }
        }

        &.is-active &__hidden::after {
            transform-origin: center;
            transform: translate(0, -#{$h-vertical-gap}) rotate(0);
            @include mediaQueryMin($breakpoints-4k){
                    transform: translate(0, -15px) rotate(0);
                }
        }

        &__hidden {
            opacity: 0;
            @include line-props();

            background-color: $h-hover-line-color;
            top: 50%;
            transform: translate(#{$h-hide-distance}, -50%);

            &::before,
            &::after {
                @include line-props();
                background-color: $h-hover-line-color;

                content: "";
                transform: translate(#{$h-hide-distance * 2}, 0);
            }

            &::before {
                top: -#{$h-vertical-gap};
                @include mediaQueryMin($breakpoints-4k){
                    top: -15px;
                }
            }

            &::after {
                top: $h-vertical-gap;
                @include mediaQueryMin($breakpoints-4k){
                    top: 15px;
                }
            }
        }
    }
</style>
