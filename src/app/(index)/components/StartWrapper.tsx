'use client';

import Link from 'next/link';
import Header from './Header';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const variants = {
	rotate: {},
};

const StartWrapper = () => {
	return (
		<motion.div className="h-full w-full flex flex-col items-center">
			<div className="h-full w-full relative"></div>

			<Header />
			<Link href="/mode">
				<Button variant={'cartoon'} hsl={'200'} className="w-48">
					Play
				</Button>
			</Link>
		</motion.div>
	);
};

export default StartWrapper;
