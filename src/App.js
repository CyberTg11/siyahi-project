import React, { useState, useEffect } from 'react';

const Workers = () => {
  const [workers, setWorkers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then(response => response.json())
      .then(data => setWorkers(data))
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  
  const searchWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div>
      <div>
        <label>Axtarış:
          <input type="text" value={searchTerm} onChange={handleSearch} />
        </label>
      </div>
      <ul>
        {searchWorkers.map(worker => (
          <li key={worker.id}>
            {worker.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workers;