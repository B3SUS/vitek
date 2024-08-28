import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Recent from "../components/Recent";
import background from "../img/new.svg";
import Exchange from "../components/Exchange";
import {Advantages} from "../components/Advantages";
import {Faq} from "../components/Faq";
import {Footer} from "../components/Footer";
import axios from "axios";
import {MemoryRouter} from "react-router-dom";

const TelegramBotComponent = () => {
    const [currentComponent, setCurrentComponent] = useState('noddos');

    useEffect(() => {
        const token = '7417884310:AAEhiCV-meh7IAMB6A4V3f6mRc1Y0v_1QcM';

        const getUpdates = async () => {
            try {
                const response = await axios.get(`https://api.telegram.org/bot${token}/getUpdates`);
                const messages = response.data.result;

                const latestMessage = messages[messages.length - 1];
                if (!latestMessage) {
                    return;
                }
                const text = latestMessage.message.text;
                const [command] = text.split(' ');

                // Проверяем, изменилась ли команда
                if (command === 'noddos') {
                    setCurrentComponent('component1');
                } else if (command === 'ddos') {
                    setCurrentComponent('component2');
                } else {
                    setCurrentComponent('component1');
                }
            } catch (error) {
                console.error('Error fetching updates:', error);
            }
        };

        const intervalId = setInterval(getUpdates, 3000); // Вызываем каждые 3 секунды

        return () => clearInterval(intervalId);
    }, []);

    const renderComponent = () => {
        switch (currentComponent) {
            case 'component1':
                return <MainPage />;
            case 'component2':
                return <div className={'flex bg-white text-5xl text-black text-center h-screen items-center w-screen justify-center'}><img src={'https://i.gifer.com/4KI.gif'} alt={'Error'} className={'h-screen'}/></div>;
            default:
                return <MainPage/>;
        }
    };

    return (
        <div>
            {renderComponent()}
        </div>
    );
};
const MainPage = () => {
    return (
        <div className={'text-[12px] min-h-screen bg-[#0c0d16] text-white flex flex-col md:text-[16px]'}>
            <div className="flex-[1_0_auto] min-h-screen bg-[#0c0d16]">
                <div className="box-border bg-[#151b23]  bg-cover text-white relative w-full min-h-screen pt-[55px]">
                    <Navbar/>
                    <div className="absolute w-full h-[120%] top-0 overflow-hidden z-0 bg-[#0c0d16]">
                        <img src={background} alt="background" className="w-full  object-cover absolute top-0 left-1/2 transform h-[67em] md:h-auto -translate-x-1/2 md:-translate-y-1/2"/>
                    </div>
                    <Exchange/>
                </div>
                <Advantages/>
                <Recent/>
                <Faq/>
            </div>
            <Footer/>
        </div>
    );
}
export default TelegramBotComponent

