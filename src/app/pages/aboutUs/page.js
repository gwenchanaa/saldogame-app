import FooterComponent from '@/app/components/footer';
import Link from 'next/link';

export default function AboutUsPage() {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <div className='flex flex-col just items-center h-screen w-full'>
                <div>About Us Page</div>
                <Link href="/">
                    <button className='border-[0.5px] border-black p-2 hover:bg-neutral-200 rounded-lg'>
                        Back Home
                    </button>
                </Link>
            </div>

            <FooterComponent />
        </div>
    );
}
