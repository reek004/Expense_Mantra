import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center items-start w-full">
      <div className="text-center mt-8">
        <h1 className="md:text-6xl text-4xl lg:text-8xl font-bold text-white">
          Expense{" "}
          <Link to="/" className="hover:text-indigo-300 transition-colors">
            Mantra
          </Link>
        </h1>
        <div className="relative w-2/3 mx-auto hidden md:block">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
