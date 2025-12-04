"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT SIDE CONTENT */}
        <div className="flex-1">
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
            Your Partner With{" "}
            <span className="text-blue-600">IT Solution</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We build world-class web apps, mobile apps, cloud systems, AI tools,
            cybersecurity solutions, and complete IT ecosystems that scale your business.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE ANIMATED LOGO CARD */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative rounded-3xl bg-white shadow-xl w-[600px] h-[420px] rotate-3 flex items-center justify-center overflow-hidden 
            animate-floatingGlow">

            <Image
              src="/softvexo_logo.png"
              alt="DevNest Main Logo"
              width={900}
              height={900}
              className="object-contain p-8 animate-subtleSpin"
              priority
            />

          </div>
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes floatingGlow {
          0% {
            transform: translateY(0px) rotate(3deg);
            box-shadow: 0 20px 40px rgba(0, 102, 255, 0.1);
          }
          50% {
            transform: translateY(-12px) rotate(3deg);
            box-shadow: 0 35px 60px rgba(0, 102, 255, 0.18);
          }
          100% {
            transform: translateY(0px) rotate(3deg);
            box-shadow: 0 20px 40px rgba(0, 102, 255, 0.1);
          }
        }

        @keyframes subtleSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(2deg); }
        }

        .animate-floatingGlow {
          animation: floatingGlow 4.5s ease-in-out infinite;
        }

        .animate-subtleSpin {
          animation: subtleSpin 6s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
