'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2, delay: 2 }}
		>
			<Image
				src="/c4.png"
				alt="Logo"
				width={800}
				height={500}
				className=""
			/>
			<h1 className="sr-only">Country Trivia</h1>
		</motion.div>
	);
};

export default Header;
