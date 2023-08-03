import React,{useState,useEffect} from "react";
import styles from "../../styles/PostProjectSupport/PostPtojectSupport.module.scss";
import Title from "../../../../ui/title";
import ProjectSupportItem from "./ProjectSupport_Item";
import ProjectSupportItemBlack from "./PostSupport_ItemBlack";
import Image from "../../../../ui/Image";
import img1 from "../../../../../assets/img/ProjectSupport/Group@2x.svg";
import Button from "./Button/ProjectSupport_Button";

const ProstProojectSupprt=()=>{
    const [isVisible, setIsVisible] = useState(false);
    const [isClassAdded, setIsClassAdded] = useState(false);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 2500 && !isClassAdded) {
        setIsVisible(true);
        setIsClassAdded(true);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return(
        <section className={styles.projectsupport} id="projectsupport">
            <div className={styles.projectsupport_container}>
                <main className={styles.projectsupport_main}>
                    <div className={styles.projectsupport_container__WHITE}>
                        <Title className={`projectsupport__title ${isVisible ? "show" : ""}`}  text="Поспроектное сопровождение объекта"/>
                        <div className={styles.projectsupport_container__WHITE__content}>
                            <div className={styles.projectsupport_container__WHITE__content_part1}>
                                <ProjectSupportItem className="item1"  title="Обоснуем площадь земельного участка" text="Помогаем выкупать участки, руководствуясь нормами градостроительного регламента на соответствующей территории, в соответствии с п. 1 ст. 11.9 ЗК РФ. Сформируем земельный участок необходимой площади под объект капитального строительства."/>
                                <ProjectSupportItem className="item1"  title="Поможем использовать земли неразграниченной государственной собственности" text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."/>
                                <ProjectSupportItem className="item1"  title="Согласуем размещение объектов в зонах с особыми условиями использования территории" text="После согласования размещения объектов капитального строительства в особых зонах разработаем и согласуем проектную документацию в том числе на съезды с дорог федерального и регионального значения общего пользования/объекты культурного наследия и др."/>
                            </div>
                            <div className={styles.projectsupport_container__WHITE__content_part2}>
                                <ProjectSupportItem className="item1" title="Сделаем заключение на условно разрешенный вид использования участка" text="Соберем документацию, подтверждающую соблюдение условий и действующих техрегламентов. Получим разрешение на использование земельного участка для установленных целей."/> 
                                <ProjectSupportItem className="item1" title="Обоснуем необходимые отклонения от предельных параметров разрешенного строительства" text="– для строительства/реконструкции индивидуального жилого дома– для строительства дома блокированной застройки– для строительства коммерческих, общественно-деловых зданий– для строительства зданий складского и промышленных назначений"/>
                                <ProjectSupportItem className="item1" title="Соберем полный пакет документов по планировке территории" text="Предоставим схему планировочной организации земельного участка под индивидуальное строительство жилого дома с учетом отклонений от пожарных требований."/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projectsupport_container__BLACK}>
                        <div className={styles.projectsupport_container__BLACK__content}>
                            <div className={styles.projectsupport_container__BLACK__content_part1}>
                                <ProjectSupportItemBlack className="item1" myColor="white" title="Подготовим все технические условия" text="– обоснования планировочных решений; – объекты, не угрожающие жизни и здоровью человека."/>
                                <ProjectSupportItemBlack className="item1" myColor="white" title="Помогаем добиться увеличения уровня земельного участка" text="Проведем планово-высотную съемку и обозначим высотные отметки рельефа участка. На основании топографического плана обоснуем возможность повышения высотных отметок земельного участка."/>
                                <ProjectSupportItemBlack className="item1" myColor="white" title="Сделаем проект перепланировки/переустройства помещений в многоквартирном доме" text="Учитывая пожелания заказчика, внесем корректировки согласно нормативам, и согласуем проект в соответствующих инстанциях."/>
                                <ProjectSupportItemBlack className="item1" myColor="white" title="Подготовим все заключения для суда" text="– обоснования планировочных решений; – объекты, не угрожающие жизни и здоровью человека."/>
                            </div>
                            <div className={styles.projectsupport_container__BLACK__content_part2}>
                                <ProjectSupportItemBlack className="item1"  title="Архитектурно-строительное проектирование под ключ" text="Разработаем проектную и рабочую документацию гражданских зданий, жилых, нежилых, общественно-деловых, складских комплексов, производственных, в том числе линейных сооружений."/>
                                <ProjectSupportItemBlack className="item1"  title="Разработаем проект инженерной защиты объекта от затопления/подтопления" text="Предварительно (перед разработкой тех.задания) проведем топографическую съемку и составим топографический план территории, оценим результаты инженерно-геологических и гидрометеорологических изысканий."/>
                                <ProjectSupportItemBlack className="item1"  title="Соберем заключения по пожарной безопасности" text="Предоставим схему планировочной организации земельного участка под индивидуальное строительство жилого дома с учетом отклонений от пожарных требований."/>
                                <Button/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Image className="projectsupport__img" src={img1} alt="задний план"/>
        </section>
    );
};
export default ProstProojectSupprt;