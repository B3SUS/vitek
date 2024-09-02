// src/Recent.js
import React, { useEffect, useState } from 'react';
import btc from '../svg/bitcoin-ico.png';
import bnb from '../svg/bnb.png';
import dogecoin from '../svg/dogecoin.png';
import ethereum from '../svg/ethereum.png';
import litecoin from '../svg/litecoin.png';
import monero from '../svg/monero.png';
import shibainu from '../svg/shiba-inu.png';
import solana from '../svg/solana.png';
import tether from '../svg/tether.png';
import avalanche from '../svg/avalanche.png';
import tron from '../svg/tron.png';
import polka from '../svg/polkadot.png';
import cardano from '../svg/cardano.png';
import xrp from '../svg/xrp.png';
import near from '../svg/near.png';
import usdc from '../svg/usdc.png';
import ruble from '../svg/ruble.png';
import lari from '../svg/lari.png';
import arrow from '../img/arrow.png'

import clock from '../img/clock.png';

import bg from '../svg/recent.svg'
import {t} from 'i18next'


const currencies = ['BTC', 'ETH', 'LTC', 'USD', 'BNB', 'SOL', 'XRP', 'DOGE', 'ADA', 'TRX', 'AVAX', 'SHIB', 'DOT', 'NEAR', 'XMR', 'GEL', 'RUB'];



// Function to generate a random time ago string and seconds
const getRandomTimeAgo = () => {
    const seconds = Math.floor(Math.random() * 480) + 1; // 1 second to 8 minutes (480 seconds)
    const timeAgo = seconds < 60 ? `${seconds} ${t('recent.sec')}` : `${Math.floor(seconds / 60)} ${t('recent.min')}`;
    return { timeAgo, seconds };
};

// Function to generate a random static time between 5 and 15 seconds
const getRandomStaticTime = () => Math.floor(Math.random() * 11) + 5;

// Function to create initial transactions
const createInitialTransactions = () => {
    const transactions = [];
    for (let i = 0; i < 8; i++) {
        const currency1 = currencies[Math.floor(Math.random() * currencies.length)];
        let currency2 = currencies[Math.floor(Math.random() * currencies.length)];
        while(currency2 === currency1) {
            currency2 = currencies[Math.floor(Math.random() * currencies.length)];
        }
        const { timeAgo, seconds } = getRandomTimeAgo();
        transactions.push({
            amount: getRandomAmount(currency1),
            currency1,
            currency2,
            timeAgo,
            time: seconds,
            staticTime: getRandomStaticTime()
        });
    }
    return transactions.sort((a, b) => a.time - b.time);
};
const getRandomAmount = (currency) => {
    const getRandomInRange = (min, max, roundTo = 0.001) => {
        const randomValue = Math.random() * (max - min) + min;
        return (Math.round(randomValue / roundTo) * roundTo).toFixed(2);
    };
    // eslint-disable-next-line default-case
    switch (currency) {
        case 'BTC': return getRandomInRange(0.001, 0.1, 0.001); // 0.001 to 0.1 BTC
        case 'ETH': return getRandomInRange(0.01, 1);    // 0.01 to 1 ETH
        case 'LTC': return getRandomInRange(0.1, 10);    // 0.1 to 10 LTC
        case 'USD': return getRandomInRange(0,1000, 100); // 0 to 1000 USD
        case 'BNB': return getRandomInRange(0.1, 2);     // 0.1 to 2 BNB
        case 'SOL': return getRandomInRange(0.1, 5);     // 0.1 to 5 SOL
        case 'XRP': return getRandomInRange(1, 1000);    // 1 to 1000 XRP
        case 'DOGE': return getRandomInRange(10, 10000); // 10 to 10000 DOGE
        case 'ADA': return getRandomInRange(1, 500);     // 1 to 500 ADA
        case 'TRX': return getRandomInRange(10, 2000);   // 10 to 2000 TRX
        case 'AVAX': return getRandomInRange(0.1, 10);   // 0.1 to 10 AVAX
        case 'SHIB': return getRandomInRange(0,1000000); // 0 to 1,000,000 SHIB
        case 'DOT': return getRandomInRange(0.1, 50);    // 0.1 to 50 DOT
        case 'NEAR': return getRandomInRange(0.1, 20);   // 0.1 to 20 NEAR
        case 'XMR': return getRandomInRange(0.01, 1);    // 0.01 to 1 XMR
        case 'GEL': return getRandomInRange(0,5000) // 0 to 5000 GEL
        case 'RUB': return getRandomInRange(5000,10000); // 5000 to 10000 RUB
        default:            console.warn(`Unknown currency: ${currency}`);
            return null;
    }
};

