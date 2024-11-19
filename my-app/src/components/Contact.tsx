import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ContactSection() {
    return (

        <section className="pt-20 pb-14 grid grid-cols-1 md:grid-cols-2">

                {/* Left Section - Contact Details */}
                <div className="md:p-14 p-2 text-white text-center md:text-left">
                    <h2 className="md:text-4xl text-[26px] font-bold mb-4">Let's <span className="text-purple"> Connect </span> with Me</h2>
                    <p className="text-gray-300 mb-8 text-[16px]">
                        Excited to bring ideas to life? Let's collaborate! Whether it's an innovative project, a creative concept, or a vision you'd like to shape, I'm here to connect and contribute.
                        Feel free to reach out. Let's create something extraordinary together!.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <FaEnvelope size={32} />
                            <Link href="mailto:zijayaseen15@gmail.com">
                                <span className="hover:underline">zijayaseen15@gmail.com</span>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaLinkedin size={32} />
                            <Link
                                href="https://www.linkedin.com/in/zija-yaseen-0154722b2"
                                target="_blank"
                                rel="noreferrer"
                            > 
                            <span className="hover:underline">Connect with me on LinkedIn</span>
                                
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaGithub size={32} />
                            <Link
                                href="https://github.com/ZijaYaseen"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="hover:underline">Let's collaborate on GitHub</span>
                                
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="md:p-4 p-4 border-2 border-purple rounded-lg bg-white mt-10  max-w-md">
                    <h2 className="text-4xl font-extrabold mb-6 text-center text-[#8564ad]">
                        Contact Me
                    </h2>
                    <form action={"mailto:zijayaseen15@gmail.com"} method="post" className="space-y-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 mt-2 border text-black bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8564ad] "
                                placeholder="Your Name"
                            />

                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 mt-2 border text-black bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8564ad] "
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 ">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 mt-2 border text-black bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8564ad] "
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#8564ad] text-white rounded-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
        </section>
    );
}
