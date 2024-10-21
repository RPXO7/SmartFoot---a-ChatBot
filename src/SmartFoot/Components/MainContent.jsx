






// src/SmartFoot/Components/MainContent.jsx
// import { useSelector } from 'react-redux';

const MainContent = () => {
  // const { results, loading, error } = useSelector((state) => state.search || {});

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;
  // if (!results || !results.length) return <div>No results found.</div>;

  return (
    <></>
    // <div>
    //   {results.map((player) => (
    //     <div key={player.id}>{player.name}</div>
    //   ))}
    // </div>
  );
};

export default MainContent;












// version 2---------------------------

// import PropTypes from 'prop-types'; // Import PropTypes

// const MainContent = ({ data }) => {
//   return (
//     <div className="max-w-4xl mx-auto">
//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
//         <ul>
//           {data && data.length > 0 ? (
//             data.map((item, index) => (
//               <li key={index}>{item.player.name}</li> // Adjust according to your data structure
//             ))
//           ) : (
//             <li>No results found.</li>
//           )}
//         </ul>
//       </section>
//     </div>
//   );
// };

// // Adding prop-types validation for 'data', 'data.length', and 'data.map'
// MainContent.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       player: PropTypes.shape({
//         name: PropTypes.string.isRequired, // Assuming each player has a 'name' property
//       }),
//     })
//   ),
// };

// MainContent.defaultProps = {
//   data: [], // Default value in case data is undefined or null
// };

// export default MainContent;



// import { useState } from "react";
// import SearchBar from "./SearchBar";
// import { fetchSportsData } from "./FatchQueryData";

// const MainContent = () => {

//     const [results, setResults] = useState(null);

//   const handleSearch = async (query) => {
//     const data = await fetchSportsData(query);
//     setResults(data);
//   };
//   return (

//     <div className="max-w-4xl mx-auto">

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
//         {results ? (
//             <div>
//             {/* Display data from the API */}
//             {results.response.map((player) => (
//                 <div key={player.player.id} className="mb-4">
//                 <p>Name: {player.player.name}</p>
//                 <p>Team: {player.statistics[0].team.name}</p>
//                 <p>Position: {player.statistics[0].games.position}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//             <p>No results yet.</p>
//         )}
//       </section>
//         <SearchBar onSearch={handleSearch} />
//     </div>



    // <div className="max-w-4xl mx-auto">
    //   <section className="mb-12">
    //     <h2 className="text-2xl font-semibold mb-4">Examples</h2>
    //     <ul>
    //       <li>&quot;Who has scored most goals in Laliga?&quot;</li>
    //       <li>&quot;Better Player, Messi or Ronaldo?&quot;</li>
    //       <li>&quot;How to get better at Dribbling?&quot;</li>
    //     </ul>
    //   </section>

    //   <section className="mb-12">
    //     <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
    //     <ul>
    //       <li>Remembers what user said earlier in the conversation.</li>
    //       <li>Allows user to provide follow-up corrections.</li>
    //       <li>Trained to decline inappropriate requests.</li>
    //     </ul>
    //   </section>

    //   <section className="mb-12">
    //     <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
    //     <ul>
    //       <li>May occasionally generate incorrect information.</li>
    //       <li>May occasionally produce harmful instructions or biased content.</li>
    //       <li>Limited knowledge of world and events after 2021.</li>
    //     </ul>
    //   </section>

    //   <div className="text-center mt-24">
    //     <p>Where Knowledge Evolves</p>
    //     <div className="bg-gray-300 h-24 w-24 mx-auto mt-4 rounded-full flex items-center justify-center">
    //       <p>Company Logo</p>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default MainContent;
