'use client';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import useCountryData from '@/hooks/useCountryData';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import BackButton from '../../components/BackButton';

interface CountryData {
	name: string;
	capital: string;
	flag: string;
	population: number;
}

function formatNumber(num: number) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
const randomKey = uuidv4();

export default function HighLowGame() {
	const { data, isLoading, error } = useCountryData();

	const [currentCountry, setCurrentCountry] = useState<CountryData>();
	const [nextCountry, setNextCountry] = useState<CountryData>();
	const [isCorrect, setIsCorrect] = useState(true);
	const [score, setScore] = useState(0);

	const getRandomCountry = useCallback(() => {
		if (!data?.countryData) return;
		const randomNum = Math.floor(Math.random() * data.length);

		return data.countryData[randomNum];
	}, [data]);

	useEffect(() => {
		if (isLoading || !data?.countryData || !data) return;

		if (!isLoading && data?.length) {
			setCurrentCountry(getRandomCountry());
			setNextCountry(getRandomCountry());
		}
	}, [isLoading, data, getRandomCountry]);

	function handleGuess(guess: 'higher' | 'lower') {
		if (!currentCountry || !nextCountry || !isCorrect) return;
		if (currentCountry.population === nextCountry.population) {
			setIsCorrect(true);
			setCurrentCountry(nextCountry);
			setNextCountry(getRandomCountry());
			return;
		}
		if (guess === 'higher') {
			if (currentCountry.population < nextCountry.population) {
				// current country is lower than next country CORRECT GUESS
				setCurrentCountry(nextCountry);
				setNextCountry(getRandomCountry());
				setIsCorrect(true);
				setScore(score + 1);
			} else {
				// current country is higher than next country INCORRECT GUESS
				setIsCorrect(false);
			}
		} else if (guess === 'lower') {
			if (currentCountry.population > nextCountry.population) {
				// current country is higher than next country CORRECT GUESS
				setCurrentCountry(nextCountry);
				setNextCountry(getRandomCountry());
				setIsCorrect(true);
				setScore(score + 1);
			} else {
				// current country is lower than next country INCORRECT GUESS
				setIsCorrect(false);
			}
		}
	}

	function resetGame() {
		setIsCorrect(true);
		setCurrentCountry(getRandomCountry());
		setNextCountry(getRandomCountry());
		setScore(0);
	}

	if (isLoading || !nextCountry || !currentCountry)
		return <div>Loading...</div>;

	return (
		<>
			<div className="w-full h-full grid grid-rows-2 bg-white relative overflow-hidden">
				{!isCorrect && (
					<div className="bg-red-400 h-full flex items-center justify-center flex-col absolute w-full z-50">
						<div className="text-4xl font-heading drop-shadow-[4px_4px_1px_black] text-white">
							Game over!
						</div>
						<Button
							className="bg-green-500 text-black text-2xl mt-4 hover:bg-green-600 transition"
							onClick={() => resetGame()}
						>
							Try again?
						</Button>
					</div>
				)}
				<AnimatePresence mode="popLayout">
					<motion.div
						className="relative"
						key={uuidv4()}
						initial={{ y: 250, opacity: 1 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -250, opacity: 1 }}
						transition={{ duration: 1 }}
					>
						{!currentCountry || !currentCountry.flag ? (
							<Skeleton className="w-full h-full absolute" />
						) : (
							<Image
								fill
								alt="flag 1"
								src={`${currentCountry.flag}` || 'error'}
								className=""
							/>
						)}
						<div className="flex flex-col w-full items-center justify-center h-full z-10 absolute">
							<div className="bg-gray-900/95 flex flex-col text-white p-1 text-center w-full">
								<span className="text-2xl font-extrabold">
									{currentCountry?.name}&apos;s population is
								</span>
							</div>
							<div className="h-full flex w-full items-center justify-center bg-gray-900/40">
								<span className="text-5xl font-heading drop-shadow-[4px_4px_1px_black] text-yellow-500">
									{formatNumber(
										currentCountry?.population || 0
									)}
								</span>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
				<motion.div
					className="relative"
					key={uuidv4()}
					initial={{ y: 250, opacity: 0 }} // Starts from the bottom
					animate={{ y: 0, opacity: 1 }} // Moves to its normal position
					transition={{ duration: 1 }}
				>
					{!nextCountry || !nextCountry.flag ? (
						<Skeleton className="w-full h-full absolute" />
					) : (
						<Image
							fill
							alt="flag 1"
							src={`${nextCountry.flag}` || 'error'}
							className=""
						/>
					)}

					<div className="flex flex-col w-full items-center justify-center h-full z-10 absolute">
						<div className="bg-gray-900/95 flex flex-col text-white p-1 text-center w-full">
							<span className="text-2xl font-extrabold">
								{nextCountry?.name}&apos;s population is
							</span>
						</div>
						<div className="h-full flex w-full">
							<div
								className="bg-gray-900/40 hover:bg-gray-900/50 w-full transition flex items-center justify-center flex-col hover:cursor-pointer group"
								onClick={() => handleGuess('lower')}
							>
								<span className="text-white font-heading text-3xl drop-shadow-[4px_4px_1px_black]">
									Lower
								</span>
								<ArrowBigDown
									size={64}
									className="fill-white group-hover:fill-red-500 group-hover:translate-y-2 transition delay-0 group-hover:delay-150"
								/>
							</div>
							<div
								className="bg-gray-900/40 hover:bg-gray-900/50 w-full transition flex items-center justify-center flex-col hover:cursor-pointer group"
								onClick={() => handleGuess('higher')}
							>
								<span className="text-white font-heading text-3xl drop-shadow-[4px_4px_1px_black]">
									Higher
								</span>
								<ArrowBigUp
									size={64}
									className="fill-white group-hover:fill-green-500 group-hover:-translate-y-2 transition delay-0 group-hover:delay-150"
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
			<div className="flex gap-7 mt-4 justify-between">
				<BackButton />
				<div className="mt-3 font-heading text-5xl">{`Score: ${score}`}</div>
			</div>
		</>
	);
}
