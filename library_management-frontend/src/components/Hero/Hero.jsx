import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/Hero.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="m-5 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold">
            Simplify your book managing with us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, esse
            saepe. Eaque, quisquam natus ab dolor vitae nisi! Sequi dignissimos
            odit repellat consequuntur quis? Ipsum ea voluptatem reiciendis id
            beatae.
          </p>
          <button className="rounded bg-gray-500 p-3" onClick={handleClick}>
            Start Now
          </button>
        </div>

        <div>
          <img src={heroImg} alt="hero" className="object-contain w-96 h-96" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
