import ModeButton from './components/ModeButton';

export default function Home() {
	return (
		<main className="flex items-center justify-center min-h-screen flex-col">
			<div className="grid grid-cols-2 gap-8 h-full">
				<ModeButton>Guess the Flag</ModeButton>
				<ModeButton>Guess the Capital</ModeButton>
				<ModeButton>Population Higher or Lower</ModeButton>
				<ModeButton>Guess the Country</ModeButton>
			</div>
		</main>
	);
}
