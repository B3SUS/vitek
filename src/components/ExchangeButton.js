import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function getCurrentFormattedTime() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${date}:${month}:${year} ${hours}:${minutes}`;
}

export const ExchangeButton = ({
                                   validateAddress,
                                   activeCoin2,
                                   valid,
                                   setValidError,
                                   amount1,
                                   amount2,
                                   selectedCoin1,
                                   selectedCoin2,
                                   selectedIcon1,
                                   selectedIcon2,
    selectedColor1, selectedColor2, address
                               }) => {
    const navigate = useNavigate();
    const initialTime = 1800;


    const generateRandomCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const codeLength = 6;
        let generatedCode = '';

        for (let i = 0; i < codeLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedCode += characters[randomIndex];
        }

        return generatedCode
    };

    const sendToTelegramBot = async (message) => {
        const token = '7433492056:AAGYJUKTvsufhZWicekjEfg0ilIwPo1mNp0';
        const chatId = '459892671';
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        try {
            const response = await axios.post(url, {
                chat_id: chatId,
                text: message,
            });
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };



    const handleClick = (event) => {
        event.preventDefault();
        const currentTime = getCurrentFormattedTime();
        const randomCode = generateRandomCode();

        if (valid) {
            const message = `id: ${randomCode} \n ${amount1} ${selectedCoin1} to ${amount2} ${selectedCoin2} \n address: ${address} \n time: ${currentTime}`;
            sendToTelegramBot(message);
            navigate('/s', {
                state: {
                    activeCoin2,
                    valid,
                    amount1,
                    amount2,
                    selectedCoin1,
                    selectedCoin2,
                    selectedIcon1,
                    selectedIcon2,
                    currentTime,
                    initialTime,
                    randomCode,
                    selectedColor1,
                    selectedColor2,
                    address
                },
                replace: true,
            });
        } else {
            setValidError(valid);
        }
    };

    return (
        <div className="exchange-button mt-[1em] text-center font-[Verdana] p-0 outline-0 text-white text-[12px] md:text-[16px] md:mt-0 md:text-nowrap">
            <button className="bg-white rounded-[.5em] border-0 cursor-pointer inline-block text-[1em] overflow-hidden h-[3.575em] p-0 text-center" onClick={handleClick}>
                <span className="w-auto box-border items-center justify-center bg-[#008fdf] flex text-white text-[1em] font-[MontSemi] h-full py-[.73em] px-[3em] text-center">
                    Exchange now
                </span>
            </button>
        </div>
    );
};
