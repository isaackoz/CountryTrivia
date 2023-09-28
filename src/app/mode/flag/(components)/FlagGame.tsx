'use client';
import Image from 'next/image';
import useCountryData from '@/hooks/useCountryData';
import { useEffect, useState } from 'react';
import { bgColorProps } from '../page';
import clsx from 'clsx';

const FlagGame = ({
	setBgColor,
}: {
	setBgColor: React.Dispatch<React.SetStateAction<bgColorProps>>;
}) => {
	const { data, isLoading, error } = useCountryData();

	const [randomNums, setRandomNums] = useState([0, 1, 2, 3]);
	const [correctAnswer, setCorrectAnswer] = useState(0);
	const [response, setResponse] = useState('');
	const [isVisible, setVisibility] = useState(false);

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
			// Reset the response message
			setResponse('');

			// Generate new random numbers
			const uniqueRandoms = new Set();

			while (uniqueRandoms.size < 4) {
				uniqueRandoms.add(Math.floor(Math.random() * data.length));
			}

			setRandomNums(Array.from(uniqueRandoms as Set<number>));

			setVisibility(false); // Make next button invisible

			// Set a new correct answer
			const randNum = Math.floor(Math.random() * 4);
			setCorrectAnswer(randomNums[randNum]);
		}
	};

	const handleGuess = (num: number) => {
		if (num === correctAnswer) {
			setResponse('Correct!');
			setBgColor('green');
		} else {
			setResponse('Wrong!');
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
				<div
					onClick={() => handleGuess(randomNums[0])}
					className="hover:cursor-pointer"
				>
					<Image
						src={
							data?.countryData[randomNums[0]].flag ||
							'/error.jpg'
						}
						alt={'Flag 1 of 4'}
						width={200}
						height={200}
						className="w-full h-full object-contain"
					/>
				</div>
				<div
					onClick={() => handleGuess(randomNums[1])}
					className="hover:cursor-pointer"
				>
					<Image
						src={
							data?.countryData[randomNums[1]].flag ||
							'/error.jpg'
						}
						alt={'Flag 2 of 4'}
						width={120}
						height={100}
						className="w-full h-full object-contain"
					/>
				</div>
				<div
					onClick={() => handleGuess(randomNums[2])}
					className="hover:cursor-pointer"
				>
					<Image
						src={
							data?.countryData[randomNums[2]].flag ||
							'/error.jpg'
						}
						alt={'Flag 3 of 4'}
						width={120}
						height={100}
						className="w-full h-full object-contain"
					/>
				</div>
				<div
					onClick={() => handleGuess(randomNums[3])}
					className="hover:cursor-pointer"
				>
					<Image
						src={
							data?.countryData[randomNums[3]].flag ||
							'/error.jpg'
						}
						alt={'Flag 4 of 4'}
						width={120}
						height={100}
						className="w-full h-full object-contain"
					/>
				</div>
			</div>
			<div
				className={clsx(
					`text-2xl font-bold rounded-full bg-blue-500 px-2 py-1 justify-self-end hover:cursor-pointer absolute bottom-2 justify end-2`,
					isVisible ? 'visible' : 'invisible'
				)}
				onClick={() => {
					setBgColor('gray');
					refreshQuestion();
				}}
			>
				Next Question
			</div>
		</div>
	);
};

export default FlagGame;
