'use client';

import useSwr from 'swr';

interface CountryData {
	name: string;
	capital: string;
	flag: string;
	population: number;
}

const fetcher = (url: string) =>
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			const length = data.length as number;
			const countryData = data.map((country: any) => {
				return {
					name: country.name.common as string,
					capital: country.capital[0] as string,
					flag: country.flags.svg as string,
					population: country.population as number,
				};
			}) as CountryData[];

			return {
				length,
				countryData,
			};
		});

const useCountryData = () => {
	const { data, error } = useSwr(
		`https://restcountries.com/v3.1/all?fields=name,capital,flags,population`,
		fetcher,
		{
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
			refreshWhenOffline: false,
			refreshWhenHidden: false,
			refreshInterval: 0,
		}
	);

	return {
		data,
		error,
		isLoading: !error && !data,
	};
};

export default useCountryData;
