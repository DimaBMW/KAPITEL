<script>
  import { onMount } from "svelte";
  import Glide from "@glidejs/glide";
  onMount(() => {
    new Glide(".glide2",config2).mount();
  });


  const config2={
    type:'carousel',
    perView:7,
    autoplay:50,
    gap:150,
    focusAt: "center",
    animationDuration: 1500,
    hoverpause: true,
    bound: true,
    animationTimingFunc: 'linear',
  };
</script>

<div class="glide2">
  <div data-glide-el="track" class="glide__track">
    <ul class="glide__slides">
      <li class="glide__slide2">
        <img alt="" src="/images/Slider/IMG_1.png">
      </li>
      <li class="glide__slide2">
        <img alt="" src="/images/Slider/IMG_1.png" />
      </li>
      <li class="glide__slide2">
        <img alt="" src="/images/Slider/IMG_1.png" />
      </li>
            <li class="glide__slide2">
        <img alt="" src="/images/Slider/IMG_1.png" />
      </li>
            <li class="glide__slide2">
        <img alt="" src="/images/Slider/IMG_1.png" />
      </li>
            <li class="glide__slide2">
        <img alt="" src="/images/Slider/IMG_1.png" />
      </li>
            <li class="glide__slide2">
        <img alt="" src="/images/Slider/IMG_1.png" />
      </li>
            <li class="glide__slide2">
        <img alt="" src="/images/Slider/IMG_1.png" />
      </li>
    </ul>
  </div>
</div>

<style lang="scss">
    .glide__slide{

    }
</style>