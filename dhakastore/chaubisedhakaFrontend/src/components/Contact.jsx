import React from "react";
// import image from "../../src/assets/logo/image.jpg";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center"
      style={{
        // backgroundImage: `url(${image})`,
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-6"> Contact Us</h1>
        <p className="text-gray-600 text-center mb-6">
          We would like to hear from you!.Please fill out the form below or
          contact us directly
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full border border-gray- rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full border border-gray- rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              required
              className="mt-1 block w-full border border-gray- rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full bg-blue-500 text-white rounded-lg  py-2 hover:bg-blue-600 transition duration-300">
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <div className="flex flex-col items-center space-y-2 mt-4">
            <div className="flex items-center">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <span>+977 981000000</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-black mr-2" />
              <span>example@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaFacebook className="text-blue-500 mr-2" />
              <span>Chaubise dhaka</span>
            </div>
            <div className="flex items-center">
              <FaInstagram className="text-red-500 mr-2" />
              <span>Chaubise dhaka</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <span>Chatara Line,Dharan-13 Sunsari,Nepal</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <h2 className="flex items-center justify-center mb-8 text-4xl font-semibold">
          Locate Use
        </h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8468.901212854422!2d87.27941147473346!3d26.816586460033236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef410067552123%3A0x30ba4e0e7309ddb3!2sChaubise%20sanyak%20bhaka%20showroom!5e0!3m2!1sen!2snp!4v1762744261423!5m2!1sen!2snp"
          width={800}
          height={600}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Contact;
