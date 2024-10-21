import { useState } from 'react';
import SearchBar from './SmartFoot/Components/SearchBar';
import MainContent from './SmartFoot/Components/MainContent';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <SearchBar setSearchResults={setSearchResults} />
      <MainContent data={searchResults} />
    </div>
  );
};

export default App;



// import Sidebar from './SmartFoot/Components/Sidebar';

// const App = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//         <Sidebar/>

//       {/* Main Content */}
//       <main className="flex-1 bg-white p-8">
//         <div className="max-w-3xl mx-auto text-center">
//           {/* Examples Section */}
//           <section className="mb-10">
//             <h2 className="text-xl font-semibold mb-4">Examples</h2>
//             <ul className="space-y-2">
//               <li className="bg-gray-100 p-2 rounded">&quotWho has scored most goals in LaLiga?&quot</li>
//               <li className="bg-gray-100 p-2 rounded">&quotBetter Player, Messi or Ronaldo?&quot</li>
//               <li className="bg-gray-100 p-2 rounded">&quotHow to get better at Dribbling?&quot</li>
//             </ul>
//           </section>

//           {/* Capabilities Section */}
//           <section className="mb-10">
//             <h2 className="text-xl font-semibold mb-4">Capabilities</h2>
//             <ul className="space-y-2">
//               <li className="bg-gray-100 p-2 rounded">Remembers what user said earlier in the conversation.</li>
//               <li className="bg-gray-100 p-2 rounded">Allows user to provide follow-up corrections.</li>
//               <li className="bg-gray-100 p-2 rounded">Trained to decline inappropriate requests.</li>
//             </ul>
//           </section>

//           {/* Limitations Section */}
//           <section className="mb-10">
//             <h2 className="text-xl font-semibold mb-4">Limitations</h2>
//             <ul className="space-y-2">
//               <li className="bg-gray-100 p-2 rounded">May occasionally generate incorrect information.</li>
//               <li className="bg-gray-100 p-2 rounded">May occasionally produce harmful instructions or biased content.</li>
//               <li className="bg-gray-100 p-2 rounded">Limited knowledge of world and events after 2021.</li>
//             </ul>
//           </section>

//           {/* Footer */}
//           <footer className="mt-20">
//             <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto flex items-center justify-center">
//               Company Logo
//             </div>
//             <p className="mt-4">Where Knowledge Evolves</p>
//           </footer>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;
