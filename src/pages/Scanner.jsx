import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Scanner.css";
import CancelIcon from '@mui/icons-material/Cancel';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import UpdateIcon from '@mui/icons-material/Update';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import PetsIcon from '@mui/icons-material/Pets';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const items = [
  { id: "1", subtitle: "Option scanners identify trading opportunities by filtering options based on specific criteria.", title: "Options Scanners", icon: <ShowChartIcon />, scanners: ["Scanner 1", "Scanner 2", "Scanner 3"] },
  { id: "2", subtitle: "Future scanners filter futures contracts to identify trading opportunities.", title: "Future Scanners", icon: <UpdateIcon />, scanners: ["Scanner A", "Scanner B", "Scanner C"] },
  { id: "3", subtitle: "Bullish scanners quickly identify potentially profitable bullish trading opportunities in the market.", title: "Bullish Scanners", icon: <CrisisAlertIcon />, scanners: ["Scanner X", "Scanner Y", "Scanner Z"] },
  { id: "4", subtitle: "Bearish scanners swiftly pinpoint potentially profitable bearish trading opportunities in the market.", title: "Bearish Scanners", icon: <PetsIcon />, scanners: ["Scanner D", "Scanner E", "Scanner F"] },
  { id: "5", subtitle: "Candlestick scanners swiftly identify trading opportunities based on candlestick patterns in the market.", title: "Candlestick Scanners", icon: <CandlestickChartIcon />, scanners: ["Scanner G", "Scanner H", "Scanner I"] },
  { id: "6", subtitle: "Most Loved Scanners.", title: "Top Loved", icon: <FavoriteBorderIcon />, scanners: ["Scanner J", "Scanner K", "Scanner L"] }
];

function Scanner() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="scanner">
      <div className="myscanner">
        <p>My Scanners</p>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Type</th>
              <th>Creation Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Example Scanner</td>
              <td>Type A</td>
              <td>2024-01-01</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="publicscanner">
        <div className="titlescan">
          <p>Public Scanners</p>
        </div>
        <div className="scanner-items">
          {items.map(item => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              className="scanner-item"
            >
              <motion.div className="item-title">
                {item.icon}
                <motion.p className="titl">{item.title}</motion.p>
              </motion.div>
              <motion.p className="subtitle">{item.subtitle}</motion.p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="scanner-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {items
                .filter(item => item.id === selectedId)
                .map(item => (
                  <div key={item.id}>
                    <motion.p>{item.title}</motion.p>
                    <motion.p>{item.subtitle}</motion.p>
                    <ul className="scanner-list">
                      {item.scanners.map((scanner, index) => (
                        <li key={index}>
                          <a href={`/scanner/${scanner}`} className="scanner-link">{scanner}</a>
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      onClick={() => setSelectedId(null)}
                      className="close-button"
                    >
                      <CancelIcon />
                    </motion.button>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Scanner;
