import React, { useEffect } from 'react';
import image1 from "../assets/images/page3/aho1.jpg";
import image2 from "../assets/images/page3/aho2.jpg";
import image3 from "../assets/images/page3/aho3.jpg";
import image4 from "../assets/images/page3/aho4.jpg";
import image5 from "../assets/images/page3/aho5.jpg";
import EmblaCarouselProjects from '../Carousel/EmblaCarouselProjects';
const OPTIONS = {}
const FullThirdProject = () => {
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
        {
            id: 4,
            title: "Описание второй картинки",
            preview: image4,
            full: image4,
        }, 
        {
            id: 5,
            title: "Описание пятой картинки",
            preview: image5,
            full: image5,
        },          
    ]

    return (
    <div>
        <div className="text-container">
            Веб-приложение для учета материальных единиц
        </div>
        <div className="text-container">
            Веб-приложение для нужд Административно-хозяйственного отдела социального фонда по регистрации заявок
            и отслеживания статусов их выполнения. Серверная часть написана на Java с использованием технологий Spring и JPA,
            сервер развернут на MySQL, веб-сторона использует нативный JS и CSS. Из-за политик безопасности выложить проект на GitHub 
            не представляется возможным.
        </div>
        <div className="text-container">
            <EmblaCarouselProjects pages={ pages} options={OPTIONS} />
        </div>   
    </div>
    )
}

export default  FullThirdProject;