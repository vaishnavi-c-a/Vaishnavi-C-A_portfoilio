import { Cpu, Zap, Wrench, Award, Star, BookOpen, PenTool, CheckCircle, Lightbulb } from 'lucide-react';

export const personalInfo = {
  name: "Vaishnavi C A",
  role: "Electronics and Communication Engineer",
  email: "ajitvaishnavi085@gmail.com",
  phone: "+91 9188361350",
  location: "Thrissur, Kerala, India",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/vaishnavi-c-a-a57772296",
  twitter: "#",
  summary: "Motivated Electronics and Communication Engineering student with strong foundations in FPGA design, digital systems, microcontrollers, and hardware development. Passionate about solving real-world engineering problems through embedded systems and innovative electronic solutions."
};

export const skillsData = {
  technical: [
    { name: "Python", level: 85 },
    { name: "Verilog HDL", level: 80 },
    { name: "Assembly Language", level: 75 },
    { name: "Xilinx Vivado", level: 85 },
    { name: "LTSpice", level: 80 },
    { name: "Arduino IDE", level: 90 }
  ],
  ai: [ // Repurposed for Professional Skills
    { name: "Problem Solving", level: 95 },
    { name: "Analytical Thinking", level: 90 },
    { name: "Teamwork", level: 95 },
    { name: "Communication", level: 85 }
  ],
  electronics: [
    { name: "FPGA Design", level: 85 },
    { name: "Digital Systems", level: 90 },
    { name: "VLSI Fundamentals", level: 80 },
    { name: "Signal Analysis", level: 75 },
    { name: "Microcontrollers", level: 85 }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "IC Tester with 7-Segment Display",
    description: "Developed a hardware testing unit capable of identifying and verifying common integrated circuits with real-time IC identification and automatic testing mechanism.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    tags: ["Arduino UNO", "LCD Display", "Hardware"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Hardware"
  },
  {
    id: 2,
    title: "Vibration Analyzer for Machine Health",
    description: "Designed a vibration monitoring system that detects abnormal machine vibrations and provides visual indications using an accelerometer-based sensing.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop",
    tags: ["Sensor", "LM741 Op-Amp", "555 Timer"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Analog Electronics"
  },
  {
    id: 3,
    title: "Solar-Powered Grass Cutter Robot",
    description: "Developed a solar-powered robotic grass cutter with wireless remote control functionality and a rechargeable battery system.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    tags: ["Arduino UNO", "HC-05 Bluetooth", "L298N", "Solar Panel"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Robotics"
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Digital System Prototyping Intern",
    company: "NIELIT Calicut",
    date: "Recent",
    description: "Developed FPGA-based digital designs using Verilog HDL. Implemented FIR Filters and FIFO Memory. Performed Simulation and Synthesis using Xilinx Vivado. Verified designs on Arty A7 FPGA Board using ILA and VIO debugging tools."
  }
];

export const educationData = [
  {
    id: 1,
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "NSS College of Engineering",
    date: "2023 - 2027",
    description: "Currently pursuing. Current CGPA: 7.90"
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Kendriya Vidyalaya Ramavarmapuram",
    date: "2023",
    description: "Percentage: 93.6%"
  },
  {
    id: 3,
    degree: "Secondary Education",
    institution: "Kendriya Vidyalaya Ramavarmapuram",
    date: "2021",
    description: "Percentage: 95.8%"
  }
];

export const servicesData = [
  {
    id: 1,
    title: "FPGA Development",
    description: "Design and implementation of digital systems using Verilog HDL and FPGA platforms.",
    icon: Cpu
  },
  {
    id: 2,
    title: "Embedded Systems Development",
    description: "Microcontroller-based solutions and hardware prototyping.",
    icon: Zap
  },
  {
    id: 3,
    title: "Electronics Project Development",
    description: "Design and development of academic and industrial electronics projects.",
    icon: Lightbulb
  },
  {
    id: 4,
    title: "Hardware Debugging",
    description: "Testing, validation, and optimization of digital hardware systems.",
    icon: Wrench
  }
];

// Reusing this for Certifications/Achievements
export const achievements = [
  {
    id: 1,
    title: "Internet of Things (IoT)",
    issuer: "NPTEL Certification",
    date: "Completed",
    icon: Award,
  },
  {
    id: 2,
    title: "Chemical Process Instrumentation",
    issuer: "NPTEL Certification",
    date: "Completed",
    icon: Star,
  },
  {
    id: 3,
    title: "FPGA Prototyping Internship",
    issuer: "NIELIT Calicut",
    date: "Successfully Completed",
    icon: CheckCircle,
  }
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
