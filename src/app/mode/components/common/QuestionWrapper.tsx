const QuestionWrapper = ({
	children,
	modeTitle,
}: {
	children: React.ReactNode;
	modeTitle: string;
}) => {
	return (
		<div className="max-w-7xl mx-auto text-center h-screen flex items-center justify-center">
			<div className="w-[700px] h-[800px] flex flex-col items-center justify-center border-2 border-black rounded-xl">
				<h1>{modeTitle}</h1>
				{children}
			</div>
		</div>
	);
};

export default QuestionWrapper;
