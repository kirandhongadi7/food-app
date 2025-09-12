const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1E1B18] flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-orange-600 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Have questions, feedback, or just want to say hi?  
          Fill out the form below or reach us through the provided details.
        </p>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white py-2 rounded-md font-semibold hover:from-orange-700 hover:to-amber-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Extra Info */}
        <div className="mt-8 text-center text-gray-700">
          <p>📍 123 Food Street, Bengaluru, India</p>
          <p>📧 kirandhongadi2003@gamil.com</p>
          <p>📞 +91 8073640695</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
