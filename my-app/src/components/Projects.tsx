import React from 'react';
import { FaReact, FaNodeJs, FaLocationArrow, FaHtml5, FaCss3, } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiJavascript } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "E-commerce Website - Built with React.Js Next.Js and Tailwind CSS ",
    description: "A full-featured E-commerce web application built using React.js and Next.js. Styled with Tailwind CSS for a responsive and modern UI. The project includes Redux for state management, real-time API integration for dynamic product data, and efficient data fetching techniques to ensure fast and smooth user experience.",
    image: "/project8.png",
    techStack: [
      { icon: <FaReact />, color: '#61DAFB' },
    { icon: <SiTypescript />, color: '#3178C6' },
    { icon: <SiTailwindcss />, color: '#38BDF8' },
    ],
    liveLink: 'https://figma-to-next-js-sofa-website.vercel.app/',
  },
  {
    title: "Portfolio Website - Built with HTML & CSS",
    description: "Explore my personal portfolio website, designed using HTML and CSS and JavaScript.",
    image: "/project5.png",
    techStack: [
      { icon: <FaHtml5 />, color: '#E44D26' },
      { icon: <FaCss3 />, color: '#2965F1' },
      { icon: <SiJavascript />, color: '#F7DF1E' },
    ],
    liveLink: 'https://zijayaseen.github.io/Portfolio/',
  },
  {
    title: "Typescript Node.js & Inquirer CLI Based Projects",
    description: "CLI-based projects built with TypeScript, Node.js, and Inquirer.js, showcasing interactive command-line applications with robust functionality.",
    image: "/project4.jpg",
    techStack: [
      { icon: <SiTypescript />, color: '#3178C6' },
      { icon: <SiJavascript />, color: '#F7DF1E' },
      { icon: <FaNodeJs />, color: '#8CC84B' },
    ],
    liveLink: 'https://github.com/ZijaYaseen/TypeScript-Node_Projects.git',
  },
  {
    title: "Resume Builder Website",
    description: "Create professional resumes effortlessly with our dynamic and user-friendly resume builder.",
    image: "/project2.png",
    techStack: [
      { icon: <FaHtml5 />, color: '#E44D26' },
      { icon: <SiTypescript />, color: '#3178C6' },
      { icon: <FaCss3 />, color: '#2965F1' },
    ],
    liveLink: 'https://resume-builder-website-sigma.vercel.app/',
  },
  {
    title: 'Mountain Web Landing Page',
    description: 'Elevate your online presence with stunning designs and seamless digital solutions',
    image: '/project1.png',
    techStack: [
      { icon: <FaHtml5 />, color: '#E44D26' },
      { icon: <SiTypescript />, color: '#3178C6' },
      { icon: <FaCss3 />, color: '#2965F1' },
    ],
    liveLink: 'https://zijayaseen.github.io/Mountain-Web-Landing-Page/',
  },
  {
    title: 'Calculator - Simple and Efficient',
    description: 'Perform basic and advanced calculations with ease using our intuitive calculator',
    image: '/project3.png',
    techStack: [
      { icon: <FaHtml5 />, color: '#E44D26' },
      { icon: <SiTypescript />, color: '#3178C6' },
      { icon: <FaCss3 />, color: '#2965F1' },
    ],
    liveLink: 'https://zijayaseen.github.io/Calculator-Using-HTML5-CSS-TypeScript/',
  },
  {
 title: 'iPhone 14 Pro Website - Next.js & Tailwind CSS',
  description: 'A sleek responsive iPhone 14 Pro website built from a Figma design using Next.js, TypeScript and Tailwind CSS.',
  image: '/project6.png',
  techStack: [
    { icon: <FaReact />, color: '#61DAFB' },
    { icon: <SiTypescript />, color: '#3178C6' },
    { icon: <SiTailwindcss />, color: '#38BDF8' },
  ],
  liveLink: 'https://next-js-sunday-07-class-assignment-iphone14-website.vercel.app/',
}, 
{
  title: 'AI Blog Website Built with Next.js & Tailwind CSS',
   description: 'Discover the world of AI through a modern blog built with Next.js, TypeScript, and Tailwind CSS for a fast, responsive experience.',
   image: '/project7.png',
   techStack: [
     { icon: <FaReact />, color: '#61DAFB' },
     { icon: <SiTypescript />, color: '#3178C6' },
     { icon: <SiTailwindcss />, color: '#38BDF8' },
   ],
   liveLink: 'https://ai-blog-website-gold.vercel.app/',
 }, 
];

const Projects = () => {
  return (
    <section className="pt-20 pb-14 w-full">
      <h1 className='flex justify-center mb-4 text-center font-bold text-[32px] md:text-4xl lg:text-5xl'>
        My{" "}
        <span className='text-purple ml-2'>Projects</span>
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg md:p-4 p-[10px] text-white transform transition-all hover:-translate-y-2 ease-in-out duration-500 hover:shadow-[0_0_15px_5px_rgba(138,43,226,0.7)]"
          >

            <div className="relative overflow-hidden rounded-lg w-full md:h-[260px] h-40 mb-4 cursor-pointer">
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className="object-cover md:w-full md:h-full transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>



            <h3 className="md:text-xl text-lg font-bold">{project.title}</h3>
            <p className="text-gray-400 mb-4 md:text-base text-xs">{project.description}</p>
            <div className="flex items-center justify-between mt-4">
              {/* Icons Section */}
              <div className="flex">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full bg-black"
                    style={{
                      color: tech.color, // Icon Color
                      transform: `translateX(-${idx * 12}px)`, // Overlapping effect
                    }}
                  >
                    {tech.icon}
                  </span>
                ))}
              </div>

              {/* Live Site Section */}
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <span className="text-sm md:text-base font-medium">Check Live Site</span>
                <FaLocationArrow size={12} /> 
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
