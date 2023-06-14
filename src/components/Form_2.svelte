<script>
    import Button_5 from "./Button_5.svelte";
</script>

<div class="form">
    <div class="input-container ic1 polos">
        <input id="firstname" class="input" type="text" placeholder=" " />
        <label for="firstname" class="placeholder">Имя</label>
    </div>
    <div class="input-container ic2 polos">
        <input id="lastname" class="input" type="text" placeholder=" " />
        <label for="lastname" class="placeholder">Телефон</label>
    </div>
    <div class="input-container ic2 polos">
        <input id="email" class="input" type="text" placeholder=" " />
        <label for="email" class="placeholder">Кампания</label>
    </div>
    <Button_5>Оставить заявку</Button_5>
</div>

<style lang="scss">
    $breakpoints-4k: 3839.98px;
    .form {
        background: none;
        border-radius: 20px;
        min-height: 350px;
        min-width: 330px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        @include mediaQueryMin($breakpoints-4k) {
            min-height: 450px;
        }
    }

    .input-container {
        height: 50px;
        position: relative;
        width: 100%;
    }

    .ic1 {
        margin-top: 40px;
    }

    .ic2 {
        margin-top: 30px;
    }

    .input {
        background: none;
        border: 0;
        color: #000000;
        font-size: 18px;
        height: 100%;
        outline: 0;
        padding: 4px 20px 0;
        width: 100%;
        border-bottom: 1px solid #000000;
        position: relative;
    }
    .polos::after {
        content: "";
        bottom: 0;
        right: -9px;
        position: absolute;
        width: 15px;
        border-bottom: 0.5px solid #000000;
        transform: rotate(-45deg);
    }
    .polos::before {
        content: "";
        bottom: 0;
        left: -7px;
        position: absolute;
        width: 15px;
        border-bottom: 0.5px solid #000000;
        transform: rotate(-45deg);
    }

    .cut {
        display: none;
        border-radius: 10px;
        height: 20px;
        left: 20px;
        position: absolute;
        top: -20px;
        transform: translateY(0);
        transition: transform 200ms;
        width: 76px;
    }

    .cut-short {
        width: 50px;
    }

    .input:focus ~ .cut,
    .input:not(:placeholder-shown) ~ .cut {
        transform: translateY(8px);
    }

    .placeholder {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        @include mediaQueryMin($breakpoints-4k) {
            font-size: 26px;
        }
        line-height: 34px;
        text-transform: uppercase;
        color: #b3b3b3;
        left: 20px;
        pointer-events: none;
        position: absolute;
        transform-origin: 0 50%;
        transition: transform 200ms, color 200ms;
        top: 20px;
    }

    .input:focus ~ .placeholder,
    .input:not(:placeholder-shown) ~ .placeholder {
        transform: translateY(-30px) translateX(10px) scale(0.75);
    }

    .input:not(:placeholder-shown) ~ .placeholder {
        color: #000000;
    }

    .input:focus ~ .placeholder {
        color: #000000;
    }
    a,
    a:link,
    a:hover,
    a:visited {
        color: #000000;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
