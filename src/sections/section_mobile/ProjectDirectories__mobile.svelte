<script>
    import Container from "../../components/Container.svelte";
    import Title from "../../components/Title.svelte";
    import Text from "../../components/Text.svelte";
    import SlaiderImgMobileJilue from "../../components/SlaiderIMG_mobileJILUE.svelte";
    import SlaiderImgMobileKomercial from "../../components/SlaiderIMG_mobileKOMERCIAL.svelte";

    export let acivebtn1;
    export let acivebtn2;
    export let flag;
    const active_btn1 = () => {
        acivebtn1=!acivebtn1;
        acivebtn2=false
    };
    const active_btn2 = () => {
        acivebtn2=!acivebtn2;
        acivebtn1=false
    };
</script>

<section class="projectdirectories" id="projectdirectories">
    <Container class="projectdirectories-container">
        <Container class="projectdirectories-container__text">
            <Title class="title">Каталог реализованных проектов</Title>
            <Text class="text"
                >Ежегодно компания «Капитель» реализует от 50 крупных объектов
                под ключ. Мы делаем индивидуальное проектирование за 30-45 дней,
                включая этапы согласования.
            </Text>
        </Container>
    </Container>
    <Container class="projectdirectories-container__content">
        <div class="projectdirectories-container__content-button">
            <button
                class="btn1 {!acivebtn1? '' : 'active-btn1'}"
                on:click={active_btn1}>Жилые</button
            >
            <button class="btn2 {!acivebtn2 ? '' : 'active-btn2'}" on:click={active_btn2}
                >Коммерческие</button
            >
        </div>
        <SlaiderImgMobileJilue class="slaidaer1  {!acivebtn1? '' : 'activeslaider1'}"/>
        <SlaiderImgMobileKomercial class="slaidaer2  {!acivebtn2? '' : 'activeslaider2'}"/>
    </Container>
</section>

<style lang="scss">
    $class: ".projectdirectories";
    #{$class} {
        position: relative;
        background: #F5F5F5;
        :global(#{$class}-container) {
            width: 100%;
            padding: 50px 20px 50px 20px;
            position: relative;
            z-index: 1;
            background: #000000;
        }
        :global(.slaidaer1){
            position: relative;
            opacity: 0;
            visibility: hidden;
            height: 0;
            // transition: all .3s ease;
        }
        :global(.slaidaer1.activeslaider1){
            opacity: 1;
            visibility: visible;
            height: 100%;
        }
        :global(.slaidaer2){
            position: relative;
            // transition: all .3s ease;
            opacity: 0;
            visibility: hidden;
            height: 0;
        }
        :global(.slaidaer2.activeslaider2){
            opacity: 1;
            visibility: visible;
            height: 100%;
        }
        :global(#{$class}-container__text) {
            display: flex;
            flex-direction: column;
            gap: 50px;
            position: relative;
            :global(.title) {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 600;
                width: 90%;
                color: #fff;
                align-self: center;
                font-size: 18px;
                line-height: 22px;
                text-transform: uppercase;
            }
            :global(.title::after) {
                content: "";
                top: -20px;
                left: -10px;
                position: absolute;
                width: 19px;
                border-bottom: 0.5px solid #ffffff;
                transform: rotate(45deg);
            }
            :global(.text) {
                color: #fff;
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                padding-left: 20px;
                font-size: 14px;
                line-height: 16px;
            }
        }
        :global(#{$class}-container__text::after) {
            content: "";
            top: -20px;
            left: -10px;
            position: absolute;
            width: 79px;
            border-bottom: 0.5px solid #ffffff;
            transform: rotate(180deg);
        }
        :global(#{$class}-container__text::before) {
            content: "";
            top: 45px;
            left: -85px;
            position: absolute;
            width: 169px;
            border-bottom: 0.5px solid #ffffff;
            transform: rotate(90deg);
        }
        :global(#{$class}-container__content) {
            width: 100%;
            position: relative;
            z-index: 1;
            background: #000000;
            transition: all .50s ease;
        }
        :global(#{$class}-container__content-button) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 20px 0px 20px;
        }
        :global(.btn1) {
            position: relative;
            padding: 0px;
            height: 40px;
            width: 150px;
            opacity: 0.5;
            overflow: hidden;
            position: relative;
            align-self: center;
            top: 17%;
            transform: translateY(-50%);
            background: none;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-transform: uppercase;
            border: 1px solid #ffffff;
            color: #ffffff;
            cursor: crosshair;
            transition: all 0.5s ease;
        }
        :global(.btn2) {
            position: relative;
            padding: 0px;
            height: 40px;
            width: 150px;
            opacity: 0.5;
            overflow: hidden;
            position: relative;
            align-self: center;
            top: 17%;
            transform: translateY(-50%);
            background: none;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-transform: uppercase;
            border: 1px solid #ffffff;
            color: #ffffff;
            cursor: crosshair;
            transition: all 0.5s ease;
        }
        :global(.active-btn1) {
            opacity: 1;
        }
        :global(.active-btn2) {
            opacity: 1;
        }
    }
</style>
