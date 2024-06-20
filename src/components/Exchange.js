import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ExchangeAmount} from "./ExchangeAmount";
import {ExchangeAdress} from "./exchangeAdress";
import {ExchangeWrapper} from "./ExchangeWrapper";
import {ExchangeTerms} from "./ExchangeTerms";
import Web3 from "web3";


const ExchangeForm = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const [amount1, setAmount1] = useState('');
    const [amount2, setAmount2] = useState('');


    const [coins, setCoins] = useState([]);
    const [copiedCoins, setCopiedCoins] = useState([]);

    const [activeCoin1, setActiveCoin1] =  useState(null);
    const [activeCoin2, setActiveCoin2] =  useState(null);

    const [lastChanged, setLastChanged] = useState(null);

    const [selectedOption, setSelectedOption] = useState('fixed');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };


    useEffect(()=>{
        axios.get('https://api.coincap.io/v2/assets?limit=10')
            .then(res => {
                const data = res.data.data
                setCoins(data)
                setCopiedCoins(data)
                console.log([...data])
                if (data.length > 1) {
                    setActiveCoin1(data[0].id);
                    setActiveCoin2(data[1].id);
                }
            })
    }, []);


    useEffect(() => {
        if (lastChanged === 'amount2') {
            if (amount2 === '') {
                setAmount1('0');
            } else if (activeCoin1 && activeCoin2 && amount2) {
                const coin1 = coins.find(coin => coin.id === activeCoin1);
                const coin2 = copiedCoins.find(coin => coin.id === activeCoin2);

                if (coin1 && coin2) {
                    const price1 = parseFloat(coin1.priceUsd);
                    const price2 = parseFloat(coin2.priceUsd);
                    const calculatedAmount1 = (parseFloat(amount2) * price2 / price1).toFixed(2);
                    setAmount1(calculatedAmount1);
                }
            }
        }
    }, [activeCoin1, activeCoin2, amount2, coins, copiedCoins, lastChanged]);


    useEffect(() => {
        if (lastChanged === 'amount1' || lastChanged === 'selectedOption') {
            if (amount1 === '') {
                setAmount2('0.00');
            } else if (activeCoin1 && activeCoin2 && amount1) {
                const coin1 = coins.find(coin => coin.id === activeCoin1);
                const coin2 = copiedCoins.find(coin => coin.id === activeCoin2);

                if (coin1 && coin2) {
                    const price1 = parseFloat(coin1.priceUsd);
                    const price2 = parseFloat(coin2.priceUsd);
                    if (selectedOption === 'fixed'){
                        const calculatedAmount2 = ((parseFloat(amount1) * price1 / price2) * 0.99).toFixed(8);
                        setAmount2(calculatedAmount2);
                    }
                    else {
                        const calculatedAmount2 = ((parseFloat(amount1) * price1 / price2) * 0.995).toFixed(8);
                        setAmount2(calculatedAmount2);
                    }
                }
            }
        }
    }, [activeCoin1, activeCoin2, amount1, coins, copiedCoins, lastChanged, selectedOption]);

    const [address, setAddress] = useState('');
    const [isValid, setIsValid] = useState(null);

    const validateAddress = () => {
        const web3 = new Web3();
        const isValid = web3.utils.isAddress(address);
        setIsValid(isValid);
    };




    const toggleMenu1 = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenu2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleCoin1 = (coinId) =>{
        setActiveCoin1(coinId);
    }

    const toggleCoin2 = (coinId) =>{
        setActiveCoin2(coinId);
    }

    const handleClick1 = (coinId) => {
        toggleMenu1();
        toggleCoin1(coinId)
    };
    const handleClick2 = (coinId) => {
        toggleMenu2();
        toggleCoin2(coinId)
    };

    const handleAmount1Change = (e) => {
        const value1 = e.target.value;
        setAmount1(value1);
        setLastChanged('amount1');
    };

    const handleAmount2Change = (e) => {
        const value2 = e.target.value;
        setAmount2(value2);
        setLastChanged('amount2');
    };

    const [nearPrice, setNearPrice] = useState('');
    const [selectedCoin1, setSelectedCoin1] = useState('');
    const [nearPrice2, setNearPrice2] = useState('');
    const [selectedCoin2, setSelectedCoin2] = useState('');

    let findCoinById = (coinId) => {
        return coins.find(coin => coin.id === coinId);
    };

    const updateExchangeDetails = (coinId1, coinId2) => {
        if (coins.length > 0 && coinId1 && coinId2) {
            let coin1 = findCoinById(coinId1);
            let coin2 = findCoinById(coinId2);
            if (coin1 && coin2) {
                let price1 = parseFloat(coin1.priceUsd);
                let price2 = parseFloat(coin2.priceUsd);
                let newNearPrice = (price1 / price2).toFixed(6);
                let newNearPrice2 = (price2 / price1).toFixed(6);
                let newSelectedCoin1 = coin1.symbol;
                let newSelectedCoin2 = coin2.symbol;

                setNearPrice(newNearPrice);
                setNearPrice2(newNearPrice2);
                setSelectedCoin1(newSelectedCoin1);
                setSelectedCoin2(newSelectedCoin2);
            }
        }
    };





    return (
        <div id={'wrapper'} className={`max-w-none min-w-fit py-0 px-[1em] mx-auto my-0 w-full box-border`}>

            <div id={'exchange-form-outer'} className={'pb-[10em] mt-[3em] w-full mx-auto max-w-[860px] relative z-10 outline-0 text-white text-[12px]'}>

                <h1 className={' font-[Verdana] text-[1.9em] mb-[1em] font-semibold text-center indent-0 block mx-auto text-transparent bg-clip-text bg-grad leading-[1.15em] p-0 outline-0 max-w-[19em]'}
                >Lightning cryptocurrency exchange</h1>

                <form id={'exchange-form'}>

                    <ExchangeAmount
                        coins={coins} copiedCoins={copiedCoins}
                        handleAmount1Change={handleAmount1Change} handleAmount2Change={handleAmount2Change}
                        handleClick1={handleClick1} handleClick2={handleClick2}
                        isOpen={isOpen} isOpen2={isOpen2}
                        activeCoin1={activeCoin1} activeCoin2={activeCoin2}
                        toggleMenu1={toggleMenu1} toggleMenu2={toggleMenu2}
                        amount1={amount1} amount2={amount2} findCoinById={findCoinById}
                        updateExchangeDetails={updateExchangeDetails}
                        nearPrice={nearPrice} nearPrice2={nearPrice2}
                        selectedCoin1={selectedCoin1} selectedCoin2={selectedCoin2}
                        selectedOption={selectedOption}
                    />
                    <ExchangeAdress address={address} setAddress={setAddress} isValid={isValid}/>
                    <ExchangeWrapper validateAdress={validateAddress} selectedOption={selectedOption} handleOptionChange={handleOptionChange}/>
                    <ExchangeTerms/>
                </form>
            </div>
        </div>
    );
};

export default ExchangeForm;
