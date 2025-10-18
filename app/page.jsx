"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showElement, setShowElement] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rainContainerRef = useRef(null);
  const selectSoundRef = useRef(null);
  const hoverSoundRef = useRef(null);
  const backgroundMusicRef = useRef(null);

  // Preload audio files for better performance
  useEffect(() => {
    selectSoundRef.current = new Audio("/audio/select.wav");
    hoverSoundRef.current = new Audio("/audio/hover.wav");
    backgroundMusicRef.current = new Audio("/audio/rainonbrick.mp3");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // 0.5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    if (selectSoundRef.current) {
      selectSoundRef.current.currentTime = 0;
      selectSoundRef.current.play();
    }
    if (!audioPlaying && backgroundMusicRef.current) {
      backgroundMusicRef.current.play();
      setAudioPlaying(true);
      setButtonClicked(true);
      setShowText(true);
      setShowElement(true);
      setTimeout(() => {
        setShowElement(true);
        setTimeout(() => {
          setShowElement(false);
        }, 5000); // Display the element for 5 seconds
      }, 3000);
    }
  };

  useEffect(() => {
    const createRain = () => {
      const rainContainer = rainContainerRef.current;
      const rainCount = 55; // Adjust the number of raindrops here

      for (let i = 0; i < rainCount; i++) {
        const rainDrop = document.createElement("div");
        rainDrop.className = "rain";
        rainDrop.style.left = `${Math.random() * 100}vw`;
        rainDrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
        rainContainer.appendChild(rainDrop);
      }
    };

    // Only create rain after button is clicked for better performance
    if (rainContainerRef.current && buttonClicked) {
      createRain();
    }
  }, [buttonClicked]);

  const playClickSound = () => {
    if (selectSoundRef.current) {
      selectSoundRef.current.currentTime = 0;
      selectSoundRef.current.play();
    }
  };

  const playHoverSound = () => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play();
    }
  };

  const handleSectionClick = (section) => {
    if (!buttonClicked) return; // Prevent navigation before Get Started is clicked
    setActiveSection(section);
    setMobileMenuOpen(false); // Close mobile menu when section is clicked
    playClickSound();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    playClickSound();
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <>
            <h1 className="text-3xl md:text-5xl font-bold px-4">About Me</h1>
            <p className="mt-4 text-xl md:text-3xl max-w-xl font-medium px-4">
              My Name is Vito Gugushvili. I am a Software Engineer specializing
              in Front-end, currently working for DevsData
            </p>
          </>
        );
      case "projects":
        return (
          <>
            <h1 className="text-3xl md:text-5xl font-bold px-4">Projects</h1>
            <p className="mt-4 text-xl md:text-3xl max-w-xl font-medium px-4">
              My project include:
            </p>
            <div className="flex flex-col px-4">
              <a
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                target="_blank"
                className="mt-4 text-lg md:text-3xl max-w-xl font-medium hover:text-cyan-400"
                href="https://moviebase.vercel.app/"
              >
                Movie Database
              </a>
              <a
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                target="_blank"
                className="mt-4 text-lg md:text-3xl max-w-xl font-medium hover:text-cyan-400"
                href="https://plotted.vercel.app/"
              >
                Daily movie guessing game
              </a>
              <a
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                target="_blank"
                className="mt-4 text-lg md:text-3xl max-w-xl font-medium hover:text-cyan-400"
                href="https://niasbooking.vercel.app/"
              >
                Hotel Booking PLatform
              </a>
              <a
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                target="_blank"
                className="mt-4 text-lg md:text-3xl max-w-xl font-medium hover:text-cyan-400"
                href="https://color-dle.vercel.app/"
              >
                Daily color guessing game
              </a>
              <a
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                target="_blank"
                className="mt-4 text-lg md:text-3xl max-w-xl font-medium hover:text-cyan-400"
                href="https://dared-events.vercel.app/"
              >
                Team building 'Kahoot'-like game
              </a>
            </div>
          </>
        );
      case "education":
        return (
          <>
            <h1 className="text-3xl md:text-5xl font-bold px-4">Education</h1>
            <p className="mt-4 text-xl md:text-3xl max-w-3xl font-medium px-4">
              I am a graduate of Kutaisi International University (KIU), with a
              Bachelor's degree in Computer Science & minor in advanced
              mathematics.
            </p>
          </>
        );
      case "contact":
        return (
          <>
            <h1 className="text-3xl md:text-5xl font-bold px-4">Contact</h1>
            <p className="mt-4 text-xl md:text-3xl max-w-xl font-medium px-4">
              Interested? You can Contact me On
            </p>
            <a
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              target="_blank"
              className="mt-4 text-lg md:text-3xl max-w-xl font-medium hover:text-cyan-400 px-4"
              href="mailto:vitogugushvili12@gmail.com"
            >
              Gmail,{" "}
            </a>
            <a
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              target="_blank"
              className="mt-4 text-lg md:text-3xl max-w-xl font-medium hover:text-cyan-400 px-4"
              href="https://www.linkedin.com/in/vito-gugushvili"
            >
              LinkedIn,{" "}
            </a>
            <a
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="mt-4 text-lg md:text-3xl max-w-xl font-medium hover:text-cyan-400 px-4"
              target="_blank"
              href="https://github.com/vitogugushvili"
            >
              GitHub{" "}
            </a>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-3xl md:text-5xl font-bold px-4">
              Welcome to My Portfolio
            </h1>
            <p className="mt-4 text-lg md:text-xl px-4">
              Discover my projects and skills
            </p>
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center overflow-hidden font-orbitron">
      <div ref={rainContainerRef} className="rain-container"></div>
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-50 text-white">
        <nav className="container mx-auto flex justify-between items-center z-[300]">
          <div className="font-bold text-lg md:text-base">Vito Gugushvili</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <a
              onClick={() => handleSectionClick("about")}
              onMouseEnter={buttonClicked ? playHoverSound : undefined}
              href="#about"
              className={`transition-opacity ${
                buttonClicked
                  ? "hover:text-cyan-400 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              } ${activeSection === "about" ? "text-cyan-400" : ""}`}
            >
              About Me
            </a>
            <a
              onClick={() => handleSectionClick("projects")}
              onMouseEnter={buttonClicked ? playHoverSound : undefined}
              href="#projects"
              className={`transition-opacity ${
                buttonClicked
                  ? "hover:text-cyan-400 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              } ${activeSection === "projects" ? "text-cyan-400" : ""}`}
            >
              Projects
            </a>
            <a
              onClick={() => handleSectionClick("education")}
              onMouseEnter={buttonClicked ? playHoverSound : undefined}
              href="#education"
              className={`transition-opacity ${
                buttonClicked
                  ? "hover:text-cyan-400 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              } ${activeSection === "education" ? "text-cyan-400" : ""}`}
            >
              Education
            </a>
            <a
              onClick={() => handleSectionClick("contact")}
              onMouseEnter={buttonClicked ? playHoverSound : undefined}
              href="#contact"
              className={`transition-opacity ${
                buttonClicked
                  ? "hover:text-cyan-400 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              } ${activeSection === "contact" ? "text-cyan-400" : ""}`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            onMouseEnter={playHoverSound}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-3 px-4 pb-4">
            <a
              onClick={() => handleSectionClick("about")}
              href="#about"
              className={`transition-opacity py-2 text-lg ${
                buttonClicked
                  ? "hover:text-cyan-400 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              } ${activeSection === "about" ? "text-cyan-400" : ""}`}
            >
              About Me
            </a>
            <a
              onClick={() => handleSectionClick("projects")}
              href="#projects"
              className={`transition-opacity py-2 text-lg ${
                buttonClicked
                  ? "hover:text-cyan-400 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              } ${activeSection === "projects" ? "text-cyan-400" : ""}`}
            >
              Projects
            </a>
            <a
              onClick={() => handleSectionClick("education")}
              href="#education"
              className={`transition-opacity py-2 text-lg ${
                buttonClicked
                  ? "hover:text-cyan-400 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              } ${activeSection === "education" ? "text-cyan-400" : ""}`}
            >
              Education
            </a>
            <a
              onClick={() => handleSectionClick("contact")}
              href="#contact"
              className={`transition-opacity py-2 text-lg ${
                buttonClicked
                  ? "hover:text-cyan-400 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              } ${activeSection === "contact" ? "text-cyan-400" : ""}`}
            >
              Contact
            </a>
          </div>
        </div>
      </header>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-10]">
        <Image
          src="/images/mainbg3.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
          quality={85}
          className={`transition-transform duration-[2500ms] ease-in-out ${
            buttonClicked ? "scale-100" : "scale-110"
          }`}
        />
      </div>
      {!buttonClicked && (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-25 text-center text-white relative px-4">
          <button
            className="text-2xl md:text-4xl mt-8 px-6 md:px-4 py-3 md:py-2 bg-cyan-400 text-black font-bold rounded hover:bg-cyan-300 transition-opacity duration-500 ease-in-out"
            onClick={handleGetStarted}
            onMouseEnter={playHoverSound}
          >
            Get Started
          </button>
        </main>
      )}
      {buttonClicked && (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-25 text-center text-white relative z-25">
          <div className="transition-opacity duration-[750ms] ease-in-out opacity-100">
            {renderSectionContent()}
          </div>
        </main>
      )}
      {showElement && (
        <div className="bg-[rgba(33,20,59,0)] inline-block bottom-4 md:bottom-6 right-2 md:right-4 absolute transition-opacity duration-[2500ms] ease-in-out px-2">
          <h2 className="text-[rgba(25,200,239,255)] text-lg md:text-2xl font-black inline-block border-b-2 pb-1 mb-1 border-[rgba(254,49,248,255)] border-solid">
            Now Playing
          </h2>
          <h3 className="text-[rgba(54,208,230,255)] text-sm md:text-medium font-medium">
            Rain On Brick - Bill Kiley
          </h3>
        </div>
      )}
    </div>
  );
}
