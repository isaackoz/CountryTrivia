export default function HighLowWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex items-center justify-center max-w-md mx-auto min-h-screen relative">
			{children}
		</div>
	);
}
