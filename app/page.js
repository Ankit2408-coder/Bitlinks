import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='bg-green-100'>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-extrabold">
            The best URL shortner in the Market
          </p>
          <p className='px-10 text-center'>
            We are the most straight forward URL Shortner in the world. Most of the URL shortner will track you ask you to give your detals for login. We understand your need and hance we have created this URL shortner
          </p>
          <div className='flex gap-3'>
            <Link href="/shorten" ><button className='bg-green-700 rounded-xl text-green-50 hover:bg-green-600 p-3 py-1 font-bold cursor-pointer shadow-lg'>Try Now</button></Link>
            <Link href="/github" ><button className='bg-green-700 rounded-xl text-green-50 hover:bg-green-600 p-3 py-1 font-bold cursor-pointer shadow-lg'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex relative justify-start">
          <Image className='mix-blend-darken' src="/vector.jpg" fill={true} alt="an Image of a vector" />


        </div>
      </section>
    </main>
  );
}
