import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    nme: "",
    mail: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!nameRegex.test(formData.nme)) {
      alert("Please enter your full name (first and last name).");
      return;
    }

    if (!phoneRegex.test(formData.number)) {
      alert("Please enter a valid phone number with 10 to 15 digits.");
      return;
    }

    alert("Form submitted successfully!");
    // You can now send `formData` to an API or backend here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Left Side: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Contact Form
          </h2>

          <div>
            <label
              htmlFor="nme"
              className="block text-sm font-medium text-gray-700"
            >
              Enter your name
            </label>
            <input
              type="text"
              id="nme"
              name="nme"
              value={formData.nme}
              onChange={handleChange}
              placeholder="Firstname Lastname"
              required
              pattern="^[A-Za-z]+(?:\s[A-Za-z]+)+$"
              title="Enter first and last name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="mail"
              className="block text-sm font-medium text-gray-700"
            >
              Enter your email
            </label>
            <input
              type="email"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              placeholder="youremail@example.com"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Enter your phone number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="0123456789"
              required
              pattern="^[0-9]{10,15}$"
              title="Enter 10 to 15 digit phone number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
          >
            Submit
          </button>
        </form>

        {/* Right Side: Live Display */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center">
          <div className="w-full text-center mb-6">
            <h3 className="text-2xl font-bold text-blue-700">
              📋 Live Preview
            </h3>
            <p className="text-sm text-gray-500">
              Your info will show here as you type
            </p>
          </div>

          <div className="w-full space-y-4">
            <div className="bg-blue-50 p-4 rounded-xl w-full">
              <p className="text-gray-700">
                <span className="font-semibold text-blue-600">Name:</span>{" "}
                {formData.nme || (
                  <span className="italic text-gray-400">Not provided</span>
                )}
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl w-full">
              <p className="text-gray-700">
                <span className="font-semibold text-blue-600">Email:</span>{" "}
                {formData.mail || (
                  <span className="italic text-gray-400">Not provided</span>
                )}
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl w-full">
              <p className="text-gray-700">
                <span className="font-semibold text-blue-600">Phone:</span>{" "}
                {formData.number || (
                  <span className="italic text-gray-400">Not provided</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
