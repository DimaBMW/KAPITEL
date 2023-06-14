<script>
</script>

<div class="data-container">
    <span class="btn"><slot /></span>
</div>

<style lang="scss">
    $breakpoints-4k:3840px;
    .btn {
        cursor: pointer;
        position: relative;
        padding: 10px 20px;
        background: rgb(255, 255, 255);
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        transition: all 1s;
        color:#000000;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 17px;
        text-transform: uppercase;
        color: #000000;
         @include mediaQueryMin($breakpoints-4k){
            font-size: 28px;
                padding: 20px 40px;
         }

        &:after,
        &:before {
            content: " ";
            width: 10px;
            height: 10px;
            position: absolute;
            border: 0px solid #000000;
            transition: all 1s;
        }
        &:after {
            top: 2px;
            left: 2px;
            border-top: 2px solid rgb(0, 0, 0);
            border-left: 2px solid rgb(0, 0, 0);
        }
        &:before {
            bottom: 2px;
            right: 2px;
            border-bottom: 2px solid rgb(0, 0, 0);
            border-right: 2px solid rgb(0, 0, 0);
        }
        &:hover {
            border-top-right-radius: 0px;
            border-bottom-left-radius: 0px;
            // background:rgba(0,0,0,.5);
            // color:white;
            &:before,
            &:after {
                width: 100%;
                height: 100%;
                // border-color:white;
            }
        }
    }
</style>
