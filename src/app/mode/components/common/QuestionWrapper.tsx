import BackButton from '../BackButton';

const QuestionWrapper = ({
	children,
	modeTitle,
}: {
	children: React.ReactNode;
	modeTitle: string;
}) => {
	return (
		<div className="w-[700px] mx-auto text-center h-screen flex flex-col items-center justify-center p-4">
			<div className="w-full h-[800px] border-8 border-black rounded-xl bg-gray-100/80 p-4 flex flex-col">
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
