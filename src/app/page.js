import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div>Homepage</div>
      <div className='flex gap-3'>
        <Link href="./pages/payment">
          <button className='border-[0.5px] border-black p-2 hover:bg-neutral-200 rounded-lg'>Payment</button>
        </Link>
        <Link href="./pages/detailProduct">
          <button className='border-[0.5px] border-black p-2 hover:bg-neutral-200 rounded-lg'>Detail Product</button>
        </Link>
        <Link href="./pages/profile">
          <button className='border-[0.5px] border-black p-2 hover:bg-neutral-200 rounded-lg'>Profile</button>
        </Link>
        <Link href="./pages/topUp">
          <button className='border-[0.5px] border-black p-2 hover:bg-neutral-200 rounded-lg'>Top Up</button>
        </Link>
        <Link href="./pages/aboutUs">
          <button className='border-[0.5px] border-black p-2 hover:bg-neutral-200 rounded-lg'>About Us</button>
        </Link>
      </div>
    </div>
  );
}
