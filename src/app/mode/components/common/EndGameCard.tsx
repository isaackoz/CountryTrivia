import React from 'react';

const EndGameCard = ({
	//children,
	score,
}: {
	//children: React.ReactNode;
	score: number;
}) => {
	return (
		<div className="h-96 w-96 rounded-sm bg-opacity-50 bg-white">
			<h3 className="text-lg font-extrabold text-center">YOU LOSE!</h3>
			<p className="text-center">You scored: {score}</p>
			{/* <div>{children}</div> */}
		</div>
	);
};

export default EndGameCard;
