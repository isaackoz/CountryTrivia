'use client';

import useCountryData from '@/hooks/useCountryData';
import Image from 'next/image';

export default function HighLowGame() {
	const { data, isLoading, error } = useCountryData();

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="w-full h-full grid grid-rows-2 bg-white gap-y-2">
			<div className="relative">
				<Image
					fill
					alt="flag 1"
					src={`${data?.countryData[2].flag}` || 'error'}
					className=""
				/>
				<div className="flex flex-col w-full items-center justify-center h-full z-10 absolute">
					<div className="bg-gray-900/95 flex flex-col text-white p-4 rounded-xl text-center">
						<span className="text-2xl font-extrabold">
							{data?.countryData[2].name}
						</span>
						has a population of{' '}
						<span className=" text-yellow-500 text-4xl mx-auto">
							{data?.countryData[2].population}
						</span>
					</div>
				</div>
			</div>
			<div className="relative">
				<Image
					fill
					alt="flag 1"
					src={`${data?.countryData[4].flag}` || 'error'}
					className=""
				/>
				<div className="flex flex-col w-full items-center justify-center h-fit z-10 absolute">
					<div className="bg-gray-900/95 flex flex-col text-white p-4 rounded-xl text-center">
						<span className="text-2xl font-extrabold">
							{data?.countryData[4].name}&apos;s population is
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
