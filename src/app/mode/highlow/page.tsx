import Link from 'next/link';
import HighLowWrapper from './_components/HighLowWrapper';
import HighLowGame from './_components/HighLowGame';

export default function HighLowPage() {
	return (
		<HighLowWrapper>
			<div className="w-full h-full flex flex-col relative">
				<h1 className="mx-auto text-xl font-semibold">
					Higher or Lower!
				</h1>
				<div className="h-[500px] w-full bg-red-200 rounded-xl border-8 border-black">
					<HighLowGame />
				</div>
				<Link href="/mode" className="absolute top-0 left-0">
					&larr; Back
				</Link>
			</div>
		</HighLowWrapper>
	);
}
