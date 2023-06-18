<div class="logo {$$props.class ? $$props.class : ''}">
    <img
        src='{host}/images/Header/Logo_Mobile20.svg'
        alt={$$props.alt}
        usemap="#home"
    >
</div>

<style lang="scss">
  $breakpoints-4k:3840px;
.logo {
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 20px 0px;
  @include mediaQueryMin($breakpoints-4k){
    height: 200px;
    padding-left: 100px;
  }
  img {
    width: 50px;
    height: 100%;
    object-fit: contain;
  }
}
</style>