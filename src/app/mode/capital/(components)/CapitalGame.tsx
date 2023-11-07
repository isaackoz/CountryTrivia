'use client';
import Image from 'next/image';
import useCountryData from '@/hooks/useCountryData';
import { useEffect, useState } from 'react';
import { bgColorProps } from '../page';
import clsx from 'clsx';
import { CheckCircle2, CheckIcon, XCircle } from 'lucide-react';
import EndGameCard from '../../components/common/EndGameCard';
import Modal from 'react-modal';
import { useSettingsStore } from '@/store/settingsStore';
import Link from 'next/link';

const CapitalGame = ({
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
	const [lives, setLives] = useState(3);
	const [nextBtnClicked, setNextBtnClicked] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { isLivesEnabled } = useSettingsStore((state) => {
		return { isLivesEnabled: state.isLivesEnabled };
	});
	const { isHard } = useSettingsStore((state) => {
		return { isHard: state.isHard };
	});
	const [nameEnabled, toggleName] = useState(!isHard);
	const customStyles = {
		overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			zIndex: 100000,
		},
	};

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

	useEffect(() => {
		toggleName(!isHard);
	}, [isHard]);

	const refreshQuestion = () => {
		if (!isLoading && data?.length) {
			// Locks next button to prevent double click while async loading
			setNextBtnClicked(true);

			// Rehides Country Name is difficulty = hard
			toggleName(!isHard);

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
		toggleName(true); // Make country name visible
		if (num === correctAnswer) {
			setResponse(true);
			setBgColor('green');
			setScore(score + 1);
		} else {
			setResponse(false);
			setBgColor('red');
			if (isLivesEnabled) {
				setLives(lives - 1);
			}
			if (lives <= 0) {
				setIsOpen(true);
				return; // Avoid setting nextButton to visible
			}
		}
		setVisibility(true); // Make next button visible
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="flex flex-col mt-1">
			<Modal
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				style={customStyles}
				ariaHideApp={false}
			>
				<EndGameCard score={score} />
				<div className="flex justify-between">
					<Link href="/mode">
						<button
							onClick={() => setIsOpen(false)}
							className="text-2xl font-bold rounded-full bg-blue-500 px-2 py-1 hover:cursor-pointer"
						>
							Mode Selection
						</button>
					</Link>
					<button
						onClick={() => {
							setIsOpen(false);
							window.location.reload();
						}}
						className="text-2xl font-bold rounded-full bg-blue-500 px-2 py-1 hover:cursor-pointer"
					>
						Play Again
					</button>
				</div>
			</Modal>
			<div className="text-4xl font-extrabold text-black">
				{nameEnabled
					? data?.countryData[correctAnswer].name || 'Error'
					: 'This Country'}
				?
			</div>
			<div className="self-center">
				<Image
					src={
						data?.countryData[correctAnswer].flag ||
						'Image not found'
					}
					alt="Flag"
					width={200}
					height={100}
					className={'rounded-lg object-contain'}
				/>
			</div>
			<div className="grid grid-cols-2 grid-rows-2 w-full gap-12 h-96 mt-4">
				{randomNums.map((num, index) => (
					<CapitalSection
						key={index}
						handleGuess={handleGuess}
						capital={data?.countryData[num].capital || 'Error'}
						altText={data?.countryData[num].name || 'Error'}
						num={num}
						correctAnswer={correctAnswer}
						response={response}
						guess={guess}
					/>
				))}
			</div>
			{response}
			<div className="flex gap-7 mt-4 justify-between">
				<div className="bottom-2 left-2 font-heading text-5xl">
					{`Score: ${score}`}
				</div>
				<div
					className={clsx(
						`bottom-2 font-heading text-5xl`,
						isLivesEnabled ? 'visible' : 'invisible',
						lives < 0 ? 'text-red-600' : ''
					)}
				>
					{lives >= 0 ? `Lives: ${lives}` : 'LOSE'}
				</div>
				<button
					disabled={isLoading || nextBtnClicked}
					className={clsx(
						`text-2xl font-bold rounded-full bg-blue-500 px-2 py-1 justify-self-end hover:cursor-pointer bottom-2 justify end-2`,
						isVisible ? 'visible' : 'invisible'
					)}
					onClick={() => {
						refreshQuestion();
					}}
				>
					Next Question
				</button>
			</div>
		</div>
	);
};

export default CapitalGame;

const CapitalSection = ({
	handleGuess,
	capital,
	altText,
	num,
	correctAnswer,
	response,
	guess,
}: {
	handleGuess: (index: number) => void;
	capital: string;
	altText: string;
	num: number;
	correctAnswer: number;
	response: boolean | null;
	guess: number | null;
}) => (
	<button
		onClick={() => handleGuess(num)}
		className={clsx(
			'hover:cursor-pointer h-full w-full relative',
			'bg-blue-400 rounded-xl shadow-xl text-4xl',
			guess !== null &&
				(num === correctAnswer
					? 'scale-105'
					: 'filter grayscale scale-75')
		)}
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
		{capital}
	</button>
);
