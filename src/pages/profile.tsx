"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const imageLinks = [
  "/post/p1.jpg",
  "/post/p2.jpg",
  "/post/p3.jpeg",
  "/post/p4.jp3g",
  "/post/p5.jpeg",
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
    <div className="bg-gray-100 min-h-screen text-black pt-8">
      {/* Profile Header */}
      <div className="max-w-4xl mx-auto p-6 bg-primary-200 rounded-lg">
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
              <h2 className="text-2xl font-semibold">Timmy</h2>
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
              <p className="text-gray-600">I am ti</p>
            </div>

            <button className="px-4 py-1 border rounded-md font-semibold w-fit bg-secondary-300">
              Feed
            </button>
          </div>
        </div>
      </div>

      {/* Post Grid */}
      <div className="max-w-4xl mx-auto mt-6 rounded-lg bg-primary-200 p-4">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-2">
          {/* Example Post Items */}
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-full aspect-w-1 aspect-h-1 bg-gray-200 developer-card"
            >
              {/* Replace with Image component for dynamic images */}
              <Image
                src="/pet2.jpg" // Replace with post images
                alt="Post image"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
