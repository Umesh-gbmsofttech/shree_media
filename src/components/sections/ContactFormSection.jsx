// UPDATED ContactFormSection.jsx
// Removed 3 info cards section completely
// Better responsive spacing + alignment fixes

import React from "react";
import { motion } from "framer-motion";
import {
  Clock3,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactFormSection() {
  return (<section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#f5f9ff] overflow-hidden">

    ```
    <div className="max-w-7xl mx-auto px-5 sm:px-6">

      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

        {/* LEFT CONTENT */ }
        <div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-[#3884f5] mb-6 md:mb-8">
            <Clock3 size={ 16 } />

            <span className="text-xs sm:text-sm font-semibold">
              Available for Projects
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1] mb-6 md:mb-8">
            Let’s create something unforgettable.
          </h2>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10 md:mb-12 max-w-xl">
            We partner with ambitious brands and founders to create
            digital experiences that stand out and drive results.
          </p>

          {/* Services */ }
          <div className="space-y-5 md:space-y-6">

            { [
              "Brand Identity Design",
              "Website Design & Development",
              "UI/UX Design Systems",
              "Creative Direction",
            ].map((item, index) => (
              <div
                key={ index }
                className="flex items-center gap-4"
              >

                <div className="min-w-[34px] h-[34px] rounded-full bg-[#3884f5]/10 text-[#3884f5] flex items-center justify-center">
                  <CheckCircle2 size={ 16 } />
                </div>

                <p className="text-base sm:text-lg text-slate-700 font-medium">
                  { item }
                </p>

              </div>
            )) }

          </div>

        </div>

        {/* FORM */ }
        <motion.div
          initial={ { opacity: 0, y: 50 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true } }
          className="bg-white rounded-[28px] md:rounded-[40px] p-5 sm:p-8 md:p-12 shadow-[0_20px_80px_rgba(15,23,42,0.08)] border border-slate-100"
        >

          <form className="space-y-6 md:space-y-8">

            {/* Name */ }
            <div>
              <label className="text-sm font-semibold text-slate-900 block mb-3">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Shree Media Solutions"
                className="w-full h-14 px-5 rounded-2xl border border-slate-200 focus:border-[#3884f5] focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />
            </div>

            {/* Email */ }
            <div>
              <label className="text-sm font-semibold text-slate-900 block mb-3">
                Email Address
              </label>

              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full h-14 px-5 rounded-2xl border border-slate-200 focus:border-[#3884f5] focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />
            </div>

            {/* Grid */ }
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">

              <div>
                <label className="text-sm font-semibold text-slate-900 block mb-3">
                  Budget
                </label>

                <select className="w-full h-14 px-5 rounded-2xl border border-slate-200 focus:border-[#3884f5] outline-none">
                  <option>Select Budget</option>
                  <option>₹5K - ₹20K</option>
                  <option>₹20K - ₹50K</option>
                  <option>₹50K+</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900 block mb-3">
                  Project Type
                </label>

                <select className="w-full h-14 px-5 rounded-2xl border border-slate-200 focus:border-[#3884f5] outline-none">
                  <option>Select Type</option>
                  <option>Branding</option>
                  <option>Website</option>
                  <option>UI/UX</option>
                </select>
              </div>

            </div>

            {/* Message */ }
            <div>
              <label className="text-sm font-semibold text-slate-900 block mb-3">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full p-5 rounded-2xl border border-slate-200 focus:border-[#3884f5] focus:ring-4 focus:ring-blue-100 outline-none resize-none"
              />
            </div>

            {/* Button */ }
            <button
              type="submit"
              className="group w-full h-14 sm:h-16 rounded-2xl bg-[#3884f5] text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(56,132,245,0.3)] transition-all duration-300"
            >
              Send Inquiry

              <Send
                size={ 18 }
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>

          </form>

        </motion.div>

      </div>

    </div>

  </section>

  );
}
