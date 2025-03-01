function Contact() {
  return (
    <div className="min-h-screen bg-[#f8f1e5] flex flex-col items-center py-12 px-6">
      <div className="max-w-2xl w-full bg-[#fffaf0] shadow-xl rounded-lg p-8 text-[#5c3d2e] border border-[#c79b53]">
        <h1 className="text-5xl font-extrabold text-[#8b5e3b] mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-center mb-6">
          Have questions or need more information? Get in touch with us, and
          we'll be happy to assist you!
        </p>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-[#c79b53] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#b2844c]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-[#c79b53] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#b2844c]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows="4"
              className="w-full border border-[#c79b53] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#b2844c]"
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-[#c79b53] text-white py-3 rounded-lg font-semibold hover:bg-[#b2844c] transition shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <p className="font-semibold text-lg">📍 Location:</p>
          <p>Langley, British Columbia</p>
          <p className="mt-3 font-semibold text-lg">📞 Phone:</p>
          <p>(123) 456-7890</p>
          <p className="mt-3 font-semibold text-lg">✉️ Email:</p>
          <p>contact@elysiumequine.com</p>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex flex-wrap justify-center space-x-4">
          <a
            href="/"
            className="px-6 py-3 bg-[#c79b53] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-[#5c3d2e] text-white font-semibold rounded-lg shadow-md hover:bg-[#472e22] transition"
          >
            About
          </a>
          <a
            href="/training"
            className="px-6 py-3 bg-[#c79b53] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Training
          </a>
          <a
            href="/socials"
            className="px-6 py-3 bg-[#5c3d2e] text-white font-semibold rounded-lg shadow-md hover:bg-[#472e22] transition"
          >
            Socials
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
