<script>
    import Container from "../components/Container.svelte";
    import Title from "../components/Title.svelte";
    import Text from "../components/Text.svelte";
    import Image from "../components/Image.svelte";
    import Icon from "../components/Icon.svelte";
    import { onMount } from "svelte";
    import scrollama from "scrollama";

    let innerWidth;

    let scroller;

    onMount(() => {
        scroller = scrollama();

        scroller
            .setup({
                step: ".step",
                offset: 0.5,
            })
            .onStepEnter(handleStepEnter);
        
            function handleStepEnter(response) {
                const { index } = response;
                
            
            }
    });
</script>

<svelte:window bind:innerWidth />
<section class="whywe" id="whywe" style="background-color: #f5f5f5;">
    <Container class="whywe-container">
        <main class="whywe-main">
            <Container class="whywe-content__1">
                {#if innerWidth > 3839.98}
                    <div class="content__1-text-4k">
                        <Title class="content__1-title-4k"
                            >Нет того, что нам не под силу — разработаем проекты
                            любой сложности</Title
                        >
                        <div class="content__1-text-1">
                            <Text class="text-1__1-4k"
                                >Архитектурная студия «Капитель» занимается
                                проектированием капитальных строений и частных
                                домов в Краснодаре с 2017 года. За это время мы
                                отдали под реализацию более 300 проектов. В
                                работе демонстрируем высокую
                                клиентоориентированность, поэтому 9 из 10
                                заказов получаем по рекомендации.
                            </Text>
                            <Text class="text-1__2-4k"
                                >Доверяя свои проекты студии «Капитель», вы
                                можете быть спокойны за качество, бюджет и сроки
                                исполнения. У нас работают специалисты со стажем
                                более 15 лет. Мы тщательно согласовываем каждый
                                этап с заказчиком и все рутинные процессы берем
                                на себя.</Text
                            >
                        </div>
                    </div>
                    <div class="whywe-black-contnet-4k">
                        <div class="black-contnet__cols1-4k bccb">
                            <div class="blackitem-4k blackileft">
                                <div class="blackitem-icon-4k">
                                    <Image
                                        src="/images/Whywe/Proecting.svg"
                                        class="blackitem-icon-4k"
                                    />
                                </div>
                                <div class="blackitem-contnet">
                                    <Title class="blackitem-title-4k"
                                        >Проектирование домов и коттеджей</Title
                                    >
                                    <Text class="blackitem-text-4k"
                                        >В наших проектах продумано все до
                                        мелочей — ни одна потребность клиента не
                                        остается незамеченной.</Text
                                    >
                                </div>
                            </div>
                            <div class="blackitem-4k blackileft">
                                <div class="blackitem-icon-4k">
                                    <Image
                                        src="/images/Whywe/Reconstruction.svg"
                                        class="blackitem-icon-4k"
                                    />
                                </div>
                                <div class="blackitem-contnet">
                                    <Title class="blackitem-title-4k"
                                        >Грамотная перепланировка при
                                        реконструкции</Title
                                    >
                                    <Text class="blackitem-text-4k"
                                        >Подготавливаем весь пакет чертежей и
                                        документации в соотвествии с
                                        действующими нормативами.</Text
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="black-contnet__cols1-4k bccb">
                            <div class="blackitem-4k blackileft">
                                <div class="blackitem-icon-4k">
                                    <Image
                                        src="/images/Whywe/Dizain.svg"
                                        class="blackitem-icon-4k"
                                    />
                                </div>
                                <div class="blackitem-contnet">
                                    <Title class="blackitem-title-4k"
                                        >Разработка дизайна иньерьеров</Title
                                    >
                                    <Text class="blackitem-text-4k"
                                        >Создаем комфортное жилье с эргономичным
                                        пространством — благодаря комплексному
                                        подходу сделать это нам куда проще!</Text
                                    >
                                </div>
                            </div>
                            <div class="blackitem-4k blackileft">
                                <div class="blackitem-icon-4k">
                                    <Image
                                        src="/images/Whywe/Nadzor.svg"
                                        class="blackitem-icon-4k"
                                    />
                                </div>
                                <div class="blackitem-contnet">
                                    <Title class="blackitem-title-4k"
                                        >Контроль качества</Title
                                    >
                                    <Text class="blackitem-text-4k"
                                        >Не пускаем на самотек работу строителей
                                        — следим, чтобы не было отклонений от
                                        утвержденного проекта и соблюдались
                                        сроки.</Text
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="black-contnet__cols1-4k-center bccb">
                            <div class="blackitem-4k blackileft">
                                <div class="blackitem-icon-4k">
                                    <Image
                                        src="/images/Whywe/Koreckting.svg"
                                        class="blackitem-icon-4k"
                                    />
                                </div>
                                <div class="blackitem-contnet">
                                    <Title class="blackitem-title-4k"
                                        >Корректировка и согласование проекта</Title
                                    >
                                    <Text class="blackitem-text-4k"
                                        >Согласовываем каждый этап с заказчиком
                                        и готовим конечную проектную
                                        документацию в соответсвии с
                                        индивидуальными требованиями.</Text
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                {:else}
                    <div class="content__1-text">
                        <div class="content__title">
                            <Title class="content__1-title"
                                >Нет того, что нам не под силу — разработаем
                                проекты любой сложности</Title
                            >
                        </div>
                        <div class="content__1-text-1">
                            <Text class="text-1__1"
                                >Архитектурная студия «Капитель» занимается
                                проектированием капитальных строений и частных
                                домов в Краснодаре с 2017 года. За это время мы
                                отдали под реализацию более 300 проектов. В
                                работе демонстрируем высокую
                                клиентоориентированность, поэтому 9 из 10
                                заказов получаем по рекомендации.
                            </Text>
                            <Text class="text-1__2"
                                >Доверяя свои проекты студии «Капитель», вы
                                можете быть спокойны за качество, бюджет и сроки
                                исполнения. У нас работают специалисты со стажем
                                более 15 лет. Мы тщательно согласовываем каждый
                                этап с заказчиком и все рутинные процессы берем
                                на себя.</Text
                            >
                        </div>
                    </div>
                    <div class="whywe-black-contnet">
                        <div class="black-contnet__cols1 bccb">
                            <div class="blackitem blackileft">
                                <div class="footer-information__icons">
                                    <Icon name="proekt" class="instagramm" />
                                </div>
                                <div class="blackitem-contnet">
                                    <h1 class="blackitem-title">
                                        Проектирование домов
                                    </h1>
                                    <Text class="blackitem-text"
                                        >Разрабытываем детально проработынные
                                        проекты комфортных домов в выбранном
                                        архитектурном стиле</Text
                                    >
                                </div>
                            </div>
                            <div class="blackitem blackiright">
                                <div class="footer-information__icons">
                                    <Icon name="korekting" class="instagramm" />
                                </div>
                                <div class="blackitem-contnet">
                                    <h1 class="blackitem-title">
                                        Корректировка проекта
                                    </h1>
                                    <Text class="blackitem-text"
                                        >Корретировка проектной документации под
                                        индивидуальные требования заказчика</Text
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="black-contnet__cols1">
                            <div class="blackitem blackileft">
                                <div class="footer-information__icons">
                                    <Icon name="nadzor" class="instagramm" />
                                </div>
                                <div class="blackitem-contnet">
                                    <h1 class="blackitem-title">
                                        Авторский надзор
                                    </h1>
                                    <Text class="blackitem-text"
                                        >Отслеживание сроков, качество работ,
                                        закупаемых материалов</Text
                                    >
                                </div>
                            </div>
                            <div class="blackitem blackiright">
                                <div class="footer-information__icons">
                                    <Icon name="molotok" class="instagramm" />
                                </div>
                                <div class="blackitem-contnet">
                                    <h1 class="blackitem-title">
                                        Строительство
                                    </h1>
                                    <Text class="blackitem-text"
                                        >Возводим из всех популярных материалов</Text
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="black-contnet__cols1">
                            <div class="blackitem blackileft">
                                <div class="footer-information__icons">
                                    <Icon name="disain" class="instagramm" />
                                </div>
                                <div class="blackitem-contnet">
                                    <h1 class="blackitem-title">
                                        Дизайн интерьеров
                                    </h1>
                                    <Text class="blackitem-text"
                                        >Корретировка проектной документации под
                                        индивидуальные требования заказчика</Text
                                    >
                                </div>
                            </div>
                            <div class="blackitem blackiright">
                                <Icon name="reconsrucii" class="instagramm" />
                                <div class="blackitem-contnet">
                                    <h1 class="blackitem-title">
                                        Реконструкция
                                    </h1>
                                    <Text class="blackitem-text"
                                        >Корретировка проектной документации под
                                        индивидуальные требования заказчика</Text
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </Container>
        </main>
    </Container>
    <Image
        src="{host}/images/Whywe/transportir.svg"
        alt="protractor"
        class="whywe-img"
    />
</section>

<style lang="scss">
    $breakpoints-4k: 3839.98px;
    $breakpoints-2k: 2559.98px;
    $class: ".whywe";
    #{$class} {
        position: relative;
        :global(#{$class}-container) {
            width: 100%;
            padding: 0px 25px 0px 40px;
            margin: 0 0;
            position: relative;
            z-index: 1;
            background: #f5f5f5;
            @include mediaQueryMin($breakpoints-4k) {
                padding: 55px 100px 0px 100px;
            }
        }
        :global(.blackitem-icon) {
        }
        :global(.step){
            color: red;
        }
        &blackitem-title {
            font-family: "Montserrat";
        }
        :global(.whywe-saitbar) {
            @include mediaQueryMin($breakpoints-4k) {
                padding: 0px 0px 0px 50px;
                text-align: left;
                font-size: 28px;
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 34px;
                color: #000000;
            }
        }
        :global(.icon) {
            fill: rgb(255, 255, 255);
            aspect-ratio: 1/1;
            width: 50px;
            @include mediaQueryMin($breakpoints-2k) {
                width: 80px;
            }
            @include mediaQueryMin($breakpoints-4k) {
                width: 50px;
            }
            &:hover {
                cursor: pointer;
                fill: rgb(255, 255, 255);
            }
        }
        :global(.blackitem-icon-4k) {
            width: 80%;
            height: auto;
        }
        :global(.why-title) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            text-transform: uppercase;
            color: #000000;
            text-align: center;
            @include mediaQueryMin($breakpoints-4k) {
                font-size: 44px;
                margin-bottom: 100px;
            }
            @include mediaQueryMin($breakpoints-2k) {
                font-size: 24px;
                line-height: 24px;
            }
        }
        :global(#{$class}-main) {
            flex: 0 1 80%;
            border-left: 0.5px solid #000000;
            border-right: 0.5px solid #000000;
            position: relative;
            z-index: 1;
        }
        :global(.whywe-img) {
            position: absolute;
            z-index: 1000;
            top: 30%;
            left: 0;
            width: 30%;
            height: 70%;
            @include mediaQueryMin($breakpoints-4k) {
                top: 40%;
                left: 0;
                position: absolute;
                z-index: 1000;
            }
        }
        :global(#{$class}-content__1) {
            width: 100%;
        }
        :global(#{$class}-content__2) {
            width: 100%;
            height: 50%;
        }
        :global(.content__1-title) {
            width: 250px;
            text-align: left;
            // padding-left: 35px;
            height: 70px;
            // border-right: 0.5px solid #000000;
            position: relative;
            @include mediaQueryMin($breakpoints-2k) {
                width: 250px;
            }
        }
        :global(.content__title) {
            padding-left: 35px;
            width: 80%;
        }
        :global(.content__1-title-4k) {
            width: 60%;
            text-align: left;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 64px;
            line-height: 78px;
            color: #000000;
        }

        // :global(.content__1-title::after) {
        //     content: "";
        //     bottom: -1px;
        //     right: -9px;
        //     position: absolute;
        //     width: 15px;
        //     border-bottom: 0.5px solid #000000;
        //     transform: rotate(-45deg);
        //     @include mediaQueryMin($breakpoints-4k) {
        //         display: none;
        //     }
        // }
        // :global(.content__1-title::before) {
        //     content: "";
        //     top: -28px;
        //     right: -28px;
        //     position: absolute;
        //     width: 55px;
        //     border-bottom: 0.5px solid #000000;
        //     transform: rotate(-90deg);
        //     @include mediaQueryMin($breakpoints-4k) {
        //         display: none;
        //     }
        // }
        :global(.content__1-text) {
            width: 100%;
            padding: 50px 200px 0px 25%;
            @include mediaQueryMin($breakpoints-2k) {
                padding: 100px 400px 50px 25%;
            }
        }
        // ----------------------------------
        :global(.content__1-text-4k) {
            width: 100%;
            padding: 300px 700px 300px 25%;
        }
        // ---------------------------------
        :global(.content__1-text-1) {
            padding-top: 50px;
            padding-left: 35px;
            flex: 0 1 50%;
            display: flex;
        }
        :global(.content__1-text-2) {
            flex: 0 1 50%;
        }
        :global(.text-1__1) {
            padding-right: 120px;
            line-height: 20px;
            font-size: 14px;
            @include mediaQueryMin($breakpoints-2k) {
                line-height: 20px;
                font-size: 18px;
            }
        }
        :global(.text-1__2) {
            font-size: 14px;
            line-height: 20px;
            @include mediaQueryMin($breakpoints-2k) {
                line-height: 20px;
                font-size: 18px;
            }
        }
        :global(.text-1__1-4k) {
            text-align: left;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 34px;
            color: #000000;
            margin-top: 100px;
        }
        :global(.text-1__2-4k) {
            padding-top: 40px;
            text-align: left;
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 34px;
            color: #000000;
        }
        :global(.blackileft) {
        }
        :global(.blackiright) {
            padding-left: 60px;
            @include mediaQueryMin($breakpoints-2k) {
                padding-left: 70px;
            }
        }
        :global(.whywe-black-contnet) {
            padding: 50px 0px;
            margin-top: 40px;
            margin-right: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: #000000;
            height: 500px;
            @include mediaQueryMin($breakpoints-2k) {
                padding-right: 25px;
                height: 700px;
            }
        }
        :global(.whywe-black-contnet-4k) {
            padding: 200px 650px 100px 22%;
            width: 95%;
            margin: 0 auto;
            background: #000000;
        }
        :global(.black-contnet__cols1) {
            display: flex;
            height: 125px;
            width: 60%;
            margin-left: 20%;
            padding-left: 35px;
            align-items: center;
            position: relative;
            @include mediaQueryMin($breakpoints-2k) {
                margin-left: 25%;
            }
        }
        :global(.black-contnet__cols1-4k) {
            display: flex;
        }
        :global(.black-contnet__cols1-4k-center) {
            display: flex;
            justify-content: end;
        }
        // :global(.bccb::before) {
        //     content: "";
        //     top: -120px;
        //     left: -20px;
        //     position: absolute;
        //     width: 59px;
        //     border-bottom: 0.5px solid #000000;
        //     transform: rotate(-90deg);
        // }
        // :global(.bccb::after) {
        //     content: "";
        //     top: -148px;
        //     left: 1px;
        //     position: absolute;
        //     width: 15px;
        //     border-bottom: 0.5px solid #000000;
        //     transform: rotate(-45deg);
        // }
        :global(.blackitem) {
            display: flex;
            flex: 0 1 50%;
        }
        :global(.blackitem-4k) {
            display: flex;
            flex: 0 1 50%;
            margin-bottom: 100px;
        }
        :global(.blackitem-contnet) {
            padding-left: 15px;
        }
        :global(.blackitem-title) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            text-transform: uppercase;
            color: #ffffff;
            @include mediaQueryMin($breakpoints-2k) {
                font-size: 24px;
            }
        }
        :global(.blackitem-text) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            width: 400px;
            font-size: 14px;
            line-height: 17px;
            margin-top: 20px;
            color: #ffffff;
            @include mediaQueryMin($breakpoints-2k) {
                font-size: 16px;
            }
        }
        :global(.blackitem-title-4k) {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 33px;
            text-transform: uppercase;
            color: #ffffff;
        }
        :global(.blackitem-text-4k) {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 34px;
            color: #ffffff;
            margin-top: 45px;
        }
        :global(.blaciwith) {
            width: 55px;
        }
        :global(.blaciwith__2) {
            width: 55px;
            padding-right: 15px;
        }
        :global(.blaciwith__3) {
            width: 55px;
        }
        :global(.blaciwith__text) {
            padding-left: 0px;
        }
    }
    $class_2: ".sait-bar";
    #{$class_2} {
        flex: 20%;
    }
</style>
