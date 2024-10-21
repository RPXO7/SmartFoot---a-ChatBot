// src/SmartFoot/Components/SearchBar.jsx

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateAnswer } from "../Redux/searchSlice"; // Import the clearChat action
import { LuSendHorizonal } from "react-icons/lu";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [formattedAnswer, setFormattedAnswer] = useState("");
  const [displayText, setDisplayText] = useState("");
  
  const dispatch = useDispatch();
  const { answer, loading, error, theme } = useSelector((state) => state.search || {});

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(generateAnswer(query));
  };

  // Typewriter effect
  useEffect(() => {
    if (formattedAnswer) {
      let index = 0;
      const typeWriter = setInterval(() => {
        setDisplayText((prev) => prev + formattedAnswer.charAt(index));
        index += 1;
        if (index >= formattedAnswer.length) {
          clearInterval(typeWriter); // Stop when all text is displayed
        }
      }, 5);
      return () => clearInterval(typeWriter); // Cleanup on unmount
    }
  }, [formattedAnswer]);

  // Format and set the answer with bullets and line breaks
  useEffect(() => {
    if (answer) {
      const formatted = formatResult(answer);
      setFormattedAnswer(formatted);
      setDisplayText(""); // Reset before typing starts
    }
  }, [answer]);

  // Clear the current conversation when the 'clearChat' action is dispatched
  useEffect(() => {
    if (!answer) {
      setFormattedAnswer("");
      setDisplayText("");
      setQuery(""); // Reset the input field too
    }
  }, [answer]);

  return (
    <div className={`mt-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {loading && <p className="mt-4 text-blue-500">Searching ...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {formattedAnswer && (
        <div className={`mt-4 p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} rounded shadow overflow-auto`}>
          <h3 className="font-bold mb-2">Search Result:</h3>

          {/* Display text gradually with the typewriter effect */}
          <div className={`result-box p-4 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'} rounded shadow-md max-w-full text-sm`}>
            <pre className="whitespace-pre-wrap break-words">{displayText}</pre>
          </div>
        </div>
      )}

      <div className="flex justify-center fixed bottom-8 mx-auto px-4 w-[80%]">
        <form
          onSubmit={handleSearch}
          className={`flex items-center w-3/5 relative hover:ring-1 ${theme === 'dark' ? 'hover:ring-white' : 'hover:ring-slate-700'} hover:rounded-lg`}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type message"
            className={`flex-grow p-3  rounded-l-md focus:outline-none ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'border-slate-700'} focus:ring-2 ${theme === 'dark' ? 'focus:ring-white' : 'focus:ring-slate-700'} hover:outline-1`}
          />
          <button
            type="submit"
            className="text-slate-400 px-6 rounded-r-md absolute right-0"
            disabled={loading}
          >
            {loading ? (
              "Searching..."
            ) : (
              <LuSendHorizonal className={`${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`} size={20} />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

// Function to format the answer by replacing stars with proper characters
const formatResult = (result) => {
  return result
    .replace(/\*\*/g, "") // Remove the double asterisks used for bold (markdown)
    .replace(/\*/g, "•") // Replace single stars with bullets
    .replace(/: /g, ": \n") // Add line break after colons for better readability
    .trim();
};

export default SearchBar;




// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { generateAnswer } from "../redux/searchSlice";
// import { LuSendHorizonal } from "react-icons/lu";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const [formattedAnswer, setFormattedAnswer] = useState("");
//   const [displayText, setDisplayText] = useState("");
//   const dispatch = useDispatch();
//   const { answer, loading, error } = useSelector((state) => state.search || {});

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     dispatch(generateAnswer(query));
//   };

//   // Typewriter effect
//   useEffect(() => {
//     if (formattedAnswer) {
//       let index = 0;
//       const typeWriter = setInterval(() => {
//         setDisplayText((prev) => prev + formattedAnswer.charAt(index));
//         index += 1;
//         if (index >= formattedAnswer.length) {
//           clearInterval(typeWriter); // Stop when all text is displayed
//         }
//       }, 5);
//       return () => clearInterval(typeWriter); // Cleanup on unmount
//     }
//   }, [formattedAnswer]);

//   // Format and set the answer with bullets and line breaks
//   useEffect(() => {
//     if (answer) {
//       const formatted = formatResult(answer);
//       setFormattedAnswer(formatted);
//       setDisplayText(""); // Reset before typing starts
//     }
//   }, [answer]);

//   return (
//     <div className="mt-4">
//       {loading && <p className="mt-4 text-blue-500">Searching ...</p>}
//       {error && <p className="text-red-500 mt-2">{error}</p>}

//       {formattedAnswer && (
//         <div className="mt-4 p-4 bg-gray-100 rounded shadow overflow-auto">
//           <h3 className="font-bold mb-2">Search Result:</h3>

//           {/* Display text gradually with the typewriter effect */}
//           <div className="result-box p-4 bg-white rounded shadow-md max-w-full text-sm">
//             <pre className="whitespace-pre-wrap break-words">{displayText}</pre>
//           </div>
//         </div>
//       )}

//       <div className="flex justify-center fixed bottom-8 mx-auto px-4 w-[80%]">
//         <form
//           onSubmit={handleSearch}
//           className="flex items-center w-3/5 relative hover:ring-1 hover:ring-slate-700 hover:rounded-lg"
//         >
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Type message"
//             className="flex-grow p-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-slate-700 hover:outline-1 hover:outline-slate-700"
//           />
//           <button
//             type="submit"
//             className="text-slate-400 px-6 rounded-r-md absolute right-0"
//             disabled={loading}
//           >
//             {loading ? (
//               "Searching..."
//             ) : (
//               <LuSendHorizonal className="hover:text-black" size={20} />
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Function to format the answer by replacing stars with proper characters
// const formatResult = (result) => {
//   return result
//     .replace(/\*\*/g, "") // Remove the double asterisks used for bold (markdown)
//     .replace(/\*/g, "•") // Replace single stars with bullets
//     .replace(/: /g, ": \n") // Add line break after colons for better readability
//     .trim();
// };

// export default SearchBar;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { generateAnswer } from "../redux/searchSlice";
// import { LuSendHorizonal } from "react-icons/lu";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch();
//   const { answer, loading, error } = useSelector((state) => state.search || {});

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     dispatch(generateAnswer(query));
//   };

//   useEffect(() => {
//     console.log("Current state:", { answer, loading, error });
//   }, [answer, loading, error]);

//   return (
//     <div className="mt-4">
//       {loading && <p className="mt-4 text-blue-500">Searching ...</p>}
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       {answer && (
//         <div className="mt-4 p-4 bg-gray-100 rounded shadow">
//           <h3 className="font-bold">Search Result:</h3>
//           <div className="result-box p-4 bg-white rounded shadow-md max-w-full text-sm">
//           <pre className="whitespace-pre-wrap break-words">
//               {answer}
//           </pre>
//         </div>
//         </div>
//       )}

//       <div className="flex justify-center fixed bottom-8 mx-auto px-4 w-[80%]">
//         <form onSubmit={handleSearch} className="flex items-center w-3/5 relative hover:ring-1 hover:ring-slate-700 hover:rounded-lg">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Type message"
//             className="flex-grow p-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-slate-700 hover:outline-1 hover:outline-slate-700"
//           />
//           <button
//             type="submit"
//             className="text-slate-400 px-6 rounded-r-md absolute right-0"
//             disabled={loading}
//           >
//             {loading ? "Searching..." : <LuSendHorizonal className="hover:text-black" size={20}/>
//             }
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

// // // src/SmartFoot/Components/SearchBar.jsx

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { generateAnswer } from "../redux/searchSlice";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch();
//   const { answer, loading, error } = useSelector((state) => state.search || {});

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     dispatch(generateAnswer(query));
//   };
//   useEffect(() => {
//     console.log("Current state:", { answer, loading, error });
//   }, [answer, loading, error]);

//   return (
//     <div className="mt-4">
//       {loading && <p className="mt-4 text-blue-500">Searching ...</p>}
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       {answer && (
//         <div className="mt-4 p-4 bg-gray-100 rounded">
//           <h3 className="font-bold">Search Result:</h3>
//           <pre>{answer}</pre>
//         </div>
//       )}
//       <div className="fixed bottom-12 w-full">
//         <form onSubmit={handleSearch} className="flex items-center">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Enter your query"
//             className="flex-grow p-2 border rounded-l"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white p-2 rounded-r"
//             disabled={loading}
//           >
//             {loading ? "Searching..." : "Search"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

// // import { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import axios from "axios";
// // import { FiSend, FiMic, FiImage } from "react-icons/fi";
// // import { searchStart, searchSuccess, searchError } from "../redux/searchSlice";
// // // const { GoogleGenerativeAI }  from '@google/generative-ai';

// // const SearchBar = () => {
// //   const [query, setQuery] = useState("");
// //   const [answer, setAnswer] = useState("");
// //   const [error, setError] = useState("");
// //   const dispatch = useDispatch();
// //   const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

// //   const generateAnswer =async() => {
// //     setAnswer("Loading...");
// //     const response = await axios({
// //       url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
// //       method: "post",
// //       data: {
// //         contents: [
// //           {
// //             parts: [
// //               {
// //                 text: query,
// //               },
// //             ],
// //           },
// //         ],
// //       },
// //     });
// //     setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
// //   }

// //   return (
// //     <>
// //       <div className="bg-gray-100 rounded-full flex items-center px-4 py-2 shadow-md">
// //         <FiMic className="text-gray-500 mr-2" size={20} />
// //         <FiImage className="text-gray-500 mr-2" size={20} />
// //         <input
// //           type="text"
// //           className="bg-transparent flex-grow outline-none text-gray-700"
// //           placeholder="Search for players, matches..."
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //         />
// //         <FiSend
// //           className="text-gray-500 cursor-pointer ml-2"
// //           size={20}
// //           onClick={generateAnswer}
// //         />
// //       </div>

// //       <pre>{answer}</pre>
// //     </>
// //   );
// // };

// // export default SearchBar;
