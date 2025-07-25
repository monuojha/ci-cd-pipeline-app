"use client"
import React from "react"

import { useState, useEffect } from "react"
import { Quote, Play, Pause } from "lucide-react"

const shayariData = [
  {
    hindi: "तुझ से मिले न थे तो कोई आरजू न थी,\nदेख लिया तुझे तो तेरे तलबगार हो गए। 💕",
    english: "Tujh Se Mile Na The To Koi Aarzoo Na Thi,\nDekh Liya Tujhe To Tere Talabgaar Ho Gaye.",
    translation: "Before meeting you, I had no desires,\nAfter seeing you, I became your seeker. 🌹",
    emoji: "💖",
  },
  {
    hindi: "मैं तुम्हें मुकद्दर की लकीरों से चुरा लूंगा,\nतुम एक बार मेरा होने का दावा तो करो। 🥀",
    english: "Main Tumhein Muqaddar Ki Lakeeron Se Chura Lunga,\nTum Ek Baar Mera Hone Ka Daawa To Karo.",
    translation: "I will steal you from the lines of destiny,\nJust once claim to be mine. 💫",
    emoji: "🌙",
  },
  {
    hindi: "इस बात का एहसास किसी पर न होने देना,\nकि तेरी चाहतों से चलती है मेरी साँसें। 🌺",
    english: "Iss Baat Ka Ehsaas Kisi Par Na Hone Dena,\nKi Teri Chaahaton Se Chalti Hai Meri Saansein.",
    translation: "Don't let anyone realize,\nThat my breath runs on your desires. 💝",
    emoji: "🌸",
  },
  {
    hindi:
      "काश कि आज फिर बेवक्त बारिश हो जाए.. 🌧️\nहमसे बेइंतेहा प्यार की गुज़ारिश हो जाए... 💕\nसमेट लेते हम उनके होठों से चाहत की बूंदों को... 💋\nकाश कि उनकी नजरों से ऐसी कोई सिफारिश हो जाए। ✨",
    english:
      "Kaash Ki Aaj Phir Bewaqt Baarish Ho Jaaye...\nHamse Beinteha Pyaar Ki Guzaarish Ho Jaaye...\nSamet Lete Hum Unke Hothon Se Chaahat Ki Boondon Ko...\nKaash Ki Unki Nazron Se Aisi Koi Sifarish Ho Jaaye.",
    translation:
      "I wish it would rain unexpectedly today... 🌧️\nMay there be a request for endless love from us... 💕\nWe would gather the drops of desire from their lips... 💋\nI wish their eyes would make such a recommendation. ✨",
    emoji: "🌧️",
  },
]

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % shayariData.length)
        setIsVisible(true)
      }, 500)
    }, 40000)

    return () => clearInterval(interval)
  }, [])

  const currentShayari = shayariData[currentIndex]

  const toggleVideo = () => {
    const video = document.getElementById("bg-video") as HTMLVideoElement
    if (video) {
      if (isVideoPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        id="bg-video"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/placeholder-video.mp4" type="video/mp4" />
        {/* Fallback gradient background */}
      </video>

      {/* Video overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-pink-900/80"></div>

      {/* Video Control Button */}
      <button
        onClick={toggleVideo}
        className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
      >
        {isVideoPlaying ? <Pause className="text-white" size={20} /> : <Play className="text-white" size={20} />}
      </button>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-pink-300/10 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-300/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Hearts and Emojis */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          >
            {["💕", "🌹", "💖", "🌺", "💝", "🌸", "💫", "🥀", "🌧️", "💋", "☔", "🌈"][i % 12]}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        {/* Special Love Message - appears every few seconds */}
        {currentIndex === 0 && (
          <div className="absolute top-4 left-4 bg-pink-500/20 backdrop-blur-sm rounded-lg px-4 py-2 animate-pulse">
            <p className="text-pink-200 text-sm">💕 Tiwari Ji,... you are my everything</p>
             <p className="text-pink-200 text-sm">💕 caring to some one</p>
          </div>
        )}
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">✨</span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                मेरे प्यार के लिए 💕
              </h1>
              <span className="text-4xl">✨</span>
            </div>
            <p className="text-purple-200 text-lg md:text-xl font-light mb-4">
              Tiwari Ji, these words are from my heart to yours 🌹
            </p>

            {/* Romantic Dedication */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#702d94]/30 rounded-full border border-[#702d94]/40 backdrop-blur-sm mb-4">
              <span className="text-2xl">💝</span>
              <span className="text-white font-medium">For My Love Tiwari Ji</span>
              <span className="text-2xl">💕</span>
            </div>
            <p className="text-pink-200 text-sm">From your beloved who adores you 🥰🥰🥰</p>
          </div>

          {/* Main Shayari Card */}
          <div
            className={`transition-all duration-500 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl relative">
              {/* Emoji indicator */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#702d94] rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
                  {currentShayari.emoji}
                </div>
              </div>

              <div className="relative pt-4">
                <Quote className="absolute -top-2 -left-4 text-[#702d94] opacity-30" size={48} />

                {/* Hindi Shayari */}
                <div className="mb-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-white leading-relaxed text-center mb-4">
                    {currentShayari.hindi.split("\n").map((line, index) => (
                      <div key={index} className="mb-2">
                        {line}
                      </div>
                    ))}
                  </h2>
                </div>

                {/* English Transliteration */}
                <div className="mb-6">
                  <p className="text-lg md:text-xl text-purple-200 italic text-center leading-relaxed">
                    {currentShayari.english.split("\n").map((line, index) => (
                      <div key={index} className="mb-1">
                        {line}
                      </div>
                    ))}
                  </p>
                </div>

                {/* Translation */}
                <div className="border-t border-white/20 pt-6">
                  <p className="text-base md:text-lg text-purple-100 text-center leading-relaxed">
                    {currentShayari.translation.split("\n").map((line, index) => (
                      <div key={index} className="mb-1">
                        {line}
                      </div>
                    ))}
                  </p>
                </div>

                <Quote className="absolute -bottom-4 -right-4 text-[#702d94] opacity-30 rotate-180" size={48} />
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {shayariData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center text-xs ${
                  index === currentIndex ? "bg-[#702d94] scale-125 shadow-lg" : "bg-white/30 hover:bg-white/50"
                }`}
              >
                {index === currentIndex && <span className="text-white">{["💖", "🌙", "🌸", "🌧️"][index]}</span>}
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#702d94]/20 rounded-full border border-[#702d94]/30 backdrop-blur-sm mb-4">
              <span className="text-2xl">💖</span>
              <span className="text-white font-medium">Made with Endless Love for Tiwari Ji</span>
              <span className="text-2xl">💖</span>
            </div>
            <p className="text-purple-200 text-sm">
              Every word here reflects my feelings for you 💕 • You are my poetry 🌹
            </p>
            <p className="text-pink-300 text-xs mt-2 italic">
              - From someone who loves you more than words can express 💝
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
