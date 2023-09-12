import { Button } from '@/components/ui/button';
import Image from 'next/image';

function ModeButton({
	src,
	title,
	subtitle,
}: {
	src: string;
	title: string;
	subtitle: string;
}) {
	return (
		<button className="w-[300px] h-full bg-green-800 text-white text-3xl rounded-2xl hover:scale-[1.05] transition-all duration-300 shadow-xl hover:shadow-none">
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
		</button>
	);
}

export default ModeButton;
