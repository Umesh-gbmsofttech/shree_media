// UPDATED ContactHero.jsx
// Better mobile responsiveness + alignment fixes

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import heroImg from "../../assets/CONTACT2.jpg";

export default function ContactHero() {
  return (<section className="relative pt-20 md:pt-24 bg-white overflow-hidden">

    ```
    <div className="relative mx-3 sm:mx-5 md:mx-8 rounded-[28px] md:rounded-[40px] overflow-hidden min-h-[720px] md:min-h-[85vh]">

      {/* Background */ }
      <img
        src={ heroImg }
        alt="Creative Studio"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */ }
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-[#3884f5]/30" />

      {/* Glow */ }
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#3884f5]/30 blur-[100px]" />

      {/* Main Content */ }
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 md:py-24 h-full flex items-center">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center w-full">

          {/* LEFT CONTENT */ }
          <motion.div
            initial={ { opacity: 0, y: 40 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
            className="text-white"
          >

            {/* Badge */ }
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 md:mb-8">
              <Sparkles size={ 14 } />
              <span className="text-[11px] sm:text-sm tracking-[0.2em] uppercase font-semibold">
                Creative Design Studio
              </span>
            </div>

            {/* Heading */ }
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6 md:mb-8">
              Let’s Build
              <br />
              Something
              <span className="text-[#3884f5]"> Exceptional.</span>
            </h1>

            {/* Description */ }
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl mb-8 md:mb-10">
              We craft modern digital experiences, premium branding systems,
              and impactful visual identities for ambitious brands worldwide.
            </p>

            {/* Buttons */ }
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">

              <button className="group w-full sm:w-auto px-7 py-4 bg-[#3884f5] rounded-full text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-blue-500/30">
                Start a Project

                <ArrowRight
                  size={ 18 }
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">
                Schedule Call
              </button>

            </div>

          </motion.div>

          {/* RIGHT CARD */ }
          <motion.div
            initial={ { opacity: 0, y: 60 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.9 } }
            className="w-full"
          >

            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] md:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

              {/* Top */ }
              <div className="mb-8 md:mb-10">

                <p className="text-white/70 uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3 md:mb-4">
                  Contact Info
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Let’s discuss your next big idea.
                </h3>

              </div>

              {/* Contact List */ }
              <div className="space-y-6 md:space-y-8">

                {/* Phone */ }
                <div className="flex items-start gap-4">

                  <div className="min-w-[52px] h-[52px] rounded-2xl bg-[#3884f5] flex items-center justify-center text-white">
                    <Phone size={ 20 } />
                  </div>

                  <div className="overflow-hidden">
                    <p className="text-white/60 text-sm mb-1">
                      Phone
                    </p>

                    <h4 className="text-white font-semibold text-base sm:text-lg break-words">
                      +91 77965 19192
                    </h4>
                  </div>

                </div>

                {/* Email */ }
                <div className="flex items-start gap-4">

                  <div className="min-w-[52px] h-[52px] rounded-2xl bg-[#3884f5] flex items-center justify-center text-white">
                    <Mail size={ 20 } />
                  </div>

                  <div className="overflow-hidden">
                    <p className="text-white/60 text-sm mb-1">
                      Email
                    </p>

                    <h4 className="text-white font-semibold text-base sm:text-lg break-all">
                      shreedesigner977@gmail.com
                    </h4>
                  </div>

                </div>

                {/* Location */ }
                <div className="flex items-start gap-4">

                  <div className="min-w-[52px] h-[52px] rounded-2xl bg-[#3884f5] flex items-center justify-center text-white">
                    <MapPin size={ 20 } />
                  </div>

                  <div>
                    <p className="text-white/60 text-sm mb-1">
                      Location
                    </p>

                    <h4 className="text-white font-semibold text-base sm:text-lg">
                      Pune, Maharashtra
                    </h4>
                  </div>

                </div>

              </div>

              {/* Bottom */ }
              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10">

                <div className="flex items-center justify-between gap-5">

                  <div>
                    <p className="text-white/50 text-xs sm:text-sm">
                      Average Response
                    </p>

                    <h5 className="text-white font-bold text-lg sm:text-xl">
                      Under 24 Hours
                    </h5>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </div>

  </section>
  );
}
