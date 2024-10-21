// src/SmartFoot/Layoutes/LandingLayout.jsx
// import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import SearchBar from "../Components/SearchBar";

const LandingLayout = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-screen">
        <Sidebar />
        <main className="flex-grow p-4 md:p-8 bg-gray-100 overflow-auto w-full md:w-4/5">
          {/* <Outlet /> */}
          <SearchBar />
        </main>
      </div>
    </>
  );
};

export default LandingLayout;




// import { Outlet } from "react-router-dom"
// import Sidebar from "../Components/Sidebar"
// import SearchBar from "../Components/SearchBar"


// const LandingLayout = () => {
//   return (
//     <>
//     <div className="flex w-full">
//       <Sidebar />
//       <main className="p-8 bg-gray-100">
//         <Outlet />
//         <SearchBar/>
//       </main>
//     </div>
//     </>
//   )
// }

// export default LandingLayout