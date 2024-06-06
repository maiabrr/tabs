    import React, { useState } from 'react';

    const Tabs = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index, callback) => {
        setActiveTabIndex(index);
        if (callback) {
        callback();
        }
    };

    return (
        <div>
        <div className="tab-headers">
            {tabs.map((tab, index) => (
            <button
                key={index}
                className={`tab-header ${index === activeTabIndex ? 'active' : ''}`}
                onClick={() => handleTabClick(index, tab.onClick)}
            >
                {tab.label}
            </button>
            ))}
        </div>
        <div className="tab-content">
            <div className="tab-content-inner">
            {tabs[activeTabIndex].content}
            </div>
        </div>
        </div>
    );
    };

    export default Tabs;
