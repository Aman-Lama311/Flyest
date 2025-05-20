// store/bookingStore.ts
import { create } from 'zustand';

interface BookingData {
  selectedDate: Date | null;
  name: string;
  email: string;
  phone: string;
  country: string;
  citizens: number;
  adults: number;   
  children: number;
  notes: string;
  code: string;
  addons: string[]; // or change to a different type if addons are objects
}

interface BookingStore {
  bookingData: BookingData;
  setBookingData: (data: Partial<BookingData>) => void;
  resetBooking: () => void;
}

const defaultBookingData: BookingData = {
  selectedDate: null,
  name: '',
  email: '',
  phone: '',
  country: '',
  citizens: 1,
  adults: 1,
  children: 0,
  notes: '',
  code: '',
  addons: [],
};

export const useBookingStore = create<BookingStore>((set) => ({
  bookingData: { ...defaultBookingData },

  setBookingData: (data) =>
    set((state) => ({
      bookingData: { ...state.bookingData, ...data },
    })),

  resetBooking: () => set({ bookingData: { ...defaultBookingData } }),
}));
