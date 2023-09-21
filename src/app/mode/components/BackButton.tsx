import Link from 'next/link';
import { Button } from '@/components/ui/button';
function BackButton() {
	return (
		<Link
			href="/mode"
			className="w-48 h-15 bg-blue-500 rounded-lg p-4 text-xl font-bold"
		>
			&larr; Back
		</Link>
	);
}

export default BackButton;
