<script>
</script>

<div class="button {$$props.class}" id="button-6">
  <div id="spin" />
  <a href="#"> <slot /></a>
</div>

<style lang="scss">
  $breakpoints-4k: 3839.98px;
  .button {
    display: inline-flex;
    height: 50px;
    width: 250px;
    margin-top: 50px;
    border: 2px solid #000000;
    color: #000000;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.8em;
    @include mediaQueryMin($breakpoints-4k) {
      height: 90px;
      width: 350px;
    }
    letter-spacing: 1.5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  a {
    color: #000000;
    letter-spacing: 1px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;
    text-transform: uppercase;
    color: #000000;
    text-decoration: none;
    @include mediaQueryMin($breakpoints-4k) {
      font-size: 24px;
    }
  }
  #button-6 {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  #button-6 a {
    position: relative;
    transition: all 0.45s ease-Out;
  }

  #spin {
    width: 0;
    height: 0;
    opacity: 0;
    left: 70px;
    top: 20px;
    transform: rotate(0deg);
    background: none;
    position: absolute;
    transition: all 0.5s ease-Out;
  }

  #button-6:hover #spin {
    width: 160%;
    height: 600%;
    opacity: 1;
    left: -70px;
    top: -70px;
    background: #000000;
    transform: rotate(80deg);
  }

  #button-6:hover a {
    color: #ffffff;
    letter-spacing: 2px;
  }
</style>