const currencyPairs = [
    { from: 'USDT', to: 'BTC', min: 100, max: 70000 },
    { from: 'USDT', to: 'ETH', min: 100, max: 10000 },
    { from: 'USDT', to: 'SOL', min: 50, max: 5000 },
    { from: 'USDT', to: 'RUB', min: 50, max: 10000 },
    { from: 'USDT', to: 'GEL', min: 50, max: 10000 },
    { from: 'RUB', to: 'BTC', min: 50000, max: 10000000 },
    { from: 'RUB', to: 'ETH', min: 1000, max: 1000000 },
    { from: 'RUB', to: 'USDT', min: 1000, max: 1000000 },
    { from: 'GEL', to: 'USDT', min: 100, max: 100000 },
    { from: 'GEL', to: 'BTC', min: 100, max: 100000 },
    { from: 'GEL', to: 'ETH', min: 100, max: 100000 },
    { from: 'BTC', to: 'RUB', min: 0.01, max: 2 },
    { from: 'BTC', to: 'GEL', min: 0.01, max: 2 },
    { from: 'BTC', to: 'ETH', min: 0.005, max: 2 },
    { from: 'BTC', to: 'USDT', min: 0.005, max: 2 },
    { from: 'ETH', to: 'USDT', min: 0.01, max: 5 },
    { from: 'ETH', to: 'BTC', min: 0.01, max: 5 },
    { from: 'ETH', to: 'GEL', min: 0.01, max: 5 },
    { from: 'ETH', to: 'RUB', min: 0.01, max: 5 },
    { from: 'SOL', to: 'USDT', min: 0.5, max: 10 },
    { from: 'SOL', to: 'RUB', min: 0.5, max: 10 },
    { from: 'SOL', to: 'GEL', min: 0.5, max: 10 }
];

