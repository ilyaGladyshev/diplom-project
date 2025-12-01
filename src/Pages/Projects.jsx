import React from 'react';
import '../App/App.css';
import EmblaCarouselProjects from '../Carousel/EmblaCarouselProjects';
import FirstProject from '../Projects/FirstProject.jsx'
import SecondProject from '../Projects/SecondProject.jsx'
import ThirdProject from '../Projects/ThirdProject.jsx'
import FullFirstProject from '../Projects/FullFirstProject.jsx'
import FullSecondProject from '../Projects/FullSecondProject.jsx'
import FullThirdProject from '../Projects/FullThirdProject.jsx'
const OPTIONS = {}

const pages = [
        {
            id: 1,
            title: "Описание первого проекта",
            preview: <FirstProject />,
            full: <FullFirstProject></FullFirstProject>,
        },
        {
            id: 2,
            title: "Описание второго проекта",
            preview: <SecondProject />,
            full: <FullSecondProject />,
        },   
        {
            id: 3,
            title: "Описание третьего проекта",
            preview: <ThirdProject />,
            full: <FullThirdProject />,
        },         
]


const Projects = () => {
    return (
        <div>
            <div>
                Узрите все мои великие деяния  
                <EmblaCarouselProjects pages={ pages} options={OPTIONS} />
            </div>
        </div>
    )
}

export default Projects;