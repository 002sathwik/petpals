import Image from "next/image";
import { useState } from "react";

const petConversations = [
  {
    id: 1,
    name: "Buddy",
    avatar: "/p4.jpeg",
    message: "Woof! Wanna play fetch?",
  },
  {
    id: 2,
    name: "Whiskers",
    avatar: "/p5.avif",
    message: "Meow! I found a new toy!",
  },
  {
    id: 3,
    name: "Fluffy",
    avatar: "/p8.jpg",
    message: "Let’s go on an adventure!",
  },
];

const petMessages = [
  { id: 1, sender: "Buddy", text: "Woof! Wanna play fetch?", time: "2:30 PM" },
  { id: 2, sender: "Me", text: "Sure, let’s go to the park!", time: "2:31 PM" },
  { id: 3, sender: "Buddy", text: "Yay! I love the park!", time: "2:32 PM" },
];

export default function Messages() {
  const [activeChat, setActiveChat] = useState(petConversations[0]);

  return (
    <div className="h-screen flex flex-col sm:flex-row ">
      {/* Sidebar - Pet Conversations */}
      <aside className="w-full sm:w-1/4 bg-white p-4 border-b sm:border-r sm:border-b-0">
        <h2 className="text-xl font-semibold mb-4 text-primary-600">PetPals</h2>
        <ul>
          {petConversations.map((conversation) => (
            <li
              key={conversation.id}
              onClick={() => setActiveChat(conversation)}
              className={`flex items-center space-x-4 p-3 cursor-pointer hover:bg-primary-100 rounded-md ${
                activeChat.id === conversation.id ? "bg-primary-200" : ""
              }`}
            >
              <Image
                src={conversation.avatar}
                alt={conversation.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-primary-600">
                  {conversation.name}
                </h3>
                <p className="text-primary-500 text-sm">
                  {conversation.message}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 flex flex-col justify-between">
        {/* Chat Header */}
        <header className="flex items-center p-4 border-b bg-white">
          <Image
            src={activeChat.avatar}
            alt={activeChat.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-primary-800">
              {activeChat.name}
            </h3>
            <p className="text-sm text-gray-500">Active now</p>
          </div>
        </header>

        <div className="flex-1 p-4 overflow-y-scroll bg-primary-50">
          {petMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "Me" ? "justify-end" : ""
              } mb-4`}
            >
              <div
                className={`${
                  message.sender === "Me"
                    ? "bg-primary-500 text-white"
                    : "bg-gray-200 text-slate-700"
                } p-3 rounded-lg max-w-xs`}
              >
                <p>{message.text}</p>
                <span className="text-xs text-gray-400 block mt-1">
                  {message.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-white">
          <form className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Send a message to your pet..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
