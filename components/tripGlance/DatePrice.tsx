const DatePrice = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold mb-6">Date & Price</h1>
      <p className="text-gray-700 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi
        asperiores reprehenderit labore eaque atque vel quisquam ex, modi animi.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
        voluptates?
      </p>
      <div className="mt-4 space-y-3">
        <p className="text-gray-700 text-sm">Set Date</p>
        <input
          type="date"
          className="px-4 py-1.5 border rounded-md outline-none"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm mb-4 bg-white mt-6">
        {/* Trip Dates */}
        <div className="flex flex-col text-center md:text-left mb-2 md:mb-0">
          <span className="text-sm text-gray-500">Sunday → Monday</span>
          <span className="font-semibold">01 May, 2025 → 09 May, 2025</span>
        </div>

        {/* Availability */}
        <div className="text-center mb-2 md:mb-0">
          <span className="block text-gray-500 text-sm">Availability</span>
          <span className="text-green-600 font-semibold">2 spot left</span>
        </div>

        {/* Price */}
        <div className="text-center mb-2 md:mb-0">
          <span className="block text-gray-500 text-sm">Price</span>
          <span className="font-semibold text-gray-800">US $1,499.00</span>
        </div>

        {/* Button */}
        <div>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
            Book now
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm mb-4 bg-white">
        {/* Trip Dates */}
        <div className="flex flex-col text-center md:text-left mb-2 md:mb-0">
          <span className="text-sm text-gray-500">Sunday → Monday</span>
          <span className="font-semibold">01 May, 2025 → 09 May, 2025</span>
        </div>

        {/* Availability */}
        <div className="text-center mb-2 md:mb-0">
          <span className="block text-gray-500 text-sm">Availability</span>
          <span className="text-green-600 font-semibold">2 spot left</span>
        </div>

        {/* Price */}
        <div className="text-center mb-2 md:mb-0">
          <span className="block text-gray-500 text-sm">Price</span>
          <span className="font-semibold text-gray-800">US $1,499.00</span>
        </div>

        {/* Button */}
        <div>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
            Book now
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm mb-4 bg-white">
        {/* Trip Dates */}
        <div className="flex flex-col text-center md:text-left mb-2 md:mb-0">
          <span className="text-sm text-gray-500">Sunday → Monday</span>
          <span className="font-semibold">01 May, 2025 → 09 May, 2025</span>
        </div>

        {/* Availability */}
        <div className="text-center mb-2 md:mb-0">
          <span className="block text-gray-500 text-sm">Availability</span>
          <span className="text-green-600 font-semibold">2 spot left</span>
        </div>

        {/* Price */}
        <div className="text-center mb-2 md:mb-0">
          <span className="block text-gray-500 text-sm">Price</span>
          <span className="font-semibold text-gray-800">US $1,499.00</span>
        </div>

        {/* Button */}
        <div>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
            Book now
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-lg shadow-sm mb-4 bg-white">
        {/* Trip Dates */}
        <div className="flex flex-col text-center md:text-left mb-2 md:mb-0">
          <span className="text-sm text-gray-500">Sunday → Monday</span>
          <span className="font-semibold">01 May, 2025 → 09 May, 2025</span>
        </div>

        {/* Availability */}
        <div className="text-center mb-2 md:mb-0">
          <span className="block text-gray-500 text-sm">Availability</span>
          <span className="text-green-600 font-semibold">2 spot left</span>
        </div>

        {/* Price */}
        <div className="text-center mb-2 md:mb-0">
          <span className="block text-gray-500 text-sm">Price</span>
          <span className="font-semibold text-gray-800">US $1,499.00</span>
        </div>

        {/* Button */}
        <div>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};
export default DatePrice;
