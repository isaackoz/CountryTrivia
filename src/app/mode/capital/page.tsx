'use client';

import QuestionWrapper from '../components/common/QuestionWrapper';
import CapitalGame from './(components)/CapitalGame';
import { useState } from 'react';

export type bgColorProps = 'gray' | 'red' | 'green';

export default function CapitalPage() {
	const [bgColor, setBgColor] = useState<bgColorProps>('gray');
	return (
		<div>
			<QuestionWrapper modeTitle={'Guess the capital'} bgColor={bgColor}>
				<p>What is the capital of...</p>
				<CapitalGame setBgColor={setBgColor} />
			</QuestionWrapper>
		</div>
	);
}
