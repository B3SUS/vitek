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

import clock from '../img/clock.png';

const currencies = ['BTC', 'ETH', 'LTC', 'USD', 'BNB', 'SOL', 'XRP', 'DOGE', 'ADA', 'TRX', 'AVAX', 'SHIB', 'DOT', 'NEAR', 'XMR', 'GEL', 'RUB'];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomCurrency = () => currencies[getRandomNumber(0, currencies.length - 1)];

const generateRandomTransaction = (offsetMinutes = 0, offsetSeconds = 0) => {
    const amount = getRandomNumber(1, 100);
    const currency1 = getRandomCurrency();
    let currency2;
    do {
        currency2 = getRandomCurrency();
    } while (currency1 === currency2);

    const timestamp = new Date();
    timestamp.setMinutes(timestamp.getMinutes() - offsetMinutes);
    timestamp.setSeconds(timestamp.getSeconds() - offsetSeconds);
    const time = getRandomNumber(5,15);

    return {
        amount,
        currency1,
        currency2,
        timestamp,
        time
    };
};

const saveTransactionsToLocalStorage = (transactions) => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
};

const loadTransactionsFromLocalStorage = () => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
};

const Recent = () => {
    const [transactions, setTransactions] = useState(loadTransactionsFromLocalStorage);

    useEffect(() => {
        const initialTransactions = loadTransactionsFromLocalStorage();

        if (initialTransactions.length === 0) {
            const newTransactions = [];
            for (let i = 0; i < 8; i++) {
                newTransactions.push(generateRandomTransaction(i, getRandomNumber(0, 59)));
            }
            setTransactions(newTransactions);
            saveTransactionsToLocalStorage(newTransactions);
        } else {
            setTransactions(initialTransactions);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTransactions((prevTransactions) => {
                const now = new Date();
                const updatedTransactions = prevTransactions
                    .map(transaction => {
                        const diffInSeconds = Math.floor((now - new Date(transaction.timestamp)) / 1000);

                        return {
                            ...transaction,
                            timeAgo: diffInSeconds < 60
                                ? `${diffInSeconds} секунд назад`
                                : `${Math.floor(diffInSeconds / 60)} хвилин назад`
                        };
                    })
                    .filter(transaction => {
                        const diffInMinutes = Math.floor((now - new Date(transaction.timestamp)) / 60000);
                        return diffInMinutes < 9;
                    });

                // Если транзакции удалены, добавляем новые
                const transactionsToAdd = 8 - updatedTransactions.length;
                for (let i = 0; i < transactionsToAdd; i++) {
                    updatedTransactions.unshift(generateRandomTransaction());
                }

                saveTransactionsToLocalStorage(updatedTransactions);
                return updatedTransactions;
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
                            <div className={'dir-from row-[2] col-[1] flex items-center justify-end h-[4em]'}>
                                <div className={'coin-value inline-block'}>
                                    {transaction.amount} {transaction.currency1}
                                </div>
                                <div className={'coin-ico ml-[1em] float-none h-[2em] text-center w-[2em]'}>
                                    <img src={getIconForCurrency(transaction.currency1)} alt={transaction.currency1} />
                                </div>
                            </div>
                            <div className={'dir-arrow row-[2] col-[2/3] flex items-center py-0 px-[.1em] justify-center w-[1.4em]'}>
                                {/* Arrow Icon */}
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
                                <span className={'inline-block'}>{transaction.time}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Recent;
