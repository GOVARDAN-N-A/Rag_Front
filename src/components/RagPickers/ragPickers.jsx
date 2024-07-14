// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FindRagPickersByCity = () => {
//   const [city, setCity] = useState('');
//   const [ragPickers, setRagPickers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedRagPicker, setSelectedRagPicker] = useState(null);

//   useEffect(() => {
//     // Fetch rag pickers when component mounts
//     fetchRagPickers();
//   }, []);

//   const fetchRagPickers = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:3001/ragpickers?city=${city}`);
//       setRagPickers(response.data);
//     } catch (error) {
//       console.error('Error fetching rag pickers:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     fetchRagPickers();
//   };

//   const handleAssignJob = async (ragPickerId) => {
//     try {
//       const response = await axios.put(`http://localhost:3001/ragpickers/${ragPickerId}/assign-job`);
//       console.log('Response:', response.data); // Log successful response
  
//       // Update ragPickers state immutably
//       setRagPickers(ragPickers.map(picker => picker._id === response.data._id ? response.data : picker));
//       setSelectedRagPicker(response.data._id);
//     } catch (error) {
//       console.error('Error assigning job:', error.response); // Log error response
//     }
//   };
  
//   const handleRatePicker = async (ragPickerId, ratingValue) => {
//     try {
//       const response = await axios.put(`http://localhost:3001/ragpickers/${ragPickerId}/rate`, { rating: ratingValue });
//       console.log('Response:', response.data); // Log successful response
  
//       // Update ragPickers state immutably
//       setRagPickers(ragPickers.map(picker => picker._id === response.data._id ? response.data : picker));
//     } catch (error) {
//       console.error('Error rating picker:', error.response); // Log error response
//     }
//   };
  
//   return (
//     <section style={{ minHeight: '100vh', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <div style={{ margin: '0 auto', maxWidth: '1000px', width: '100%', padding: '20px' }}>
//         <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//           <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '28px', marginBottom: '10px' }}>Find Rag Pickers by City</h2>
//           <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <input
//                 type="text"
//                 style={{ padding: '10px', borderRadius: '25px', border: '1px solid #ccc', marginRight: '10px', width: '60%' }}
//                 placeholder="Enter City Name"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 style={{ padding: '10px 20px', borderRadius: '25px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
//                 disabled={loading}
//               >
//                 {loading ? 'Searching...' : 'Search'}
//               </button>
//             </div>
//           </form>

//           {ragPickers.length === 0 && !loading && (
//             <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', textAlign: 'center' }}>No rag pickers found in the specified city.</p>
//           )}
//         </div>

