import { GiBookshelf } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";

const showList = () => {
  document.getElementById("w").classList.toggle("hidden");
  document.getElementById("w").classList.add("flex");
};

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around">
        <ul className="flex justify-around gap-40">
          <li>
            <GiBookshelf className="w-10 h-10" />
          </li>
          <div className="flex justify-around gap-40 hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Final</li>
          </div>
          <GiHamburgerMenu className="md:hidden w-10 h-10" onClick={showList} />
        </ul>
      </div>
      <div className="hidden md:hidden justify-center" id="w">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Final</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
