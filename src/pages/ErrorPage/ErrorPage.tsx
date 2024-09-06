import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <section className="relative bg-gray-900 min-h-screen flex items-center justify-center text-center">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-600 rounded-full opacity-30 blur-2xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-lg">
        <h1 className="text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-white">
          Lost in space?
        </p>
        <p className="mt-2 text-lg text-gray-400">
          It looks like the page you're trying to find has drifted away.
        </p>

        {/* Back Button */}
        <button
          onClick={goBack}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium rounded-full shadow-lg hover:scale-105 transform transition-all ease-in-out duration-300"
        >
          Return to Home
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
