// // pages/games.js
// import { useState } from 'react';
// import Link from 'next/link';

// const games = [
//     { id: 1, name: 'mouse-climb', image: '/clim.jpeg', url: 'https://poki.com/en/g/mouse-mouse-climb-the-house' },
//     { id: 2, name: 'up-together', image: '/climb.jpeg', url: 'https://poki.com/en/g/up-together' },
//     { id: 3, name: 'fish-eat-fish', image: '/eat-fish.jpeg', url: 'https://poki.com/en/g/fish-eat-fish' },
//     { id: 4, name: 'jungle-friends', image: '/j-f.jpeg', url: 'https://poki.com/en/g/jungle-friends' },
//     { id: 5, name: 'dog-life-simulator', image: '/dog-life.png', url: 'https://poki.com/en/g/dog-life-simulator' },
//     { id: 6, name: 'flyordie-io', image: '/evo.avif', url: 'https://poki.com/en/g/flyordie-io' },
//   ];

// export default function Games() {
//   const [hoveredGame, setHoveredGame] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 p-10">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-green-700 mb-4">Pet Game Space</h1>
//         <p className="text-gray-600">Choose a game and play with your pet!</p>
//       </div>

//       {/* Game Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {games.map((game) => (
//           <Link href={game.url} key={game.id}>
//             <div
//               onMouseEnter={() => setHoveredGame(game.id)}
//               onMouseLeave={() => setHoveredGame(null)}
//               className="relative block rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
//             >
//               <div className="overflow-hidden h-64 bg-gray-300 hexagon">
//                 <img
//                   src={game.image}
//                   alt={game.name}
//                   className={`w-full h-full object-cover transform transition-all duration-500 ${
//                     hoveredGame === game.id ? 'scale-110' : 'scale-100'
//                   }`}
//                 />
//               </div>

//               {/* Game Info */}
//               <div className="p-4 bg-white text-center hexagon-info">
//                 <h3 className="text-xl font-semibold text-green-700">{game.name}</h3>
//                 <p className="text-gray-500">Click to play</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <style jsx>{`
//         .hexagon {
//           position: relative;
//           width: 100%;
//           padding-bottom: 115%; /* Maintain the hexagon aspect ratio */
//           clip-path: polygon(
//             50% 0%, 
//             100% 25%, 
//             100% 75%, 
//             50% 100%, 
//             0% 75%, 
//             0% 25%
//           );
//         }

//         .hexagon-info {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           height: 30%; /* Adjust height to give room for text */
//           clip-path: polygon(
//             50% 0%, 
//             100% 25%, 
//             100% 75%, 
//             50% 100%, 
//             0% 75%, 
//             0% 25%
//           );
//           background: white;
//           box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
//         }
//       `}</style>
//     </div>
//   );
// }



// pages/games.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FluidAnimation from '@/components/fluidEffect/FluidAnimation';

const games = [
  { id: 1, name: 'mouse-climb', image: '/games/clim.jpeg', url: 'https://poki.com/en/g/mouse-mouse-climb-the-house' },
  { id: 2, name: 'up-together', image: '/games/climb.jpeg', url: 'https://poki.com/en/g/up-together' },
  { id: 3, name: 'fish-eat-fish', image: '/games/eat-fish.jpeg', url: 'https://poki.com/en/g/fish-eat-fish' },
  { id: 4, name: 'jungle-friends', image: '/games/j-f.jpeg', url: 'https://poki.com/en/g/jungle-friends' },
  { id: 5, name: 'dog-life-simulator', image: '/games/dog-life.png', url: 'https://poki.com/en/g/dog-life-simulator' },
  { id: 6, name: 'flyordie-io', image: '/games/evo.avif', url: 'https://poki.com/en/g/flyordie-io' },
];

export default function Games() {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);

  return (
    <div className="min-h-screen  p-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-200 md:text-6xl  mb-4 rubik-mono-one-regular">Pet Game Space</h1>
        <p className="text-white">Choose a game and play with your pet!</p>
      </div>
  
      {/* Game Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {games.map((game) => (
          <Link href={game.url} key={game.id}>
            <div
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
              className="relative block rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="hexagon">
                <Image
                  src={game.image}
                  alt={game.name}
                  layout="fill" // Use fill to fill the hexagon
                  objectFit="cover" // Cover to maintain aspect ratio and fill
                  className={`transition-transform duration-500 ${
                    hoveredGame === game.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>

              {/* Game Info */}
              <div className="p-4 bg-white text-center hexagon-info">
                <h3 className="text-xl font-semibold text-green-700">{game.name}</h3>
                <p className="text-gray-500">Click to play</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .hexagon {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 115%; /* Maintain the hexagon aspect ratio */
          clip-path: polygon(
            50% 0%, 
            100% 25%, 
            100% 75%, 
            50% 100%, 
            0% 75%, 
            0% 25%
          );
          overflow: hidden; // Hide any overflow from the hexagon
        }

        .hexagon-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30%; /* Adjust height to give room for text */
          clip-path: polygon(
            50% 0%, 
            100% 25%, 
            100% 75%, 
            50% 100%, 
            0% 75%, 
            0% 25%
          );
          background: white;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <FluidAnimation />
    </div>
  );
}
