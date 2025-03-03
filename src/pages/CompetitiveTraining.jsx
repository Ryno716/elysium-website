import { Link } from "react-router-dom";

function CompetitiveTraining() {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-12 px-6"
      style={{
        backgroundImage: "url('src/images/competitive-training-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(18, 18, 18, 0.95)", // Dark overlay
      }}
    >
      <div className="max-w-4xl w-full bg-[#1e1e1e00] border-2 border-[#c79b53] shadow-xl rounded-xl p-8 text-white text-center">
        <h1 className="text-5xl font-extrabold text-[#c79b53] mb-6">
          Competitive Show Training
        </h1>
        <p className="text-lg mb-6">
          Designed for riders aiming to compete at local and national levels,
          our structured coaching programs focus on refining skills, strategy,
          and show readiness. Train with experienced professionals and take your
          riding to the next level.
        </p>

        {/* Pricing Section */}
        <div className="mt-8 bg-[#292929] border-2 border-[#c79b53] rounded-lg p-6 shadow-md w-full md:w-2/3 mx-auto">
          <h2 className="text-3xl font-semibold text-[#c79b53]">
            Training Cost
          </h2>
          <p className="text-lg mt-3">
            💰 <strong>$75 per session</strong>
          </p>
          <p className="text-md text-gray-300">or</p>
          <p className="text-lg">
            🏆 <strong>$400 for an 8-session package</strong>
          </p>
        </div>

        {/* Back to Training Button */}
        <div className="mt-10">
          <Link
            to="/training"
            className="px-6 py-3 border-2 border-[#c79b53] bg-[#463a27] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Back to Training Programs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompetitiveTraining;
