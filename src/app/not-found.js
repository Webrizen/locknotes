import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen py-28 flex flex-col justify-center items-center">
            <Image
                alt="404"
                class="flex-shrink-0 rounded-3xl w-2/5 h-auto object-cover object-center sm:mb-0 mb-4"
                src="/not-found.gif"
                width={200}
                height={200}
            />
            <div className="text-6xl font-bold text-cyan-500">404</div>
            <p className="text-gray-600 text-xl mt-4 text-center">Oops! The page you're looking for does not exist.</p>
            <Link href="/" className="text-indigo-500 hover:underline mt-4">
                Return Home
            </Link>
        </div>
    );
}