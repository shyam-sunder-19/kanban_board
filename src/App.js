import React, { useState, useEffect } from 'react'
import './App.css';
import DropDown from './components/dropdown';
import Navbar from './components/navbar';
import { fetchData } from './utils/api';
import Display from './components/display'

function App() {
  const [displayData, setDisplayData] = useState(null)
  const [loading, setLoading] = useState(true);
  const fetchDataFromAPI = async () => {
    try {
      setLoading(true);
      const res = await fetchData()
      console.log(res)
      setDisplayData(res)
      setLoading(false);
    } catch(error) {
      console.error('Error fetching data:', error)
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchDataFromAPI()
  }, [])
  const [grouping, setGrouping] = useState(() => {
      const storedGrouping = localStorage.getItem('grouping')
      return storedGrouping? storedGrouping : 'status'
  });
  const [ordering, setOrdering] = useState(() => {
      const storedOrdering = localStorage.getItem('ordering')
      return storedOrdering? storedOrdering : 'priority'
  });

  const handleGroupingChange = (e) => {
      setGrouping(e.target.value);
      console.log('Grouping changed:', e.target.value);
  };
  useEffect(() => {
      localStorage.setItem('grouping', grouping)
      setDisplayData(fetchData())
      fetchDataFromAPI()
  }, [grouping])

  const handleOrderingChange = (e) => {
      setOrdering(e.target.value);
      console.log('Ordering changed:', e.target.value);
  };
  useEffect(() => {
      localStorage.setItem('ordering', ordering)
      setDisplayData(fetchData())
      fetchDataFromAPI()
  }, [ordering])
  console.log(displayData)
  return (
    <div className="App">
      <Navbar dropDown={
        <DropDown 
          grouping={grouping} 
          ordering={ordering}
          handleGroupingChange={handleGroupingChange}
          handleOrderingChange={handleOrderingChange}    
        />
        }
      />
      <div>
          {
            loading ? <div>loading...</div> : <Display displayData={displayData} />
          }
      </div>
    </div>
  );
}

export default App;
