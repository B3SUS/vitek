import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ExchangeAmount} from "./ExchangeAmount";
import {ExchangeAdress} from "./exchangeAdress";
import {ExchangeWrapper} from "./ExchangeWrapper";
import {ExchangeTerms} from "./ExchangeTerms";
import btc from '../svg/bitcoin-ico.png'
import bnb from '../svg/bnb.png'
import dogecoin from '../svg/dogecoin.png'
import ethereum from '../svg/ethereum.png'
import litecoin from '../svg/litecoin.png'
import monero from '../svg/monero.png'
import shibainu from '../svg/shiba-inu.png'
import solana from '../svg/solana.png'
import tether from '../svg/tether.png'
import avalanche from '../svg/avalanche.png'
import tron from '../svg/tron.png'
import polka from '../svg/polkadot.png'
import cardano from '../svg/cardano.png'
import xrp from '../svg/xrp.png'
import near from '../svg/near.png'
import usdc from '../svg/usdc.png'
import ruble from '../svg/ruble.png'
import lari from '../svg/lari.png'
import WAValidator from "multicoin-address-validator";



const ExchangeForm = () => {




    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    useEffect(() => {
        if (isOpen || isOpen2) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen, isOpen2]);

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



    const neededCoins = ['bitcoin', 'ethereum', 'tether', 'binance-coin', 'solana', 'usd-coin', 'xrp', 'dogecoin', 'shiba-inu', 'cardano', 'avalanche', 'tron', 'polkadot', 'near-protocol', 'litecoin', 'monero'];

    const coinColors = {

        'bitcoin': '#f7931a',
        'ethereum': '#fff',
        'tether': '#53ae94',
        'binance-coin': '#ffcc4c',
        'solana': '#a364fc',
        'usd-coin': '#2775ca',
        'xrp': '#0c89ca',
        'dogecoin': '#ba9f33',
        'shiba-inu': '#f4a816',
        'cardano': '#fff',
        'avalanche': '#ca443c',
        'tron': '#ff2e4b',
        'polkadot': '#e6007a',
        'near-protocol': '#8B9467',
        'litecoin': '#497ed1',
        'monero': '#e06b1a',
    };

    const coinIcons ={
        'bitcoin': btc,
        'ethereum': ethereum,
        'tether': tether,
        'binance-coin': bnb,
        'solana': solana,
        'usd-coin': usdc,
        'xrp': xrp,
        'dogecoin': dogecoin,
        'shiba-inu': shibainu,
        'cardano': cardano,
        'avalanche': avalanche,
        'tron': tron,
        'polkadot': polka,
        'near-protocol': near,
        'litecoin': litecoin,
        'monero': monero,
    }

    const ratesColors = {
        'russian-ruble': '#B3404A',
        'georgian-lari': '#2E58FF'
    }

    const ratesIcon = {
        'russian-ruble' : ruble,
        'georgian-lari': lari,
    }

    useEffect(() => {
        const fetchAssets = axios.get(`https://api.coincap.io/v2/assets/?ids=${neededCoins.join(',')}`);
        const fetchRates = axios.get('https://api.coincap.io/v2/rates');

        Promise.all([fetchAssets, fetchRates])
            .then(responses => {
                const assetsData = responses[0].data.data;
                const ratesData = responses[1].data.data;

                // Фільтруємо курси для рубля і ларі
                const filteredRates = ratesData.filter(rate => rate.id === 'russian-ruble' || rate.id === 'georgian-lari');

                // Об'єднуємо дані про активи та курси
                const combinedData = [
                    ...assetsData.map(asset => ({
                        ...asset,
                        color: coinColors[asset.id],
                        icon: coinIcons[asset.id],
                        type: 'crypto'
                    })),
                    ...filteredRates.map(rate => ({
                        id: rate.id,
                        name: rate.symbol,
                        priceUsd: rate.rateUsd,
                        color: ratesColors[rate.id],
                        icon: ratesIcon[rate.id],
                        type: 'fiat',
                        symbol: rate.symbol
                    }))
                ];

                setCoins(combinedData);
                setCopiedCoins(combinedData);

                if (assetsData.length > 1) {
                    setActiveCoin1(assetsData[0].id);
                    setActiveCoin2(assetsData[1].id);
                }
            })
            .catch(err => console.error(err));
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
                    setSelectedPrice1(price1);
                    setSelectedPrice2(price2);
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





    const toggleMenu1 = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenu2 = () => {
        setIsOpen2(!isOpen2);
    };

    const toggleCoin1 = (coinId) =>{
        if (coinId === activeCoin2){
            setActiveCoin2(activeCoin1)
        }
        setActiveCoin1(coinId);
    }

    const toggleCoin2 = (coinId) =>{
        if (coinId === activeCoin1){
            setActiveCoin1(activeCoin2)
        }
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
        const value = e.target.value.replace(/,/g, '');
        if(/^[0-9]*\.?[0-9]*$/.test(value)){
            setAmount1(value);
            setLastChanged('amount1');
        }
    };

    const handleAmount2Change = (e) => {
        const value = e.target.value.replace(/,/g, '');
        setAmount2(value);
        setLastChanged('amount2');
    };

    const [nearPrice, setNearPrice] = useState('');
    const [nearPrice2, setNearPrice2] = useState('');
    const [selectedCoin1, setSelectedCoin1] = useState('');
    const [selectedCoin2, setSelectedCoin2] = useState('');

    const [selectedPrice1, setSelectedPrice1] = useState('');
    const [selectedPrice2, setSelectedPrice2] = useState('');

    const [selectedName1, setSelectedName1] = useState('');
    const [selectedName2, setSelectedName2] = useState('');

    const [selectedColor1, setSelectedColor1] = useState('')
    const [selectedColor2, setSelectedColor2] = useState('')

    const [selectedIcon1, setSelectedIcon1] = useState('')
    const [selectedIcon2, setSelectedIcon2] = useState('')

    const [selectedId2, setSelectedId2] = useState('')




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
                let newSelectedName1 = coin1.name;
                let newSelectedName2 = coin2.name;
                let newSelectedColor1 = coin1.color;
                let newSelectedColor2 = coin2.color;
                let newSelectedIcon1 = coin1.icon;
                let newSelectedIcon2 = coin2.icon;
                let newSelectedId2 = coin2.id;


                setNearPrice(newNearPrice);
                setNearPrice2(newNearPrice2);
                setSelectedCoin1(newSelectedCoin1);
                setSelectedCoin2(newSelectedCoin2);
                setSelectedName1(newSelectedName1);
                setSelectedName2(newSelectedName2);
                setSelectedColor1(newSelectedColor1);
                setSelectedColor2(newSelectedColor2);
                setSelectedIcon1(newSelectedIcon1);
                setSelectedIcon2(newSelectedIcon2);
                setSelectedId2(newSelectedId2);


            }
        }
    };

    const [address, setAddress] = useState('');

    if (neededCoins.includes(selectedId2) && address !== '') {
        var valid = WAValidator.validate(address, selectedName2, 'prod');
    }

    const handleAddressChange = (newAddress) => {
        setAddress(newAddress);

        if (neededCoins.includes(selectedId2) && newAddress !== '') {
            const isValidAddress = WAValidator.validate(newAddress, selectedName2, 'prod');
            setValidError(!isValidAddress);
            console.log(validError)

        }

    };

    const switchCoins = (coinId) =>{
        let temp = activeCoin2;
        setActiveCoin2(coinId);
        setActiveCoin1(temp);
    }

    const [validError, setValidError] = useState(true);




    return (
        <div id={'wrapper'} className={`max-w-none min-w-fit py-0 px-[1em] mx-auto my-0 w-full box-border md:max-w-[1280px] md:px-[2em]`}>

            <div id={'exchange-form-outer'} className={'pb-[10em] md:pb-[16em] mt-[3em] md:mt-[4.4em] w-full mx-auto max-w-[860px] relative outline-0 text-white text-[12px] md:text-[16px]'}>

                <h1 className={' font-[MontSemi] text-[1.9em] md:text-[2.6em] mb-[1em] text-center indent-0 block mx-auto text-transparent bg-clip-text bg-grad leading-[1.15em] p-0 outline-0 max-w-[19em]'}
                >Lightning cryptocurrency exchange </h1>

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
                        selectedOption={selectedOption} selectedPrice1={selectedPrice1} selectedPrice2={selectedPrice2}
                        selectedColor1={selectedColor1} selectedColor2={selectedColor2}
                        switchCoins={switchCoins} selectedIcon1={selectedIcon1} selectedIcon2={selectedIcon2}
                        handleAddressChange={handleAddressChange}
                        setValidError={setValidError} valid={valid}
                    />
                    <ExchangeAdress address={address} setAddress={setAddress} activeCoin2={activeCoin2} selectedName1={selectedName1} selectedName2={selectedName2} valid={valid} validError={validError} setValidError={setValidError} handleAddressChange={handleAddressChange}/>
                    <ExchangeWrapper selectedOption={selectedOption} handleOptionChange={handleOptionChange} activeCoin2={activeCoin2} valid={valid} setValidError={setValidError} amount1={amount1} amount2={amount2} selectedCoin1={selectedCoin1} selectedCoin2={selectedCoin2} selectedIcon1={selectedIcon1} selectedIcon2={selectedIcon2} selectedColor1={selectedColor1} selectedColor2={selectedColor2} address={address}/>
                    <ExchangeTerms/>
                </form>
            </div>
        </div>
    );
};

export default ExchangeForm;
