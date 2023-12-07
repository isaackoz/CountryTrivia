import React from 'react';

const EndGameCard = ({
	//children,
	score,
}: {
	//children: React.ReactNode;
	score: number;
}) => {
	return (
		<div className="h-96 w-96 rounded-sm flex flex-col justify-center items-center p-4 m-4">
			<h3 className="text-4xl font-heading drop-shadow-[4px_4px_1px_black] text-white">Game Over!</h3>
			<p className="text-center">Score: {score}</p>
			{/* <div>{children}</div> */}
		</div>
	);
};

export default EndGameCard;
