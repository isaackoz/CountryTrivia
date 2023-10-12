'use client';

import QuestionWrapper from '../components/common/QuestionWrapper';
import SettingsDropdown from '../components/common/SettingsDropdown';
import FlagGame from './(components)/FlagGame';
import { useState } from 'react';

export type bgColorProps = 'gray' | 'red' | 'green';

export default function FlagPage() {
	const [bgColor, setBgColor] = useState<bgColorProps>('gray');
	return (
		<div>
			<QuestionWrapper modeTitle={'Guess the flag'} bgColor={bgColor}>
				<FlagGame setBgColor={setBgColor} />
			</QuestionWrapper>
		</div>
	);
}
