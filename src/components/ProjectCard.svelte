<script>
    export let card = [];
</script>

<div class="glide__slide">
    {#each card as { name, arctikul, text,src}, index (index)}
        <img alt="проект" {src} class="slide-img {$$props.class}" />
        <div class="card">
            <div class="card-title__1 {$$props.class}"><h1>{name}</h1></div>
            <div class="card-title__3 {$$props.class}"><h3>{arctikul}</h3></div>
            <div class="card-text {$$props.class}">
                <p>{text}</p>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    $breakpoints-4k: 3839.98px;
    $breakpoints-2k: 2559.98px;
    .glide__slide {
        position: relative;
        width: 355px;
        margin-top: 20px;
        @include mediaQueryMin($breakpoints-4k) {
            width: 420px;
        }
    }
    .card {
        width: 340px;
        height: 0%;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)
        );
        position: absolute;
        bottom: 0;
        opacity: 0;
        transition: all 0.5s ease;
        text-align: left;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: end;
        visibility: hidden;
        padding: 15px 15px 15px 15px;
        @include mediaQueryMin($breakpoints-4k) {
            width: 380px;
        }
    }
    .glide__slide:hover .card {
        opacity: 1;
        height: 100%;
        visibility: visible;
        .card-title__1 {
            opacity: 1;
        }
        .card-title__3 {
            opacity: 1;
        }
        .card-text {
            opacity: 1;
        }
    }
    .slide-img {
        width: 340px;
        @include mediaQueryMin($breakpoints-4k) {
            width: 380px;
        }
    }
    .card-title__1 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #ffffff;
        position: relative;
        transition: all 0.5s ease;
        opacity: 0;
        margin-bottom: 15px;
        @include mediaQueryMin($breakpoints-4k) {
            font-size: 26px;
        }
        @include mediaQueryMin($breakpoints-2k){
            font-size: 28px;
        }
    }
    .card-title__3 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        color: #ffffff;
        transition: all 0.5s ease;
        opacity: 0;
        margin-bottom: 15px;
        @include mediaQueryMin($breakpoints-4k) {
            font-size: 20px;
        }
        @include mediaQueryMin($breakpoints-2k){
            font-size: 22px;
        }
    }
    .card-text {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        color: #ffffff;
        transition: all 0.5s ease;
        opacity: 0;
        @include mediaQueryMin($breakpoints-4k) {
            font-size: 20px;
            line-height: 25px;
        }
        @include mediaQueryMin($breakpoints-2k){
            font-size: 18px;
            line-height: 25px;
            font-weight: 600;
        }
    }
</style>
