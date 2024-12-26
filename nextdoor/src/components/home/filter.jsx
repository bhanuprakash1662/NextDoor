import React, { useState } from 'react';

const FilterComponent = ({ data, onFilter }) => {
  const costRanges = [400, 500, 700, 800, 1000, 1500, 2000, 2500, 3000, 4000];
  const [selectedCosts, setSelectedCosts] = useState([]);

  const handleCheckboxChange = (cost) => {
    const updatedCosts = selectedCosts.includes(cost)
      ? selectedCosts.filter((c) => c !== cost) // Remove if already selected
      : [...selectedCosts, cost]; // Add if not selected

    setSelectedCosts(updatedCosts);
    // Pass the filtered data to the parent component
    onFilter(updatedCosts);
  };

  return (
    <div>
      <h3>Filter by Cost</h3>
      <div className="cost-filter">
        {costRanges.map((cost) => (
          <div key={cost} className="checkbox-item">
            <input
              type="checkbox"
              id={`cost-${cost}`}
              value={cost}
              checked={selectedCosts.includes(cost)}
              onChange={() => handleCheckboxChange(cost)}
            />
            <label htmlFor={`cost-${cost}`}>{`₹${cost}`}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
