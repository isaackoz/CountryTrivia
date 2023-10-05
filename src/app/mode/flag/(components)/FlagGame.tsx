'use client';
import Image from 'next/image';
import useCountryData from '@/hooks/useCountryData';
import { useEffect, useState } from 'react';
import { bgColorProps } from '../page';
import clsx from 'clsx';
import { CheckCircle2, CheckIcon, XCircle } from 'lucide-react';

const FlagGame = ({
	setBgColor,
}: {
	setBgColor: React.Dispatch<React.SetStateAction<bgColorProps>>;
}) => {
	const { data, isLoading, error } = useCountryData();

	const [randomNums, setRandomNums] = useState([0, 1, 2, 3]);
	const [correctAnswer, setCorrectAnswer] = useState(0);
	const [response, setResponse] = useState<boolean | null>(null);
	const [guess, setGuess] = useState<number | null>(null);
	const [isVisible, setVisibility] = useState(false);
	const [answerLock, setAnswerLock] = useState(false);
	const [score, setScore] = useState(0);
	const [nextBtnClicked, setNextBtnClicked] = useState(false);

	useEffect(() => {
		if (!isLoading && data?.length) {
			const uniqueRandoms = new Set();

			// Ensure unique random numbers
			while (uniqueRandoms.size < 4) {
				uniqueRandoms.add(Math.floor(Math.random() * data.length));
			}

			setRandomNums(Array.from(uniqueRandoms as Set<number>));
		}
	}, [data, isLoading]);

	useEffect(() => {
		if (!isLoading && data?.length) {
			const randNum = Math.floor(Math.random() * 4);
			setCorrectAnswer(randomNums[randNum]);
		}
	}, [randomNums, isLoading, data]);

	const refreshQuestion = () => {
		if (!isLoading && data?.length) {
			// Locks next button to prevent double click while async loading
			setNextBtnClicked(true);

			// Reset the response message
			setResponse(null);
			setGuess(null);

			// Reset background color
			setBgColor('gray');

			// Generate new random numbers
			const uniqueRandoms = new Set();

			while (uniqueRandoms.size < 4) {
				uniqueRandoms.add(Math.floor(Math.random() * data.length));
			}

			const newRandomNums = Array.from(uniqueRandoms as Set<number>);
			setRandomNums(newRandomNums);

			setVisibility(false); // Make next button invisible

			// Set a new correct answer
			const randNum = Math.floor(Math.random() * 4);
			setCorrectAnswer(newRandomNums[randNum]);

			// Reset answer lock
			setAnswerLock(false);

			// Unlocks next button
			setNextBtnClicked(false);
		}
	};

	const handleGuess = (num: number) => {
		setGuess(num);
		if (answerLock) return;
		setAnswerLock(true);
		if (num === correctAnswer) {
			setResponse(true);
			setBgColor('green');
			setScore(score + 1);
		} else {
			setResponse(false);
			setBgColor('red');
		}
		setVisibility(true); // Make next button visible
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="flex flex-col mt-10">
			<div className="text-4xl font-extrabold text-black">
				{data?.countryData[correctAnswer].name || 'Error'}?
			</div>
			<div className="grid grid-cols-2 grid-rows-2 w-full gap-12 h-96 mt-4">
				{randomNums.map((num, index) => (
					<FlagSection
						key={index}
						handleGuess={handleGuess}
						flag={data?.countryData[num].flag || 'Error'}
						altText={data?.countryData[num].name || 'Error'}
						num={num}
						correctAnswer={correctAnswer}
						response={response}
						guess={guess}
					/>
				))}
			</div>
			{response}
			<div className="absolute bottom-2 left-2 font-heading text-5xl">
				{`Score: ${score}`}
			</div>
			<button
				disabled={isLoading || nextBtnClicked}
				className={clsx(
					`text-2xl font-bold rounded-full bg-blue-500 px-2 py-1 justify-self-end hover:cursor-pointer absolute bottom-2 justify end-2`,
					isVisible ? 'visible' : 'invisible'
				)}
				onClick={() => {
					refreshQuestion();
				}}
			>
				Next Question
			</button>
		</div>
	);
};

export default FlagGame;

const FlagSection = ({
	handleGuess,
	flag,
	altText,
	num,
	correctAnswer,
	response,
	guess,
}: {
	handleGuess: (index: number) => void;
	flag: string;
	altText: string;
	num: number;
	correctAnswer: number;
	response: boolean | null;
	guess: number | null;
}) => (
	<div
		onClick={() => handleGuess(num)}
		className="hover:cursor-pointer h-full w-full relative"
	>
		{guess === null ? null : guess === correctAnswer && guess === num ? (
			<div className="absolute text-black z-20 -left-4 -top-4">
				<CheckCircle2 size={48} className="fill-green-500 stroke-2" />
			</div>
		) : (
			guess === num && (
				<div className="absolute text-black z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80">
					<XCircle size={128} className="fill-red-500 stroke-2" />
				</div>
			)
		)}

		<Image
			src={flag}
			alt={altText}
			fill
			className={clsx(
				`object-contain rounded-lg transition`,
				guess !== null &&
					(num === correctAnswer
						? 'scale-105'
						: 'filter grayscale scale-75')
			)}
		/>
	</div>
);