const Recent = () => {

    const [transactions, setTransactions] = useState([]);
    const [initialized, setInitialized] = useState(() => {
        const storedTransactions = localStorage.getItem('transactions');
        return storedTransactions !== null;
    });

    useEffect(() => {
        if (initialized) {
            const storedTransactions = localStorage.getItem('transactions');
            if (storedTransactions) {
                setTransactions(JSON.parse(storedTransactions));
            }
        } else {
            const initialTransactions = createInitialTransactions();
            setTransactions(initialTransactions);
            localStorage.setItem('transactions', JSON.stringify(initialTransactions));
            setInitialized(true);
        }
    }, [initialized]);

    useEffect(() => {
        const saveTransactionsToLocalStorage = () => {
            localStorage.setItem('transactions', JSON.stringify(transactions));
        };
        const intervalId = setInterval(saveTransactionsToLocalStorage, 1000); // save every 1 second
        return () => clearInterval(intervalId); // clean up when component unmounts
    }, [transactions]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTransactions(prevTransactions => {
                const newTransactions = prevTransactions.map(t => ({
                    ...t,
                    time: t.time + 1,
                    timeAgo: t.time < 59 ? `${t.time + 1} seconds ago` : `${Math.floor((t.time + 1) / 60)} minutes ago`
                })).filter(t => t.time <= 540); // Remove transactions older than 9 minutes (540 seconds)

                if (newTransactions.length < 8) {
                    const currency1 = currencies[Math.floor(Math.random() * currencies.length)];
                    const currency2 = currencies[Math.floor(Math.random() * currencies.length)];
                    const newTransaction = {
                        amount: getRandomAmount(currency1),
                        currency1,
                        currency2,
                        timeAgo: '1 second ago',
                        time: 1,
                        staticTime: getRandomStaticTime()
                    };
                    newTransactions.unshift(newTransaction);
                }

                return newTransactions.sort((a, b) => a.time - b.time);
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getIconForCurrency = (currency) => {
        switch (currency) {
            case 'BTC': return btc;
            case 'ETH': return ethereum;
            case 'LTC': return litecoin;
            case 'USD': return usdc;
            case 'BNB': return bnb;
            case 'SOL': return solana;
            case 'XRP': return xrp;
            case 'DOGE': return dogecoin;
            case 'ADA': return cardano;
            case 'TRX': return tron;
            case 'AVAX': return avalanche;
            case 'SHIB': return shibainu;
            case 'DOT': return polka;
            case 'NEAR': return near;
            case 'XMR': return monero;
            case 'GEL': return lari;
            case 'RUB': return ruble;
            default: return null;
        }
    };




    return (
        <div className={'recent-section mb-[6em]  relative font-[Mont] md:text-[16px] md:mb-[9em]'}>
            <div className={'wrapper max-w-none px-[1em] mx-auto box-border w-full md:max-w-[1280px] md:px-[2em]'}>
                <h2 className={'text-center  text-[2em]  text-transparent bg-clip-text bg-grad font-[MontBold] leading-[1.15em] mb-[.7em] md:text-nowrap md:text-[3.5em]'}>
                    {t('recent.title')}
                </h2>
                <ul className={'flex flex-col overflow-hidden items-center list-none'}>
                    {transactions.map((transaction, index) => (
                        <li key={index} className={'grid grid-cols-[1fr_.8em_.8em_.85fr] h-auto w-full box-border bg-[#21284B] rounded-[.3em] text-[.9em] min-h-[3.3em] mb-[.7em] text-center whitespace-nowrap border-collapse md:w-[70%] md:table md:table-fixed md:h-[3.3em]'}>
                            <div className={'recent-time row-[1] col-[1/3]  flex  border-b border-white/[.2] items-center justify-end pl-[1.3em] whitespace-nowrap text-left pr-[.6em] md:table-cell md:align-middle md:border-none'}>
                                <div className={'time'}>
                                    {transaction.timeAgo}
                                </div>
                            </div>
                            <div className={'dir-from row-[2] col-[1]  flex items-center justify-end md:justify-normal h-[4em] md:h-auto px-[.6em] md:min-w-[28%] md:text-right md:table-cell md:align-middle'}>
                                <div className={'coin-value inline-block md:align-middle'}>
                                    {transaction.amount} {transaction.currency1}
                                </div>
                                <div className={'coin-ico ml-[1em] float-none h-[2em] text-center w-[2em] md:inline-block md:align-middle'}>
                                    <img src={getIconForCurrency(transaction.currency1)} alt={transaction.currency1} />
                                </div>
                            </div>
                            <div className={'dir-arrow row-[2] col-[2/3] md:table-cell md:align-middle md:p-[.6em] flex items-center py-0 px-[.1em] justify-center w-[1.4em] md:w-[3em]'}>
                                <img src={arrow} alt={arrow} className={'w-full'}/>
                            </div>
                            <div className={'dir-to row-[2] col-[4] md:min-w-[28%] md:table-cell md:align-middle flex items-center justify-start min-w-[20%] text-left py-0 px-[.6em]'}>
                                <div className={'coin-ico mr-[1em] float-none h-[2em] w-[2em] text-center inline-block md:align-middle'}>
                                    <img src={getIconForCurrency(transaction.currency2)} alt={transaction.currency2} />
                                </div>
                                <div className={'coin-value inline-block md:align-middle'}>
                                    {transaction.currency2}
                                </div>
                            </div>
                            <div className={'recent-howlong pr-[1.3em] md:table-cell md:align-middle md:pr-[1.3em] md:pl-[.6em] whitespace-nowrap text-right row-[1] col-[3/5] md:border-none flex border-b border-white/[.2] items-center justify-start h-[4em] pl-[1em]'}>
                                <div className={'ico-timer inline-block md:align-middle'}><img className={'h-[1.2em]'} src={clock} alt="clock" /></div>
                                <span className={'inline-block md:align-middle'}>{transaction.staticTime} sec</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Recent;
