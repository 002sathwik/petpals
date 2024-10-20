

import { ConfettiButton } from "@/components/ui/confetti";
import { useState } from "react";

const avatars = [
    { name: "User 1", src: "/p3.jpg" },
    { name: "User 2", src: "/p4.jpeg" },
    { name: "User 3", src: "/p6.webp" },
    { name: "User 4", src: "/pet1.jpg" },
];

const foods = [
    { name: "Pizza", src: "/food/p6.png" },
    { name: "Burger", src: "/food/p2.jpeg" },
    { name: "Sushi", src: "/food/p3.gif" },
    { name: "Pasta", src: "/food/p4.jpg" },
    { name: "Pasta", src: "/food/p5.png" },
    { name: "Burger", src: "/food/p2.jpeg" },
];

const AssFeed = () => {
    const [selectedAvatar, setSelectedAvatar] = useState<{ name: string; src: string } | null>(null);
    const [selectedFood, setSelectedFood] = useState<{ name: string; src: string } | null>(null);
    const [feed, setFeed] = useState<{ avatar: { name: string; src: string }, food: { name: string; src: string } | null }[]>([]);

    const handleAvatarSelect = (avatar: { name: string; src: string }) => {
        setSelectedAvatar(avatar);
    };

    const handleFoodSelect = (food: { name: string; src: string }) => {
        setSelectedFood(food);
    };

    const handlePostFeed = () => {
        if (!selectedAvatar) {
            alert("Please select an avatar to post!");
            return;
        }

        setFeed((prevFeed) => [
            ...prevFeed,
            {
                avatar: selectedAvatar,
                food: selectedFood,
            },
        ]);


        setSelectedAvatar(null);
        setSelectedFood(null);
    };

    return (
        <div className="container mx-auto my-8 text-center p-2">
            <h1 className=" text-4xl md:text-5xl font-bold  rubik-mono-one-regular text-yellow-400  mb-6 ">FEEDING-GROUND </h1>

            <div className="flex justify-center mb-4">
                {avatars.map((avatar) => (
                    <img
                        key={avatar.name}
                        src={avatar.src}
                        alt={avatar.name}
                        className={`w-16 h-16 rounded-full mx-2 cursor-pointer ${selectedAvatar?.name === avatar.name ? "border-4 border-green-500" : ""
                            }`}
                        onClick={() => handleAvatarSelect(avatar)}
                    />
                ))}
            </div>

            <div className="grid grid-cols-2  md:grid-cols-6 gap-4 mb-4 rounded-lg">
                {foods.map((food) => (
                    <div
                        key={food.name}
                        className={`cursor-pointer p-2 border rounded-xl ${selectedFood?.name === food.name ? "border-green-500" : "border-gray-300"
                            }`}
                        onClick={() => handleFoodSelect(food)}
                    >
                        <img src={food.src} alt={food.name} className="w-16 h-16 mx-auto" />
                        <p className="text-center">{food.name}</p>
                    </div>
                ))}
            </div>


          
               
            <ConfettiButton
             onClick={handlePostFeed}
                className="px-4 py-2 text-white bg-yellow-400 rounded hover:bg-green-600 transition"
            >
                    Feed Food
                </ConfettiButton>

            <div className="mt-8">
                {feed.map((item, index) => (
                    <div key={index} className="flex items-center justify-between my-4 border rounded-lg bg-yellow-50">

                        <img src={item.avatar.src} alt={item.avatar.name} className="w-20 h-20 rounded-full md:ml-10  ml-4  border " />

                        <div className="flex-1 flex justify-center items-center">
                            {item.food && (
                                <img src={item.food.src} alt={item.food.name} className="md:w-20 md:h-20 w-16 h-16 mx-2 rounded-lg" />
                            )}
                        </div>

                        <img
                            src="https://img1.picmix.com/output/stamp/normal/0/2/5/4/2474520_e13fa.gif" // Default dancing dog GIF
                            alt="Dancing Dog"
                            className="w-32"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AssFeed;
