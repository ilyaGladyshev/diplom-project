import React, { useEffect } from 'react';
import image1 from "../assets/images/page1/image1.jpg";
import image2 from "../assets/images/page1/image2.png";

import EmblaCarouselProjects from '../Carousel/EmblaCarouselProjects';
const OPTIONS = {}
const FullFirstProject = () => {
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
    ]       
    return (
       <div>       
            <div className="text-container">
            Разработка локального поискового движка по сайту.
            </div>
            <div className="text-container">
            Разработка веб-приложения в рамках обучения в Skillbox по курсу "Java - разработка". Поскольку курс был посвящен бекэнду, вксь фронтэнд
            в этом веб-приложении был предоставлен самим Скиллбоксом (как и лемматизатор для разбора слов при индексации страниц).
            Движок был разработан на фреймвоке Spring, c применением ОРМ JPA.
            </div> 
            <div className="text-container">
               Сcылка на Git Hab:  <a href="https://github.com/ilyaGladyshev/search-engine/tree/master" target="_blank" rel="noopener">
                https://github.com/ilyaGladyshev/search-engine/tree/master</a>
            </div>  
             <div className="text-container">
                <EmblaCarouselProjects pages={ pages} options={OPTIONS} />
            </div>   
        </div> 
    )
}

export default  FullFirstProject;