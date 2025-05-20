import React, { useState } from 'react';
import { useBookingStore } from '@/store/BookingStore';
import { addonOptions } from '@/static-data/addOnOptions';
import ProcessingModal from './ProcessingModal';
import { toast } from 'react-toastify';

function BookingSummary() {
  const { bookingData, resetBooking } = useBookingStore();
  const price = 1000;

  const [paymentOption, setPaymentOption] = useState<'full' | 'partial'>('full');

  const calculateTotal = () => {
    const basePrice = price;
    const adultPrice = basePrice * (bookingData.adults || 0);
    const childPrice = (basePrice * 0.7) * (bookingData.children || 0);

    const addonsTotal = addonOptions
      .filter(addon => bookingData.addons.includes(addon.id))
      .reduce((sum, addon) => sum + addon.price, 0);

    const total = adultPrice + childPrice + addonsTotal;

    return paymentOption === 'partial' ? total * 0.5 : total;
  };

  const handleClearForm = () => {
    resetBooking();
  };

  const [showModal, setShowModal] = useState(false);

    const handleConfirm = () => {
        setShowModal(true);
        setTimeout(() => {
        setShowModal(false);
        toast.success('Booking submitted!');  // <-- toast message instead of alert
        resetBooking();
        }, 2500);
    };

  return (
    <div>
      <h4 className="font-medium mb-4">Price Summary</h4>
      <div className="bg-gray-50 p-4 rounded-lg mb-6 space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Base Price (x{bookingData.adults} adults)</span>
            <span className="font-medium">
              ${(price * (bookingData.adults || 1)).toLocaleString()}
            </span>
          </div>

          {bookingData.children > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Children (x{bookingData.children})</span>
              <span className="font-medium">
                ${(price * 0.7 * (bookingData.children || 0)).toLocaleString()}
              </span>
            </div>
          )}

          {bookingData.addons.length > 0 && (
            <div>
              <div className="text-gray-600 mb-1">Add-Ons:</div>
              <div className="pl-2 space-y-1">
                {addonOptions
                  .filter(addon => bookingData.addons.includes(addon.id))
                  .map(addon => (
                    <div key={addon.id} className="flex justify-between text-sm">
                      <span>{addon.name}</span>
                      <span>+ ${addon.price}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Payment Option */}
        <div className="border-t border-gray-200 pt-3">
          <h5 className="font-medium mb-2">Payment Option</h5>
          <div className="flex items-start gap-4 flex-col">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="full"
                checked={paymentOption === 'full'}
                onChange={() => setPaymentOption('full')}
              />
              <span>Full Payment</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="partial"
                checked={paymentOption === 'partial'}
                onChange={() => setPaymentOption('partial')}
              />
              <span>Partial Payment (50%)</span>
            </label>
          </div>
        </div>

        {/* Total */}
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between font-semibold">
            <span>Total to Pay</span>
            <span>US ${calculateTotal().toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
        </div>
      </div>

      <button
          onClick={handleConfirm}
          className="w-full bg-[#EA3359] hover:bg-[#d92f50] text-white py-2.5 rounded-lg font-medium"
        >
          Confirm Booking
        </button>
      {showModal && <ProcessingModal />}
    </div>
  );
}

export default BookingSummary;
