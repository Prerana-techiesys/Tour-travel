import React from 'react';
import './Type.css';





const regions = ["North India", "South India", "East India", "West India", "Central India"];

const Tabs = ({ activeTab, setActiveTab }) => {
    return (
      <>
        <div className="tabs">
            {regions.map((region, index) => (
                <button
                    key={index}
                    className={`tab ${activeTab === region ? 'active' : ''}`}
                    onClick={() => setActiveTab(region)}
                >
                    {region}
                </button>
            ))}


        </div> 

      
        </>
    );
};

export default Tabs;
