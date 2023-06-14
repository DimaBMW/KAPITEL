<div class="logo {$$props.class ? $$props.class : ''}">
    <img
        src='{host}/images/Header/Logo2.0.svg'
        alt={$$props.alt}
        usemap="#home"
    >
</div>

<style lang="scss">
  $breakpoints-4k:3840px;
.logo {
  width: 100%;
  height: 100px;
  position: relative;
  border-bottom: 0.5px solid #ffffff95;
  margin-right: 20px;
  @include mediaQueryMin($breakpoints-4k){
    height: 200px;
    padding-left: 100px;
  }
  img {
    width: 50%;
    height: 100%;
    object-fit: contain;
    margin-left: 35px;
  }
}
.logo::before {
  content: "";
  bottom: -1px;
  left: -9px;
  position: absolute;
  width: 15px;
  border: 1px solid #ffffff;
  transform: rotate(-45deg);
}
.logo::after {
  content: "";
  bottom: -1px;
  left: -40px;
  position: absolute;
  width: 40px;
  border-bottom: 0.5px solid #ffffff95;
  transform: rotate(-180deg);
  @include mediaQueryMin($breakpoints-4k){
    width: 100px;
    left: -100px;
  }
}
</style>