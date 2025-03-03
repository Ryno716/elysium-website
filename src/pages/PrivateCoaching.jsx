import { Link } from "react-router-dom";

function PrivateCoaching() {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-12 px-6"
      style={{
        backgroundImage: "url('src/images/private-coaching-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(18, 18, 18, 0.95)", // Dark overlay
      }}
    >
      <div className="max-w-4xl w-full bg-[#1e1e1e00] border-2 border-[#c79b53] shadow-xl rounded-xl p-8 text-white text-center">
        <h1 className="text-5xl font-extrabold text-[#c79b53] mb-6">
          Private Coaching
        </h1>
        <p className="text-lg mb-6">
          Get one-on-one coaching tailored to your goals. Our private training
          sessions are available for riders of all experience levels, helping
          you refine skills, build confidence, and achieve your personal riding
          ambitions.
        </p>

        {/* Pricing Section */}
        <div className="mt-8 bg-[#292929] border-2 border-[#c79b53] rounded-lg p-6 shadow-md w-full md:w-2/3 mx-auto">
          <h2 className="text-3xl font-semibold text-[#c79b53]">
            Training Cost
          </h2>
          <p className="text-lg mt-3">
            💰 <strong>$100 per session</strong>
          </p>
          <p className="text-md text-gray-300">or</p>
          <p className="text-lg">
            🎯 <strong>$550 for a 6-session package</strong>
          </p>
        </div>

        {/* Back to Training Button */}
        <div className="mt-10">
          <Link
            to="/training"
            className="px-6 py-3 border-2 border-[#c79b53] bg-[#49381d] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Back to Training Programs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrivateCoaching;
