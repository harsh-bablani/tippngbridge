import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface IconButton {
  icon: string
  label: string
  link: string
}

interface IconButtonsProps {
  buttons: IconButton[]
}

export default function IconButtons({ buttons }: IconButtonsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % buttons.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + buttons.length) % buttons.length)
    setIsAutoPlaying(false)
  }

  // Auto-play slider
  useEffect(() => {
    if (isAutoPlaying && buttons.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % buttons.length)
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [isAutoPlaying, buttons.length])

  return (
    <section className="relative py-12 md:py-16 overflow-hidden min-h-[500px] md:min-h-[650px]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(30,58,138,0.3),transparent)]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-7000" />
        </div>
      </div>

      <div className="container relative z-10">
        {/* Unified Slider for all devices */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {buttons.map((btn, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 md:px-8">
                  <Link
                    to={btn.link}
                    className="group flex flex-col items-center justify-center py-6 transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative">
                      {/* Glowing effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300 animate-pulse" />
                      <img
                        src={btn.icon}
                        alt={btn.label}
                        className="relative h-72 w-72 md:h-[420px] md:w-[420px] lg:h-[600px] lg:w-[600px] object-contain transition-all duration-500 group-hover:drop-shadow-2xl group-hover:brightness-110"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          {buttons.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-4 rounded-full shadow-xl hover:bg-white/20 transition-all z-20 group"
                aria-label="Previous icon"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-4 rounded-full shadow-xl hover:bg-white/20 transition-all z-20 group"
                aria-label="Next icon"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Enhanced dots indicator */}
          {buttons.length > 1 && (
            <div className="flex justify-center gap-2 md:gap-3 mt-8">
              {buttons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'bg-white w-12 shadow-lg shadow-blue-500/50' 
                      : 'bg-white/40 w-3 hover:bg-white/60'
                  }`}
                  aria-label={`Go to icon ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-7000 {
          animation-delay: 7s;
        }
      `}</style>
    </section>
  )
}

