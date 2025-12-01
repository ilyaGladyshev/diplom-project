import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';

function ContactForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('il-856@yandex.ru');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_s7495nc';
        const templateID = 'template_9pgns2c';
        const publicKey = 'y3YjVw5RKa_lqcbSK';

        const templateParams ={
            name: name,
            email: email,
            message: message,    
        };

        emailjs.send(serviceId, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCESS!', response.status, response.text);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log("FAILED...", error);
            });
 
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>Отправка сообщений на мою Яндекс-почту</div>
            <input
                type="email"
                placeholder="Ваше email"
                value={email}
                disabled
                //onChange={(e) => setEmail(e.target.value)}
                //required
            />
            <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="message"
                placeholder="Ваше сообщение"
                value={message}
                className="message"
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <button type="submit">Отправить сообщение</button>
        </form>
    );
}

export default ContactForm;