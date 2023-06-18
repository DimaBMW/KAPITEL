<script>
    import Button from "$component/Button.svelte";
    import Title from "./Title.svelte";
    import { onMount } from "svelte";

    export let openmenu;
    const open = () => {
        openmenu = !openmenu;
    };
</script>

<div id="nav-icon1" class="{openmenu ? 'open' : ''}">
    <span></span>
    <span></span>
    <span></span>
    <button class="hamburger-btn" on:click={open} />
</div>

<style lang="scss">
    /* Icon 1 */

#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4 {
  width: 60px;
  height: 30px;
  position: relative;
  // margin-left: 20px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}
.hamburger-btn{
        position: absolute;
        z-index: 1000;
        background:none;
        width: 80px;
        left: -20px;
        height: 100%;
        cursor: pointer;
}
#nav-icon1 span, #nav-icon3 span, #nav-icon4 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 50%;
  background: #ffffff;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  top: 0px;
}

#nav-icon1 span:nth-child(2) {
  top: 9px;
  width: 20px;
}

#nav-icon1 span:nth-child(3) {
  top: 18px;
}

#nav-icon1.open span:nth-child(1) {
  top: 8px;
  -webkit-transform: rotate(135deg);
  background: #000000;
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#nav-icon1.open span:nth-child(3) {
  top: 8px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  background: #000000;
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>
