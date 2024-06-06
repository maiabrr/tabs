import React from 'react';
import Tabs from './components/tab';
import './tabs.css'

const App = () => {
  const tabs = [
    { label: 'Tab 1', content: 'Tab 1 content is showing here.', onClick: () => console.log('Tab 1 clicked') },
    { label: 'Tab 2', content: 'Tab 2 content is showing here.', onClick: () => console.log('Tab 2 clicked') },
    { label: 'Tab 3', content: 'Tab 3 content is showing here.', onClick: () => console.log('Tab 3 clicked') }
  ];

  return (
    <div className="App">
      <h1>Tabs Example</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
