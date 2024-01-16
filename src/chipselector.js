// src/ChipsSelector.js
import React, { useState, useRef, useEffect } from 'react';

const ChipsSelector = ({ items }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedChips, setSelectedChips] = useState([]);
  const [showList, setShowList] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showList) {
      inputRef.current.focus();
    }
  }, [showList]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowList(true);
    
  };

  const handleItemClick = (item) => {
    setSelectedChips([...selectedChips, item]);
    setInputValue('');
    setShowList(false);
    inputRef.current.focus();
  };

  const handleChipRemove = (chip) => {
    setSelectedChips(selectedChips.filter((item) => item !== chip));
  };

  const filteredItems = items.filter(
    (item) => !selectedChips.includes(item) && 
    (item.user.toLowerCase().includes(inputValue.toLowerCase()) ||
     item.email.toLowerCase().includes(inputValue.toLowerCase())
    )
  );

  return (
    <div>
      <div className='box'>
        {selectedChips.map((chip) => (
          <div key={chip.user} className="chip">
            <div className="text">
            <img src={chip.image} alt="Profile Pic" className="profile-pic" />
            
              <span>{chip.user}</span>
            
            
            <button className='button'onClick={() => handleChipRemove(chip)}>X</button>
            </div>
          </div>
        ))}
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowList(true)}
        onBlur={() => setShowList(true)} 
        
        ref={inputRef}
        placeholder="Add new user..."
        className='selected-chip' 
      />
      </div>
      {showList && (
        <ul>
          {filteredItems.map((item) => (
            <li key={item.user} onClick={() => handleItemClick(item)}>
              <div className="text">
              <img src={item.image} alt="Profile Pic" className="profile-pic" />
              
                <span>{item.user}</span>
                <span className='email'>{item.email}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChipsSelector;
