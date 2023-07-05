<script>
    import Link from '$component/Link.svelte';
    import Icon from './Icon.svelte';
    import Subnav from './Subnav.svelte';

    export let links = [];

</script>

<nav class="nav {$$props.class}">
    <ul class="nav-list {$$props.class}-list">
        {#each links as { name, href, subnav }, index (index)}
            <li class="nav-list-item {$$props.class}-list-item {subnav ? 'hasSubnav' : ''}">
                <Link class="{$$props.class}_link" {href}>
                    {name}
                </Link>
                {#if subnav}
                    <Icon name="border-rad" />
                    <Icon name="border-rad" />
                    <Subnav path={subnav} />
                {/if}
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    $breakpoints-4k:3840px;
    $breakpoints-2k:2559.98px;
    $class: '.nav';
    #{$class} {
      height: 100px;
      border-bottom: 0.5px solid #ffffff95;
      text-align: left;
      align-items: center;
        @include mediaQueryMin($breakpoints-4k){
            height: 200px;
            display: flex;
            justify-content: start;
        }
        &-list {
            height: 20px;
            display: flex;
            flex-direction: column;
            margin-left: 15px;
            align-self: left;
            justify-content: left;
            text-align: left;
            position: relative;
            margin-left: 35px;
            top: 50%;
            transform: translateY(-50%);
            gap: 40px;
            &-item {
               position: relative;
               display: flex;
               align-items: center;
               height: 100%;
               z-index: 1;
               :global(.link){
                  color:#000000;
                  font-family: 'Montserrat';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 17px;
                   @include mediaQueryMin($breakpoints-4k){
                        font-size:28px;
                        padding-left: 10px;
                   }
                   @include mediaQueryMin($breakpoints-2k){
                        font-size: 18px;
                        line-height: 17px;
                   }
               }
                :global(.icon) {
                    position: absolute;
                    bottom: -3px;
                    width: 12px; height: 12px;
                    opacity: 0;
                    transform: translateY($subnav_distance);
                    transition: all .50s linear;
                    &:nth-child(2) {
                        right: calc(100% + 12px);
                        transform: translateY($subnav_distance) scale(-1, 1);
                    }
                    &:nth-child(3) {
                        left: calc(100% + 12px);
                    }
                }
                :global(.link) {
                    height: 100%;
                    display: flex;
                    align-items: center;
                }

                &.hasSubnav::before {
                    content: '';
                    position: absolute;
                    top: -2px; left: -12px;
                    width: calc(100% + 24px);
                    height: calc(100% + 5px);
                    border-radius: 6px 6px 0 0;
                    background-color: transparent;
                    transform: translateY($subnav_distance);
                    transition: all .50s linear;
                    z-index: -1;
                }
                &:hover {
                    &::before {
                        transform: translateY(0);
                        background-color: #000000;
                    }
                    :global(.icon) {
                        opacity: 1;
                        transform: translateY(0);
                        &:nth-child(2) {
                            transform: translateY(0) scale(-1, 1);
                        }
                    }
                    :global(.link) {
                        color: #000000;
                    }
                    :global(.link::after) {
                        background-color: #000000;
                        width: 100%;
                    }
                    :global(.subnav) {
                        opacity: 1;
                        transform: translateX(50%) translateY(0);
                        pointer-events: all;
                    }
                }
            }
        }
    }
</style>