// import Sidebar from "../SideBar/Sidebar";
import SearchBar from "./Searchbar";
import Language from "./Language";
import Account from "./Account";
import "flowbite";

const Navbar = () => {
  return (
    <>
      <nav
        className="bg-blue-700 border-blue-200 dark:bg-blue-900"
        style={{ backgroundColor: "#0D1066" }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="photo.jpg" className="h-8" alt="" />
            <span
              className="self-center text-2xl font-Semibold whitespace-nowrap dark:text-white "
              style={{ color: "white" }}
            >
              NBH
            </span>
          </a>
          <Language />
          <SearchBar />
          {/* <Sidebar /> */}
          <Account />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
