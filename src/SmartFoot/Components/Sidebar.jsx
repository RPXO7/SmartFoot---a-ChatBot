// src/SmartFoot/Components/Sidebar.jsx
import { FiTrash2, FiSun, FiUser, FiHelpCircle, FiLogIn, FiSidebar, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { clearChat, newChat, toggleTheme, openChatFromHistory, deleteChatHistory } from '../Redux/searchSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { history, theme } = useSelector((state) => state.search);

  const handleClearChat = () => {
    dispatch(clearChat());  // Clear current chat
  };

  const handleNewChat = () => {
    dispatch(newChat());  // Start a new chat
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());  // Toggle between dark and light mode
  };

  const handleOpenChat = (chat) => {
    dispatch(openChatFromHistory(chat)); // Open selected chat in SearchBar UI
  };

  const handleDeleteChat = (index) => {
    dispatch(deleteChatHistory(index)); // Delete selected chat from history and localStorage
  };

  return (
    <div className={`flex flex-col h-full w-full md:w-1/5 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} shadow-lg p-6`}>
      <div className="flex flex-col items-center">
        <div className="mb-4 mr-auto">
          <FiSidebar size={25} />
        </div>
        <button className="w-full bg-black text-white py-2 rounded-lg font-semibold flex justify-center items-center" onClick={handleNewChat}>
          + New Chat
        </button>

        {/* Display chat history */}
        <div className="mt-4 w-full">
          <h3 className="font-semibold">Chat History</h3>
          {history.map((chat, index) => (
            <div key={index} className="flex justify-between items-center w-full text-left p-2 bg-gray-100 rounded mt-2">
              <div className="cursor-pointer" onClick={() => handleOpenChat(chat)}>
                {`Chat ${index + 1}: ${chat.substring(0, 30)}...`}
              </div>
              <button onClick={() => handleDeleteChat(index)} className="text-red-500 hover:text-red-700">
                <FiX size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow"></div>
      {/* Bottom Section */}
      <div className="flex flex-col text-gray-700">
        <button className="flex items-center space-x-4 hover:text-black hover:bg-gray-200 rounded-lg p-2" onClick={handleClearChat}>
          <FiTrash2 size={20} />
          <span className="text-black">Clear conversations</span>
        </button>

        <button className="flex items-center space-x-4 hover:text-black hover:bg-gray-200 rounded-lg p-2" onClick={handleToggleTheme}>
          <FiSun size={20} />
          <span className="text-black">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>

        <button className="flex items-center space-x-4 hover:text-black hover:bg-gray-200 rounded-lg p-2">
          <FiUser size={20} />
          <span className="text-black">My account</span>
        </button>

        <button className="flex items-center space-x-4 hover:text-black hover:bg-gray-200 rounded-lg p-2">
          <FiHelpCircle size={20} />
          <span className="text-black">Updates & FAQ</span>
        </button>

        <button className="flex items-center space-x-4 hover:text-black hover:bg-gray-200 rounded-lg p-2">
          <FiLogIn size={20} />
          <span className="text-black">Log in</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;



// import { FiTrash2, FiSun, FiUser, FiHelpCircle, FiLogIn } from 'react-icons/fi';
// import { FiSidebar } from "react-icons/fi";


// const Sidebar = () => {
//   return (
//     <div className="flex flex-col h-full w-full md:w-1/5 bg-white shadow-lg p-6">
//       <div className="flex flex-col items-center">
//         <div className="mb-4 mr-auto">
//           <FiSidebar size={25}/>
//         </div>
//         <button className="w-full bg-black text-white py-2 rounded-lg font-semibold flex justify-center items-center">
//           + New Chat
//         </button>
//       </div>

//       <div className="flex-grow"></div>

//       {/* Bottom Section */}
//       <div className="flex flex-col text-gray-700">
//         <button className="flex items-center space-x-4 hover:text-black hover:bg-gray-200 rounded-lg p-2">
//           <FiTrash2 size={20} />
//           <span className='text-black'>Clear conversations</span>
//         </button>

//         <button className="flex items-center space-x-4 hover:text-black hover:bg-gray-200 rounded-lg p-2">
//           <FiSun size={20} />
//           <span className='text-black'>Light mode</span>
//         </button>

//         <button className="flex items-center space-x-4 hover:text-black hover:bg-gray-200 rounded-lg p-2">
//           <FiUser size={20} />
//           <span className='text-black'>My account</span>
//         </button>

//         <button className="flex items-center space-x-4 hover:text-black hover:bg-gray-200 rounded-lg p-2  ">
//           <FiHelpCircle size={20} />
//           <span className='text-black'>Updates & FAQ</span>
//         </button>

//         <button className="flex items-center space-x-4 hover:text-black hover:bg-gray-200 rounded-lg p-2  ">
//           <FiLogIn size={20} />
//           <span className='text-black'>Log in</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// import { FiTrash2, FiSun, FiUser, FiHelpCircle, FiLogIn } from 'react-icons/fi'; // Importing icons

// const Sidebar = () => {
//   return (
//     <div className="flex flex-col h-screen w-64 bg-white shadow-lg">
//       <div className="flex flex-col items-center p-4">
//         <div className="mb-4">
//           <div className="w-8 h-8 bg-black"></div> {/* Replace with actual icon */}
//         </div>
//         <button className="w-full bg-black text-white py-2 rounded-lg font-semibold flex justify-center items-center">
//           + New chat
//         </button>
//       </div>

//       <div className="flex-grow"></div>

//       <div className="flex flex-col space-y-6 p-4 text-gray-700">
//         <button className="flex items-center space-x-4 hover:text-black">
//           <FiTrash2 size={20} />
//           <span>Clear conversations</span>
//         </button>

//         <button className="flex items-center space-x-4 hover:text-black">
//           <FiSun size={20} />
//           <span>Light mode</span>
//         </button>

//         <button className="flex items-center space-x-4 hover:text-black">
//           <FiUser size={20} />
//           <span>My account</span>
//         </button>

//         <button className="flex items-center space-x-4 hover:text-black">
//           <FiHelpCircle size={20} />
//           <span>Updates & FAQ</span>
//         </button>

//         <button className="flex items-center space-x-4 hover:text-black">
//           <FiLogIn size={20} />
//           <span>Log in</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

