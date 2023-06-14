<script>
</script>

<button class="button">
    <a class="btnfos btnfos-1">
        <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        консультация
    </a>
</button>

<style lang="scss">
  $breakpoints-4k: 3840px;
  $breakpoints-2k:2559.98px;
    $class: ".button";
    #{$class} {
        color: #fff;
        transition: all 0.5s;
        position: relative;
        background:none;
        line-height: 50px;
        height: 50px;
        text-align: center;
        width: 250px;
        align-self: center;
        margin-top: 6%;
        cursor: pointer;
        position: relative;
        z-index: 1000;
    }
    .btnfos {
        color: #fff;
        cursor: pointer;
        font-family: "Montserrat";
        display: block;
        font-size: 16px;
        font-weight: 400;
        line-height: 45px;
        width: 250px;
        max-width: 250px;
        height: 50px;
        margin: 0 auto 2em;
        position: relative;
        text-transform: uppercase;
        vertical-align: middle;
        width: 100%;
        @include mediaQueryMin($breakpoints-4k){
          font-size: 20px;
        }
        @include mediaQueryMin($breakpoints-2k){
          font-size: 20px;
          width: 350px;
          height: 100px;
        }
    }
    btnfos-1 {
        background: #3498db;
        font-weight: 100;
    }
    .btnfos-1 svg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 45px;
    }
    .btnfos-1 rect {
        fill: none;
        stroke: #fff;
        stroke-width: 1;
        stroke-dasharray: 422, 0;
    }

    .btnfos-1:hover {
        background: rgba(225, 51, 45, 0);
        letter-spacing: 1px;
    }
    .btnfos-1:hover rect {
        stroke-width: 5;
        stroke-dasharray: 15, 310;
        stroke-dashoffset: 48;
        -webkit-transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
        transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    }
    * {
        -moz-box-sizing: inherit;
        box-sizing: inherit;
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.6s;
        transition-duration: 0.6s;
        -webkit-transition-timing-function: ease;
        transition-timing-function: ease;
    }
</style>
