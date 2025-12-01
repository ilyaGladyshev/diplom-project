import React, { useEffect } from 'react';
import image1 from "../assets/images/page2/image1.jpg";
import image2 from "../assets/images/page2/image2.jpg";
import image3 from "../assets/images/page2/image3.jpg";
import EmblaCarouselProjects from '../Carousel/EmblaCarouselProjects';

const FullSecondProject = () => {
    const OPTIONS = {}
    const pages = [
            {
                id: 1,
                title: "Описание первой катинки",
                preview: image1,
                full: image1,
            },
            {
                id: 2,
                title: "Описание второй картинки",
                preview: image2,
                full: image2,
            },  
            {
                id: 3,
                title: "Описание третьей картинки",
                preview: image3,
                full: image3,
            },      
        ]   
        return (
            <div>
                <div className='text-container'>Дипломный проект по курсу SkillBox "!С - Разработка".</div>
                <div className='text-container'>Разработка конфигурации 1С под бизнес-процессы заказчика.
                    Разработка конфигурации 1С для оперативного и бухгалтерского учета.</div>
                <div className="text-container">
                    <EmblaCarouselProjects pages={ pages} options={OPTIONS} />
                </div>   
            </div>
        )
    }

export default  FullSecondProject;