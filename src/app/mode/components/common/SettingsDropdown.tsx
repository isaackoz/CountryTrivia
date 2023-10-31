const SettingsDropdown = () => {
	return (
		<>
			<input
				type="checkbox"
				className="hidden sr-only peer"
				id="settings-checkbox"
			/>

			<label
				htmlFor="settings-checkbox"
				className="w-8 h-8 absolute -right-12 bg-blue-500 top-0 rounded-lg text-xl flex items-center justify-center hover:cursor-pointer peer-checked:[&>span]:rotate-90"
			>
				<span className="text transition-all">{`➤`}</span>
			</label>
			<div className="hidden peer-checked:flex absolute -right-60  top-12 w-56 bg-gray-100/80 border-8 border-black rounded-lg font-extrabold text-xl justify-center flex-col px-4 pb-1">
				Settings
				<label className="relative inline-flex items-center cursor-pointer">
					<input type="checkbox" value="" className="sr-only peer" />
					<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
					<span className="ml-3 font-medium text-gray-900 dark:text-gray-300 text-lg">
						Hard
					</span>
				</label>
				<label className="lives relative inline-flex items-center cursor-pointer">
					<input type="checkbox" value="" className="sr-only peer" />
					<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
					<span className="ml-3 font-medium text-gray-900 dark:text-gray-300 text-lg">
						Lives
					</span>
				</label>
			</div>
		</>
	);
};

export default SettingsDropdown;
