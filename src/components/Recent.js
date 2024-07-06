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

const currencies = ['BTC', 'ETH', 'LTC', 'USD', 'BNB', 'SOL', 'XRP', 'DOGE', 'ADA', 'TRX', 'AVAX', 'SHIB', 'DOT', 'NEAR', 'XMR', 'GEL', 'RUB'];

const getRandomAmount = () => Math.floor(Math.random() * 1000) + 1;

// Function to generate a random time ago string and seconds
const getRandomTimeAgo = () => {
    const seconds = Math.floor(Math.random() * 480) + 1; // 1 second to 8 minutes (480 seconds)
    const timeAgo = seconds < 60 ? `${seconds} seconds ago` : `${Math.floor(seconds / 60)} minutes ago`;
    return { timeAgo, seconds };
};

// Function to generate a random static time between 5 and 15 seconds
const getRandomStaticTime = () => Math.floor(Math.random() * 11) + 5;

// Function to create initial transactions
const createInitialTransactions = () => {
    const transactions = [];
    for (let i = 0; i < 8; i++) {
        const currency1 = currencies[Math.floor(Math.random() * currencies.length)];
        const currency2 = currencies[Math.floor(Math.random() * currencies.length)];
        const { timeAgo, seconds } = getRandomTimeAgo();
        transactions.push({
            amount: getRandomAmount(),
            currency1,
            currency2,
            timeAgo,
            time: seconds,
            staticTime: getRandomStaticTime()
        });
    }
    return transactions.sort((a, b) => a.time - b.time);
};

const Recent = () => {
    const [transactions, setTransactions] = useState(createInitialTransactions());

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
                        amount: getRandomAmount(),
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
        <div className={'recent-section mb-[6em] relative font-[Mont]'}>
            <div className={'wrapper max-w-none px-[1em] mx-auto box-border w-full'}>
                <h2 className={'text-center text-[2em] text-transparent bg-clip-text bg-[linear-gradient(180deg,#FFF_0%,#B1DAFF_100%)] font-[MontBold] leading-[1.15em] mb-[.7em]'}>
                    Recent Transactions
                </h2>
                <ul className={'flex flex-col overflow-hidden items-center list-none'}>
                    {transactions.map((transaction, index) => (
                        <li key={index} className={'grid grid-cols-[1fr_.8em_.8em_.85fr] w-full h-auto box-border bg-[#21284B] rounded-[.3em] text-[.9em] min-h-[3.3em] mb-[.7em] text-center whitespace-nowrap border-collapse'}>
                            <div className={'recent-time row-[1] col-[1/3] flex border-b border-white/[.2] items-center justify-end pl-[1.3em] whitespace-nowrap text-left pr-[.6em]'}>
                                <div className={'time'}>
                                    {transaction.timeAgo || 'Несколько секунд назад'}
                                </div>
                            </div>
                            <div className={'dir-from row-[2] col-[1] flex items-center justify-end h-[4em] px-[.6em]'}>
                                <div className={'coin-value inline-block'}>
                                    {transaction.amount} {transaction.currency1}
                                </div>
                                <div className={'coin-ico ml-[1em] float-none h-[2em] text-center w-[2em]'}>
                                    <img src={getIconForCurrency(transaction.currency1)} alt={transaction.currency1} />
                                </div>
                            </div>
                            <div className={'dir-arrow row-[2] col-[2/3] flex items-center py-0 px-[.1em] justify-center w-[1.4em]'}>
                                <img src={arrow} alt={arrow} className={'w-full'}/>
                            </div>
                            <div className={'dir-to row-[2] col-[4] flex items-center justify-start min-w-[20%] text-left py-0 px-[.6em]'}>
                                <div className={'coin-ico mr-[1em] float-none h-[2em] w-[2em] text-center inline-block'}>
                                    <img src={getIconForCurrency(transaction.currency2)} alt={transaction.currency2} />
                                </div>
                                <div className={'coin-value inline-block'}>
                                    {transaction.currency2}
                                </div>
                            </div>
                            <div className={'recent-howlong pr-[1.3em] whitespace-nowrap text-right row-[1] col-[3/5] flex border-b border-white/[.2] items-center justify-start h-[4em] pl-[1em]'}>
                                <div className={'ico-timer inline-block'}><img className={'h-[1.2em]'} src={clock} alt="clock" /></div>
                                <span className={'inline-block'}>{transaction.staticTime} sec</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Recent;
