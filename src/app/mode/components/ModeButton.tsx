function ModeButton({ children }: { children: React.ReactNode }) {
	return (
		<button className="px-4 py-1 bg-sky-500 rounded-lg hover:bg-sky-400 text-6xl w-full h-48">
			{children}
		</button>
	);
}

export default ModeButton;
