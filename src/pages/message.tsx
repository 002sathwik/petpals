
import confetti from 'canvas-confetti';
import Image from 'next/image';
import { useState } from 'react';


const petConversations = [
  { id: 1, name: 'Buddy', avatar: '/p4.jpeg', message: 'Woof! Wanna play fetch?' },
  { id: 2, name: 'Whiskers', avatar: '/p5.avif', message: 'Meow! I found a new toy!' },
  { id: 3, name: 'Fluffy', avatar: '/p8.jpeg', message: 'Let’s go on an adventure!' },
];


const petMessages = [
  { id: 1, sender: 'Buddy', text: 'Woof! Wanna play fetch?', time: '2:30 PM' },
  { id: 2, sender: 'Me', text: 'Sure, let’s go to the park!', time: '2:31 PM' },
  { id: 3, sender: 'Buddy', text: 'Yay! I love the park!', time: '2:32 PM' },
];

export default function Messages() {
  const [activeChat, setActiveChat] = useState(petConversations[0]);
  
  const handleClick = () => {
    const scalar = 2;
    const triangle = confetti.shapeFromPath({
        path: "M0 10 L5 0 L10 10z",
    });
    const square = confetti.shapeFromPath({
        path: "M0 0 L10 0 L10 10 L0 10 Z",
    });
    const coin = confetti.shapeFromPath({
        path: "M5 0 A5 5 0 1 0 5 10 A5 5 0 1 0 5 0 Z",
    });
    const tree = confetti.shapeFromPath({
        path: "M5 0 L10 10 L0 10 Z",
    });

    const defaults = {
        spread: 360,
        ticks: 60,
        gravity: 0,
        decay: 0.96,
        startVelocity: 20,
        shapes: [triangle, square, coin, tree],
        scalar,
    };

    const shoot = () => {
        confetti({
            ...defaults,
            particleCount: 30,
        });

        confetti({
            ...defaults,
            particleCount: 5,
        });

        confetti({
            ...defaults,
            particleCount: 15,
            scalar: scalar / 2,
            shapes: ["circle"],
        });
    };

    // Trigger confetti with a slight delay for visual effect
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
};
  return (
    <div className="h-screen flex flex-col sm:flex-row bg-green-50">
     
      <aside className="w-full sm:w-1/4 bg-primary-300  p-4 border-b sm:border-r sm:border-b-0">
        <h2 className="text-xl md:text-3xl font-semibold mb-4 rubik-mono-one-regular text-green-700">PetPals</h2>
        <ul>
          {petConversations.map((conversation) => (
            <li
              key={conversation.id}
              onClick={() => setActiveChat(conversation)}
              className={`flex items-center space-x-4 p-3 cursor-pointer hover:bg-green-100 rounded-md ${
                activeChat.id === conversation.id ? 'bg-green-200' : ''
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
                <h3 className="font-semibold text-green-800">{conversation.name}</h3>
                <p className="text-gray-500 text-sm">{conversation.message}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>


      <main className="flex-1 flex flex-col justify-between">
       
        <header className="flex items-center p-4 border-b bg-primary-300">
          <Image
            src={activeChat.avatar}
            alt={activeChat.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-green-800">{activeChat.name}</h3>
            <p className="text-sm text-gray-500">Active now</p>
          </div>
        </header>

  
        <div className="flex-1 p-4 overflow-y-scroll bg-green-50">
          {petMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'Me' ? 'justify-end' : ''} mb-4`}
            >
              <div
                className={`${
                  message.sender === 'Me' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'
                } p-3 rounded-lg max-w-xs`}
              >
                <p>{message.text}</p>
                <span className="text-xs text-gray-00 block mt-1">{message.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t bg-white">
          <form className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Send a message to your pet..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
               <div className="relative">
            <button
                type="button"
                onClick={handleClick}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
                Send
            </button>
        </div>
          </form>
        </div>
      </main>
    </div>
  );
}
