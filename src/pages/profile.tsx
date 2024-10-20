"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaHeart, FaComment } from 'react-icons/fa';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ProfilePic from "@/components/ProfilePic";
gsap.registerPlugin(ScrollTrigger);


const imageLinks = [
    { src: "/post/p11.avif", description: "A beautiful sunset over the mountains, perfect for a cozy evening.", avatar: "/pet1.jpg" },
    { src: "/post/p13.jpeg", description: "An adorable puppy playing in the grass, full of energy and joy.", avatar: "/pet1.jpg" },
    { src: "/post/p8.jpeg", description: "A curious kitten exploring its surroundings, always up for an adventure.", avatar: "/pet1.jpg" },
    { src: "/post/p9.jpeg", description: "A peaceful moment by the lake, where pets and nature connect beautifully.", avatar: "/pet1.jpg" },
    { src: "/post/p10.jpeg", description: "Two friends enjoying a playful day at the park, sharing laughter and fun.", avatar: "/pet1.jpg" },
];



export default function Profile() {
    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLDivElement>(".developer-card");

        cards.forEach((element, i) => {
            gsap.set(element, { opacity: 0 });
            gsap.from(element, {
                y: 200,
                duration: 0.5,
                scrollTrigger: {
                    trigger: element,
                    start: "top 100%",
                },
            });
        });

        ScrollTrigger.batch(".developer-card", {
            onEnter: (batch) =>
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: { each: 0.15, grid: [1, 3] },
                    overwrite: true,
                }),
            onLeaveBack: (batch) =>
                gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
        });

        ScrollTrigger.addEventListener("refreshInit", () => {
            gsap.set(".developer-card", { y: 0 });
        });
    });
    return (
        <div className=" min-h-screen text-black pt-8 md:p-8">

            <div className="max-w-4xl mx-auto p-6 bg-primary-300 rounded-lg">
                <div className="flex items-center space-x-6 rounded">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-secondary-500">
                        <Image
                            src="/pet1.jpg"
                            alt="Profile picture"
                            width={112}
                            height={112}
                            className="object-cover"
                        />
                    </div>
                    {/* Profile Info */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center space-x-4 mb-4">
                            <h2 className="text-2xl font-semibold rubik-mono-one-regular  ">Timmy</h2>
                            <button className="px-4 py-1 border rounded-md font-semibold bg-secondary-300">
                                Edit Profile
                            </button>
                        </div>
                        <div className="flex space-x-6 ">
                            <div>
                                <span className="font-semibold">100</span> posts
                            </div>
                            <div>
                                <span className="font-semibold">1.2k</span> followers
                            </div>
                            <div>
                                <span className="font-semibold">200</span> following
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="text-gray-600">I am timmy</p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3">
                            <a href="/feed">

                                <button className="px-4 py-1 border rounded-md font-semibold w-fit bg-secondary-300">
                                    Feed
                                </button>
                            </a>
                            <a href="/message">

                                <button className="px-4 py-1 border rounded-md font-semibold w-fit bg-secondary-300">
                                    Message
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>


            <div className="max-w-4xl mx-auto mt-6 bg-gary-50 p-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {imageLinks.map(({ src, description, avatar }, i) => (
                        <div key={i} className="border rounded-lg shadow-md overflow-hidden developer-card relative">
                            {/* Image */}
                            <Image
                                src={src}
                                alt={`Post image ${i + 1}`}
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                         
                            <div className="absolute top-2 right-2 w-10 h-10 rounded-full overflow-hidden border-2 border-white bg-white shadow-md">
                                <Image
                                    src={avatar}
                                    alt={`Avatar ${i + 1}`}
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                            </div>
                       
                            <div className="p-4 flex items-center justify-between bg-primary-50">
                                <span className="text-lg font-semibold">{description}</span>
                                <FaHeart className="text-red-500 cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
