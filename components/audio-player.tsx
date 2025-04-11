"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX, Music } from "lucide-react"

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Check if there's a saved preference in localStorage
    const savedMuteState = localStorage.getItem("isMuted")
    const firstVisit = localStorage.getItem("firstVisit")

    if (savedMuteState !== null) {
      setIsMuted(savedMuteState === "true")
    }

    if (firstVisit === null) {
      setShowNotification(true)
      localStorage.setItem("firstVisit", "false")

      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false)
      }, 5000)
    }

    // Create audio element
    const audio = new Audio("/audio/bg-audio.mp3")
    audio.loop = true
    audio.volume = 0.4
    audioRef.current = audio

    // Handle page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current && !isMuted) {
        audioRef.current.pause()
      } else if (!document.hidden && audioRef.current && !isMuted) {
        audioRef.current.play().catch((e) => console.log("Autoplay prevented:", e))
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((e) => console.log("Autoplay prevented:", e))
      }
    }

    // Save preference to localStorage
    localStorage.setItem("isMuted", isMuted.toString())
  }, [isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <>
      {/* First-time visitor notification */}
      {showNotification && (
        <div className="fixed bottom-20 right-6 z-50 bg-black text-white text-xs py-2 px-4 rounded-lg shadow-lg animate-fadeIn flex items-center">
          <Music className="w-4 h-4 mr-2" />
          <span>Background music available. Click the sound icon to play.</span>
        </div>
      )}

      {/* Audio control button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        {isHovered && (
          <div className="mr-3 bg-black bg-opacity-80 text-white text-xs py-1 px-3 rounded-full animate-fadeIn">
            {isMuted ? "Play Music" : "Pause Music"}
          </div>
        )}
        <button
          onClick={toggleMute}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            isMuted
              ? "bg-white border border-black text-black hover:bg-gray-100"
              : "bg-black text-white hover:bg-gray-800"
          }`}
          aria-label={isMuted ? "Play background music" : "Pause background music"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> :<Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </>
  )
}
