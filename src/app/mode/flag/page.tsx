import { Metadata } from 'next';
import QuestionWrapper from '../components/common/QuestionWrapper';
export const metadata: Metadata = {
	title: 'Guess the Flag | CountryBase',
	description: 'Guess the flag!',
};

export default function CapitalPage() {
	return (
		<div>
			<QuestionWrapper modeTitle={'Guess the flag'}>
				<img></img>
			</QuestionWrapper>
		</div>
	);
}
