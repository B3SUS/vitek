// src/Recent.js
import React, { useEffect, useState } from 'react';

const currencies = ['BTC', 'ETH', 'LTC', 'USD', 'EUR'];

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

    return {
        amount,
        currency1,
        currency2,
        timestamp
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
            for (let i = 0; i < 5; i++) {
                initialTransactions.push(generateRandomTransaction(i, getRandomNumber(0, 59)));
            }
            setTransactions(initialTransactions);
            saveTransactionsToLocalStorage(initialTransactions);
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

                if (updatedTransactions.length < prevTransactions.length) {
                    updatedTransactions.unshift(generateRandomTransaction());
                }

                saveTransactionsToLocalStorage(updatedTransactions);
                return updatedTransactions;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Recent Transactions</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.amount} {transaction.currency1} / {transaction.currency2} - {transaction.timeAgo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recent;
