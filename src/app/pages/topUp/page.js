import Link from 'next/link';

export default function TopUpPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full">
            <div>Top Up Page</div>
            <Link href="/">
                <button className='border-[0.5px] border-black p-2 hover:bg-neutral-200 rounded-lg'>
                    Back Home
                </button>
            </Link>
        </div>
    );
}
