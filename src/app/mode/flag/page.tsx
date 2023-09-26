import { Metadata } from 'next';
import QuestionWrapper from '../components/common/QuestionWrapper';
import FlagGame from './(components)/FlagGame';
export const metadata: Metadata = {
	title: 'Guess the Flag | CountryBase',
	description: 'Guess the flag!',
};

export default function CapitalPage() {
	return (
		<div>
			<QuestionWrapper modeTitle={'Guess the flag'}>
				<FlagGame />
			</QuestionWrapper>
		</div>
	);
}
