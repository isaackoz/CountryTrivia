import { Metadata } from 'next';
import QuestionWrapper from '../components/common/QuestionWrapper';
import BackButton from '../components/BackButton';
export const metadata: Metadata = {
	title: 'Guess the capital | CountryBase',
	description: 'Guess the capital!',
};

export default function CapitalPage() {
	return (
		<div>
			<QuestionWrapper modeTitle={'Guess the capital'}>
				Hello
				<BackButton />
			</QuestionWrapper>
		</div>
	);
}
