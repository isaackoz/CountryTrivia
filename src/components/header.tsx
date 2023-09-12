export default function HeaderTitle({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<h1 className="text-4xl sm:text-6xl lg:text-8xl font-heading [-webkit-text-stroke:2px_black] lg:[-webkit-text-stroke:5px_black]  text-red-500 whitespace-nowrap select-none">
			{children}
		</h1>
	);
}
