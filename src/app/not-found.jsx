"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-gray-200 px-4 py-10 relative overflow-hidden">

      
      <div className="absolute top-10 left-10 w-40 h-40 sm:w-72 sm:h-72 bg-blue-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 sm:w-96 sm:h-96 bg-sky-400/20 rounded-full blur-3xl"></div>

      
      <section className="relative z-10 w-full max-w-4xl min-w-[310px] bg-white/70 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-[30px] px-6 sm:px-10 md:px-16 py-12 sm:py-16 text-center">


        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-blue-600 via-sky-400 to-blue-800 bg-clip-text text-transparent tracking-[8px] drop-shadow-lg">
          404
        </h1>


        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-gray-400 mx-auto rounded-full my-6"></div>

        
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          This Page Is Not Found
        </h2>

        
        <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Sorry, the page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        
        <div className="mt-8 text-blue-300 font-semibold tracking-[8px] sm:tracking-[14px] text-lg sm:text-2xl">
          4 0 4
        </div>


        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-blue-300/50 transition-all duration-300"
          >
            Back To Home
          </Link>

          
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-blue-300 text-blue-700 font-semibold bg-white/80 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
          >
            Go Back
          </button>
        </div>

        
        <p className="mt-10 text-xs sm:text-sm text-gray-500">
          Error Code: 404 | Premium Next.js Not Found Page
        </p>
      </section>
    </main>
  );
}