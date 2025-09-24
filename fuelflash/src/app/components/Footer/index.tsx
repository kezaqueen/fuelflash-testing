'use client';
import React, { useState } from 'react';

export default function Footer() {
  const [form, setForm] = useState({ name: '', contact: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="w-full">
      <div className="bg-[#A8610C] w-full flex flex-row items-center justify-between px-8 lg:px-20 py-10 min-h-[350px]">
        <aside className="w-1/2 flex flex-col justify-center items-start pr-12">
          {/* CHANGED: used <aside> and increased word size */}
          <h2 className="text-white text-3xl font-bold mb-4">
            Ready to stay informed?
          </h2>
          <p className="text-white text-2xl font-semibold">
            Join Fuel Flash today and never pay more than you need to fuel for.
          </p>
        </aside>
        <div className="w-[480px] flex justify-end">
          <form
            className="bg-white rounded-xl shadow-xl p-12 py-20 w-full max-w-xl flex flex-col justify-center"
            style={{ minWidth: 380, minHeight: 410 }}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            {/* CHANGED: added clear form label */}
            <h3 className="text-3xl font-bold text-[#2e0b6a] mb-8 text-center">
              Subscribe to Fuel Flash
            </h3>
            <label className="block mb-2 text-[#222] font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter name"
              className="w-full mb-4 px-3 py-2 border border-gray-400 rounded focus:outline-none"
              value={form.name}
              onChange={handleChange}
              autoComplete="off"
            />
            <label className="block mb-2 text-[#222] font-medium" htmlFor="contact">
              Contact
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              placeholder="Enter contact"
              className="w-full mb-8 px-3 py-2 border border-gray-400 rounded focus:outline-none"
              value={form.contact}
              onChange={handleChange}
              autoComplete="off"
            />
            <button
              type="submit"
              className="w-full bg-[#2e0b6a] hover:bg-[#21006A] text-white font-bold rounded-md py-4 shadow-md transition"
              disabled
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#2e0b6a] w-full py-4 px-2 text-center text-white text-xs sm:text-sm">
        <div>© 2025 FuelFlash. All rights reserved</div>
        <div>Made for vehicle owners in Rwanda</div>
      </div>
    </footer>
  );
}