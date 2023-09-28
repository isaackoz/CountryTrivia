import { Metadata } from 'next';
import QuestionWrapper from '../components/common/QuestionWrapper';
export const metadata: Metadata = {
	title: 'General Trivia | CountryBase',
	description: 'Test your trivia skills!',
};

export default function CapitalPage() {
	return (
		<div>
			<QuestionWrapper modeTitle={'General Trivia'} bgColor={'gray'}>
				<p></p>
			</QuestionWrapper>
		</div>
	);
}