//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//           {ragPickers.map((picker) => (
//             <div key={picker._id} style={{ width: 'calc(25% - 20px)', margin: '10px', minWidth: '200px' }}>
//               <div style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', padding: '20px', textAlign: 'center' }}>
//                 <img
//                   src={`http://localhost:3001/profile-picture/${picker._id}`}
//                   alt="Profile"
//                   style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }}
//                 />
//                 <h5 style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{picker.fullName}</h5>
//                 <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', marginBottom: '15px' }}>{picker.city}</p>
//                 {!picker.tasksAssigned && (
//                   <button
//                     style={{
//                       padding: '8px 20px', borderRadius: '25px', backgroundColor: selectedRagPicker === picker._id ? '#28a745' : '#007bff', color: '#fff', border: 'none', cursor: 'pointer'
//                     }}
//                     onClick={() => handleAssignJob(picker._id)}
//                     disabled={selectedRagPicker === picker._id}
//                   >
//                     {selectedRagPicker === picker._id ? 'Assigned' : 'Assign Job'}
//                   </button>
//                 )}
//                 {picker.tasksAssigned && (
//                   <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', marginTop: '15px' }}>On Work</p>
//                 )}
//                 <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
//                   <div>
//                     <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', marginBottom: '5px' }}>Ratings</p>
//                     <div>
//                       {[...Array(5)].map((star, index) => {
//                         const ratingValue = index + 1;
//                         return (
//                           <span
//                             key={index}
//                             style={{
//                               fontSize: '24px',
//                               cursor: 'pointer',
//                               color: ratingValue <= picker.ratings ? '#ffc107' : '#e4e5e9'
//                             }}
//                             onClick={() => handleRatePicker(picker._id, ratingValue)}
//                           >
//                             ★
//                           </span>
//                         );
//                       })}
//                     </div>
//                   </div>
//                   <div>
//                     <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', marginBottom: '5px' }}>Total Jobs</p>
//                     <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold' }}>{picker.totalAssignedJobs}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FindRagPickersByCity;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindRagPickersByCity = () => {
  const [city, setCity] = useState('');
  const [ragPickers, setRagPickers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRagPicker, setSelectedRagPicker] = useState(null);
  const [assignedPicker, setAssignedPicker] = useState(null); // Track assigned picker locally

  // Additional state to store rag pickers with rating, price, and totalAssignedJobs
  const [ragPickersData, setRagPickersData] = useState([]);

  useEffect(() => {
    // Fetch rag pickers when component mounts
    fetchRagPickers();
  }, []);

  useEffect(() => {
    // Update ragPickersData when ragPickers state changes
    setRagPickersData(
      ragPickers.map(picker => ({
        ...picker,
        rating: 5, // Manually set rating to 5 stars
        price: 500, // Fixed price Rs. 500
        totalAssignedJobs: 5, // Manually set total assigned jobs
      }))
    );
  }, [ragPickers]);

  const fetchRagPickers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3001/ragpickers?city=${city}`);
      setRagPickers(response.data);
    } catch (error) {
      console.error('Error fetching rag pickers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    fetchRagPickers();
  };

  const handleAssignJob = async (ragPickerId) => {
    try {
      // Simulate the assignment locally without calling the server directly
      setSelectedRagPicker(ragPickerId);
      setAssignedPicker(ragPickerId);
    } catch (error) {
      console.error('Error assigning job:', error.response); // Log error response
    }
  };

  const handleRatePicker = (ragPickerId, ratingValue) => {
    const updatedRagPickersData = ragPickersData.map(picker => {
      if (picker._id === ragPickerId) {
        return { ...picker, rating: ratingValue };
      }
      return picker;
    });
    setRagPickersData(updatedRagPickersData);
  };

  const handlePriceAssignment = (ragPickerId, priceValue) => {
    const updatedRagPickersData = ragPickersData.map(picker => {
      if (picker._id === ragPickerId) {
        return { ...picker, price: priceValue };
      }
      return picker;
    });
    setRagPickersData(updatedRagPickersData);
  };

  return (
    <section style={{ minHeight: '100vh', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ margin: '0 auto', maxWidth: '1000px', width: '100%', padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '28px', marginBottom: '10px' }}>Find Rag Pickers by City</h2>
          <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <input
                type="text"
                style={{ padding: '10px', borderRadius: '25px', border: '1px solid #ccc', marginRight: '10px', width: '60%' }}
                placeholder="Enter City Name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button
                type="submit"
                style={{ padding: '10px 20px', borderRadius: '25px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
                disabled={loading}
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>

          {ragPickers.length === 0 && !loading && (
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', textAlign: 'center' }}>No rag pickers found in the specified city.</p>
          )}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {ragPickersData.map((picker) => (
            <div key={picker._id} style={{ width: 'calc(25% - 20px)', margin: '10px', minWidth: '200px' }}>
              <div style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', padding: '20px', textAlign: 'center' }}>
                <img
                  src={`http://localhost:3001/profile-picture/${picker._id}`}
                  alt="Profile"
                  style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }}
                />
                <h5 style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{picker.fullName}</h5>
                <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', marginBottom: '15px' }}>{picker.city}</p>
                {!picker.tasksAssigned && (
                  <button
                    style={{
                      padding: '8px 20px', borderRadius: '25px', backgroundColor: assignedPicker === picker._id ? '#28a745' : '#007bff', color: '#fff', border: 'none', cursor: 'pointer'
                    }}
                    onClick={() => handleAssignJob(picker._id)}
                    disabled={assignedPicker === picker._id}
                  >
                    {assignedPicker === picker._id ? 'Assigned' : 'Assign Job'}
                  </button>
                )}
                {picker.tasksAssigned && (
                  <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', marginTop: '15px' }}>On Work</p>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
                  <div>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', marginBottom: '5px' }}>Ratings</p>
                    <div>
                      {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                          <span
                            key={index}
                            style={{
                              fontSize: '24px',
                              cursor: 'pointer',
                              color: ratingValue <= picker.rating ? '#ffc107' : '#e4e5e9'
                            }}
                            onClick={() => handleRatePicker(picker._id, ratingValue)}
                          >
                            ★
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', marginBottom: '5px' }}>Total Jobs</p>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold' }}>{picker.totalAssignedJobs}</p>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', marginBottom: '5px', marginTop: '10px' }}>Assign Price</p>
                    <input
                      type="text"
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '60%', textAlign: 'center' }}
                      placeholder="Enter Price"
                      value={picker.price}
                      onChange={(e) => handlePriceAssignment(picker._id, e.target.value)} disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindRagPickersByCity;
