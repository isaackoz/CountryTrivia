'use client';
import Image from 'next/image';
import Link from 'next/link';

function ModeButton({
	src,
	title,
	subtitle,
	href,
}: {
	src: string;
	title: string;
	subtitle: string;
	href: string;
}) {
	if (href == '/mode/random') {
		href = '/mode/' + selectGame();
	}
	return (
		<Link
			href={`${href}`}
			className="w-[300px] text-center h-full bg-green-800 text-white text-3xl rounded-2xl hover:scale-[1.05] transition-all duration-300 shadow-xl hover:shadow-none"
		>
			<Image
				src={src}
				alt={title}
				width={576}
				height={480}
				className="rounded-t-2xl"
			/>
			<div className="py-4">
				Play now
				<h2 className="sr-only">{title}</h2>
				<p className="sr-only">{subtitle}</p>
			</div>
		</Link>
	);
}

function selectGame() {
	const selection = ['highlow', 'capital', 'flag'];
	const gameMode = selection[Math.floor(Math.random() * selection.length)];

	return gameMode;
}

export default ModeButton;
