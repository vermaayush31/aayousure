// import React from 'react'
"use client"; // Add this line to mark the component as a Client Component

import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
// import { Button } from ".//components/Button"
import { Button } from './components/Button'
export default function Home() {


  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])


  return (
    <div className="min-h-screen bg-gray-900 text-white">


      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Ayush<span className="text-green-400">.</span></div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">Services</a>
          <a href="#" className="hover:text-green-400">Resume</a>
          <a href="#" className="hover:text-green-400">Work</a>
          <a href="#" className="hover:text-green-400">Contact</a>
        </nav>
        <Button className="bg-green-400 text-gray-900 hover:bg-green-500">Hire me</Button>
      </header>



      <main className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-xl">Software Developer</h2>
          <h1 className="text-5xl font-bold">Hello I'm<br /><span className="text-green-400">Ayush Verma</span></h1>
          <p className="max-w-md">
            I excel at crafting elegant web experiences and
            I am proficient in various programming languages and
            technologies.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
              <Download className="mr-2 h-4 w-4" /> DOWNLOAD CV
            </Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-500">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-500">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-500">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-green-400 hover:text-green-500">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
     <div className="md:w-1/2 mt-12 md:mt-0 relative">
  {/* Static container for the image */}
  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative z-100">
    <Image
      src="/1.jpeg"
      alt="Ayush"
      width={320}
      height={320}
      className="object-cover"
    />
  </div>

  {/* Rotating container for the border */}
  <div
    className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-dashed border-4 border-green-400 z-20"
    style={{ transform: `rotate(${rotation}deg)` }}
  ></div>
</div>

      </main>



      <footer className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div className="text-center">
            <h3 className="text-4xl font-bold">2</h3>
            <p>Years of<br />experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">7</h3>
            <p>Projects<br />completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">8</h3>
            <p>Technologies<br />mastered</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">150+</h3>
            <p>Code<br />commits</p>
          </div>
        </div>
      </footer>


    </div>
  )
}