"use client"

import { useRouter } from "next/navigation";
import Navbar from "./(Components)/Navbar";


const data = [
  {
    title: 'Write blog on any topic you want',
    desc: "Make your own custom blog with images and help others fulfill their queries"
  },
  {
    title: 'Users can add comments on the blogs',
    desc: "Users can write their opinions about the blog in the comment section, or add insights regarding the topic."
  },
  {
    title: "Search support of blog",
    desc: "Users can search their favorite creator's blog in a fraction of seconds"
  },
  {
    title: "Creators can delete comments and blogs",
    desc: "Creators can delete comments that are detrimental to their community"
  }
];

export default function Home() {
  const router = useRouter();
  const sentence = 'A Blogging Application to sort every query';
  const words = sentence.split(' ');

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-500 to-green-300">
      <Navbar />

      <div className='flex-1 p-10'>
        <div className='flex flex-col  items-center gap-5'>
          <h1 className='text-white text-5xl font-semibold'>
            {words.map((word, index) => (
              <span key={index} style={word === 'Blogging' ? { color: '#AA336A' } : {}}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className='text-white text-2xl'>A Blogging application for all individuals who are willing to change the world by sharing their knowledge.</p>
          <div className='grid grid-cols-1  md:grid-cols-2 gap-6'>
            {data.map((item, index) => (
              <div key={index} className='bg-white md:min-h-96 max-w-2xl p-10 border-2 border-gray-400 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
                <div className='flex flex-col items-center text-center'>
                  <h3 className='text-gray-800 text-3xl font-bold mb-4'>{item.title}</h3>
                  <p className='text-gray-600 mb-8'>{item.desc}</p>
                  <button onClick={() => router.push('/signup')} className='hover:bg-yellow-500 bg-pink-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300'>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
