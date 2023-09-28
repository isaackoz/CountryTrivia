import BackButton from '../BackButton';
import clsx from 'clsx';
const QuestionWrapper = ({
	children,
	modeTitle,
	bgColor,
}: {
	children: React.ReactNode;
	modeTitle: string;
	bgColor: 'red' | 'green' | 'gray';
}) => {
	return (
		<div className="w-[700px] mx-auto text-center h-screen flex flex-col items-center justify-center p-4">
			<div
				className={clsx(
					`w-full h-[800px] border-8 border-black rounded-xl p-4 flex flex-col relative`,
					bgColor === 'red' && 'bg-red-400',
					bgColor === 'green' && 'bg-green-400/80',
					bgColor === 'gray' && 'bg-gray-100/80'
				)}
			>
				<h1 className="font-heading text-4xl">{modeTitle}</h1>
				<div className="h-full w-full">{children}</div>
			</div>
			<div className="self-start mt-5">
				<BackButton />
			</div>
		</div>
	);
};

export default QuestionWrapper;
