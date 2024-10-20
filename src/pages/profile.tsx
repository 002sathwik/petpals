// pages/profile.js
import Image from 'next/image';

export default function Profile() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Profile section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-sm">
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 space-y-4 sm:space-y-0">
          
          {/* Profile picture */}
          <div className="w-28 h-28 rounded-full overflow-hidden">
            <Image
              src="/pet1.jpg"
              alt="Profile picture"
              width={112}
              height={112}
              className="object-cover"
            />
          </div>

          {/* Profile details */}
          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-4">
              <h2 className="text-2xl font-semibold">username</h2>
              <div className="flex space-x-2 mt-2 sm:mt-0">
                <button className="px-4 py-1 border rounded-md font-semibold">
                  Edit Profile
                </button>
                <a href='/message'>
                <button className="px-4 py-1 border rounded-md font-semibold bg-green-500 text-white hover:bg-green-600">
                  Message
                </button>
                </a>
              
              </div>
            </div>
            <div className="flex justify-center sm:justify-start space-x-6">
              <div><span className="font-semibold">100</span> posts</div>
              <div><span className="font-semibold">1.2k</span> followers</div>
              <div><span className="font-semibold">200</span> following</div>
            </div>
            <div className="mt-3">
              <h3 className="font-semibold">Full Name</h3>
              <p className="text-gray-600">Bio description goes here...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Posts section */}
      <div className="max-w-4xl mx-auto mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-full aspect-w-1 aspect-h-1 bg-gray-200">
              <Image
                src="/pet2.jpg"
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
