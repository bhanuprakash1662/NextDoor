// import React, { useState, useEffect } from 'react';
import './DateSearchAndBook.css';

// const DateSearchAndBook = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [daysBooked, setDaysBooked] = useState(null);
//   const [error, setError] = useState('');

//   const handleSearch = () => {
//     if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
//       setError('End date cannot be earlier than start date.');
//     } else {
//       setError('');
//       console.log('Search term:', searchTerm);
//       console.log('Start date:', startDate);
//       console.log('End date:', endDate);
//     }
//   };

//   useEffect(() => {
//     if (startDate && endDate) {
//       const start = new Date(startDate);
//       const end = new Date(endDate);
//       if (start <= end) {
//         const diffTime = Math.abs(end - start);
//         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
//         setDaysBooked(diffDays);
//         setError('');
//       } else {
//         setDaysBooked(null);
//         setError('End date cannot be earlier than start date.');
//       }
//     } else {
//       setDaysBooked(null);
//     }
//   }, [startDate, endDate]);

//   const handleReset = () => {
//     setSearchTerm('');
//     setStartDate('');
//     setEndDate('');
//     setDaysBooked(null);
//     setError('');
//   };

//   return (
//     <div className="flex items-center gap-4 p-4 bg-brown-500 rounded-lg shadow-md text-white">
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search"
//         className="w-1/4 p-2 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
//       />
//       <input
//         type="date"
//         value={startDate}
//         onChange={(e) => setStartDate(e.target.value)}
//         className="p-2 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
//       />
//       <input
//         type="date"
//         value={endDate}
//         onChange={(e) => setEndDate(e.target.value)}
//         className="p-2 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
//       />
//       <button
//         onClick={handleSearch}
//         className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
//       >
//         Search
//       </button>
//       <button
//         onClick={handleReset}
//         className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-lg hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-600"
//       >
//         Reset
//       </button>
//       {error ? (
//         <span className="text-sm text-red-500">{error}</span>
//       ) : (
//         daysBooked !== null && (
//           <span className="text-sm text-gray-700">
//             {daysBooked} {daysBooked > 1 ? 'days' : 'day'} selected
//           </span>
//         )
//       )}
//     </div>
//   );
// };

// export default DateSearchAndBook;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DateSearchAndBook = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates.');
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      alert('End date cannot be earlier than start date.');
      return;
    }
    navigate('/rooms', {
      state: {
        searchTerm,
        startDate,
        endDate,
      },
    });
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="p-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="p-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="p-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button id='btn'
        onClick={handleSearch}
        className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default DateSearchAndBook;

