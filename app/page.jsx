"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showElement, setShowElement] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const rainContainerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // 0.5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    const clickSound = new Audio("/audio/select.wav");
    clickSound.play();
    if (!audioPlaying) {
      const audio = new Audio("/audio/rainonbrick.mp3");
      audio.play();
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

    if (rainContainerRef.current) {
      createRain();
    }
  }, []);

  const playClickSound = () => {
    const clickSound = new Audio("/audio/select.wav");
    clickSound.play();
  };

  const playHoverSound = () => {
    const hoverSound = new Audio("/audio/hover.wav");
    hoverSound.play();
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    playClickSound();
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <>
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="mt-4 text-3xl max-w-xl font-medium">
              My Name is Vito Gugushvili. I am a Software Engineer specializing
              in Front-end development over the last years.
            </p>
          </>
        );
      case "projects":
        return (
          <>
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="mt-4 text-3xl max-w-xl font-medium">
              My project include:
            </p>
            <div className="flex flex-col">
              <a
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                target="_blank"
                className="mt-4 text-3xl max-w-xl font-medium hover:text-cyan-400"
                href="https://moviebase.vercel.app/"
              >
                Movie Database
              </a>
              <a
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                target="_blank"
                className="mt-4 text-3xl max-w-xl font-medium hover:text-cyan-400"
                href="https://tourguide-peach.vercel.app/"
              >
                Traveling Website
              </a>
              <a
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                target="_blank"
                className="mt-4 text-3xl max-w-xl font-medium hover:text-cyan-400"
                href="https://niasbooking.vercel.app/"
              >
                Hotel Booking PLatform
              </a>
            </div>
          </>
        );
      case "education":
        return (
          <>
            <h1 className="text-5xl font-bold">Education</h1>
            <p className="mt-4 text-3xl max-w-3xl font-medium">
              I am a junior Computer Scientist in Kutaisi International
              University (KIU), currently working as a Frontend developer at DevsData LLC.
            </p>
          </>
        );
      case "contact":
        return (
          <>
            <h1 className="text-5xl font-bold">Contact</h1>
            <p className="mt-4 text-3xl max-w-xl font-medium">
              Interested? You can Contact me On
            </p>
            <a
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              target="_blank"
              className="mt-4 text-3xl max-w-xl font-medium hover:text-cyan-400"
              href="mailto:v.gugusha@gmail.com"
            >
              Gmail,{" "}
            </a>
            <a
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              target="_blank"
              className="mt-4 text-3xl max-w-xl font-medium hover:text-cyan-400"
              href=""
            >
              LinkedIn,{" "}
            </a>
            <a
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="mt-4 text-3xl max-w-xl font-medium hover:text-cyan-400"
              target="_blank"
              href="https://github.com/TaiyouFlower"
            >
              GitHub{" "}
            </a>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-xl">Discover my projects and skills</p>
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center overflow-hidden font-orbitron">
      <div ref={rainContainerRef} className="rain-container"></div>
      <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-50 text-white">
        <nav className="container mx-auto flex justify-between z-[300]">
          <div className="font-bold">Vito Gugushvili</div>
          <div className="space-x-4">
            <a
              onClick={() => handleSectionClick("about")}
              onMouseEnter={playHoverSound}
              href="#about"
              className={`hover:text-cyan-400 ${
                activeSection === "about" ? "text-cyan-400" : ""
              }`}
            >
              About Me
            </a>
            <a
              onClick={() => handleSectionClick("projects")}
              onMouseEnter={playHoverSound}
              href="#projects"
              className={`hover:text-cyan-400 ${
                activeSection === "projects" ? "text-cyan-400" : ""
              }`}
            >
              Projects
            </a>
            <a
              onClick={() => handleSectionClick("education")}
              onMouseEnter={playHoverSound}
              href="#education"
              className={`hover:text-cyan-400 ${
                activeSection === "education" ? "text-cyan-400" : ""
              }`}
            >
              Education
            </a>
            <a
              onClick={() => handleSectionClick("contact")}
              onMouseEnter={playHoverSound}
              href="#contact"
              className={`hover:text-cyan-400 ${
                activeSection === "contact" ? "text-cyan-400" : ""
              }`}
            >
              Contact
            </a>
          </div>
        </nav>
      </header>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-10]">
        <Image
          src="/images/mainbg3.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className={`transition-transform duration-[2500ms] ease-in-out ${
            buttonClicked ? "scale-100" : "scale-110"
          }`}
        />
      </div>
      {!buttonClicked && (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-25 text-center text-white relative">
          <button
            className="text-4xl mt-8 px-4 py-2 bg-cyan-400 text-black font-bold rounded hover:bg-cyan-300 transition-opacity duration-500 ease-in-out"
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
        <div className="bg-[rgba(33,20,59,0)] inline-block bottom-6 right-4 absolute transition-opacity duration-[2500ms] ease-in-out">
          <h2 className="text-[rgba(25,200,239,255)] text-2xl font-black inline-block border-b-2 pb-1 mb-1 border-[rgba(254,49,248,255)] border-solid">
            Now Playing
          </h2>
          <h3 className="text-[rgba(54,208,230,255)] text-medium font-medium">
            Rain On Brick - Bill Kiley
          </h3>
        </div>
      )}
    </div>
  );
}
