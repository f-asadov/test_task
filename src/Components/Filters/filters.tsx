import React, { useState } from 'react';
import './filters.style.css'
function Filters() {
    const [selectedCurrency, setSelectedCurrency] = useState('RUB'); // Начально выбранная валюта

    const handleCurrencyClick = (currency: string) => {
        setSelectedCurrency(currency);
    };


    return (
        <div className="filters">
            <div className='currency-wrapper'>
                <label htmlFor="currency-buttons-wrapper">Валюта</label>
                <div className="currency-buttons-wrapper" id="currency-buttons-wrapper">

                    <button
                        className={`currency-button ${selectedCurrency === 'RUB' ? 'selected' : ''}`}
                        onClick={() => handleCurrencyClick('RUB')}
                    >
                        RUB
                    </button>
                    <button
                        className={`currency-button ${selectedCurrency === 'USD' ? 'selected' : ''}`}
                        onClick={() => handleCurrencyClick('USD')}
                    >
                        USD
                    </button>
                    <button
                        className={`currency-button ${selectedCurrency === 'EUR' ? 'selected' : ''}`}
                        onClick={() => handleCurrencyClick('EUR')}
                    >
                        EUR
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Filters;
