import React, { useEffect, useRef } from 'react';
import '../App/App.css';
import {load, mapglAPI} from '@2gis/mapgl';
const About = () => {
    const mapRef = useRef(null);
    
    useEffect(() =>{
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map(mapRef.current, {
                center: [127.538339, 50.260520],  //50.260520, 127.538339  [37.617698, 55.755864
                zoom: 17,
                key: "8a4bb14d-faf0-4eee-afc2-a4f5bc296ad9",
            });

            new mapglAPI.Marker(map, {
                coordinates: [127.538339, 50.260520], //50.260572515691194, 127.53797547762143
                //icon: img,
                label:{
                    text: 'Мы здесь',
                    //color: 'color',
                    offset: [0, -40],
                }, 
            });
        });
        return () =>map && map.destroy();
    }, []);

    return (
        <div>
            <div className="text-container">
                Окончил Факультет математики и информатики Амурского государственного университета  по специальности "Информационные системы и технологии" в 2013 году.
            </div>
            <div className="text-container">
                С этого же года работаю программистом в пенсионном (а затем - социальном) фонде. В обязанности входит как поддержка существующего ПО, так и авторская разработка
            </div>
            <div ref={mapRef}></div>
            <div className="text-container">
                В рамках работы в Пенсионном фонде имел дело с БД DB2, MySQL, разрабатывал программы на языках Delphi, C#, Java, разрабатывал конфигурации на 1С 8.
            </div>
            <div className="text-container">
                Окончил курсы Skillbox по направлением "Java - разработчик" и "1С - разработчик".
            </div>
        </div>
    )
}

export default About;