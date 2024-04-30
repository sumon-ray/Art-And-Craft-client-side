import React from "react";

const GiftCard = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-pink-200 py-16">
      <div className="container mx-auto px-4 lg:px-24 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Gifts for Artists
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          For birthdays, holidays, and other special occasions, Blick is your
          one-stop shop for gifts for artists. Find options for every interest,
          media, and technique. With gifts under $25 to gifts over $100, Blick
          has something for any budget. If you’re looking to gift art supplies,
          an art supplies gift set is a great way to show you care. These sets
          typically include paint, colored pencils, or another medium in
          multiple colors, and they sometimes include tools to use them with.
          Check out all-in-one kits for artists venturing into a new medium. If
          you're unsure what to give, give a Gift Card.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
