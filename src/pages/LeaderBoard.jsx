import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library
import "../styles/LeaderBoard.css";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TollIcon from '@mui/icons-material/Toll';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import FactCheckIcon from '@mui/icons-material/FactCheck';

function LeaderBoard() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    };

  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        setRates(data.rates);
        renderGraph(data.rates);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const renderGraph = (rates) => {
    const labels = Object.keys(rates);
    const values = Object.values(rates);

    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Exchange Rate (USD)',
          data: values,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  return (
    <div className='dashboard'>
      <div className='welcome'>
        <p>Welcome Back, User!</p>
      </div>
      <div className='graphs'>
      <div className='graph'>
        <p> ₹ 1,466.271 - 17.64 USD</p>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
      <div className='portfolio'>
        <div className='start'>
        <p>User's Portfolio</p>
        </div>
        <div className='money'>
        <p> Balance - ₹ 1,466.271</p>
        </div>
        <div className='collection'>
            <div className='bitcoin'>
            <CurrencyBitcoinIcon style={{ color: 'orange', fontSize: '55px' }} />
            <p>Bitcoin  |  0.000242 BTC - ₹ 1387.28</p>
            </div>
            <div className='bitcoin'>
            <MonetizationOnIcon style={{ color: 'grey', fontSize: '55px' }} />
            <p>Litecoin  |  0.000242 LTC - ₹ 1.70</p>
            </div>
            <div className='bitcoin'>
            <TollIcon style={{ color: 'blue', fontSize: '55px' }} />
            <p>Ripple  |  0.000242 XRP - ₹ 0.011</p>
            </div>
            <div className='bitcoin'>
            <SettingsEthernetIcon style={{ color: 'purple', fontSize: '55px' }} />
            <p>Ethereum  |  0.000242 ETH - ₹ 77.56</p>
            </div>
        </div>
      </div>
      </div>
      <div className='backtest'>
        <div className='top'>
            <div className='topper'>
            <FactCheckIcon style={{ color: '#2A629A', fontSize: '50px' }}/>
            <p>Basic Backtest</p>
            </div>
            <div className='right-top'>
                <p>Slippage</p>
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                    0%
                </button>
                {isOpen && (
                    <div className="dropdown-menu">
                        <a href="#option1" className="dropdown-item">0%</a>
                        <a href="#option2" className="dropdown-item">0.5%</a>
                        <a href="#option3" className="dropdown-item">1%</a>
                    </div>
                )}
            </div>
        </div>
        <div className='backtest-table'>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Calmar Ratio</th>
                    <th>Overall Profit</th>
                    <th>Avg. Daily Profit</th>
                    <th>Win % (Day)</th>
                    <th>Price (Rs)</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Selling with re entr</td>
              <td>3.96</td>
              <td>381845</td>
              <td>319.54</td>
              <td>0.65</td>
              <td>-</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Selling with re entr</td>
              <td>3.96</td>
              <td>381845</td>
              <td>319.54</td>
              <td>0.65</td>
              <td>-</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Selling with re entr</td>
              <td>3.96</td>
              <td>381845</td>
              <td>319.54</td>
              <td>0.65</td>
              <td>-</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Selling with re entr</td>
              <td>3.96</td>
              <td>381845</td>
              <td>319.54</td>
              <td>0.65</td>
              <td>-</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Selling with re entr</td>
              <td>3.96</td>
              <td>381845</td>
              <td>319.54</td>
              <td>0.65</td>
              <td>-</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Selling with re entr</td>
              <td>3.96</td>
              <td>381845</td>
              <td>319.54</td>
              <td>0.65</td>
              <td>-</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Selling with re entr</td>
              <td>3.96</td>
              <td>381845</td>
              <td>319.54</td>
              <td>0.65</td>
              <td>-</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Selling with re entr</td>
              <td>3.96</td>
              <td>381845</td>
              <td>319.54</td>
              <td>0.65</td>
              <td>-</td>
              <td>
                <button>View</button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
