'use client';

import Header from './Header';
import PlayButton from './PlayButton';
import { motion } from 'framer-motion';

const variants = {
	rotate: {},
};

const StartWrapper = () => {
	return (
		<motion.div className="h-full w-full flex flex-col items-center">
			<div className="h-full w-full relative">
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 800 800"
					className="absolute left-0 top-0 bottom-0 right-0 z-[-1] h-screen w-screen"
					preserveAspectRatio="none"
				>
					<rect fill="#ffffff" width="100%" height="100%" />
					<defs>
						<radialGradient
							id="a"
							cx="400"
							cy="400"
							r="50%"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0" stop-color="#ffffff" />
							<stop offset="1" stop-color="#0EF" />
						</radialGradient>
						<radialGradient
							id="b"
							cx="400"
							cy="400"
							r="100%"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0" stop-color="#ffffff" />
							<stop offset="1" stop-color="#0FF" />
						</radialGradient>
					</defs>
					<rect fill="url(#a)" width={'100%'} height={'100%'} />
					<g fill-opacity=".8">
						<motion.path
							initial={{ scale: 0, pathLength: 0, rotate: 0 }}
							animate={{
								scale: 1,
								rotate: 360,
								pathLength: 1,
								transition: {
									duration: 2,
									rotate: {
										duration: 60,
										ease: 'linear',
										repeatType: 'loop',
										repeatDelay: 0,
										bounce: 0,
										repeat: Infinity,
									},
								},
							}}
							fill="url(#b)"
							d="m 998.7 439.2 c 1.7 -26.5 1.7 -52.7 0.1 -78.5 l -597.8 39.2 c 0 0 0 -0.1 0 -0.1 l 587.6 -116.9 c -5.1 -25.9 -11.9 -51.2 -20.3 -75.8 l -567.4 192.6 c 0 0 0 -0.1 0 -0.1 l 537.3 -265 c -11.6 -23.5 -24.8 -46.2 -39.3 -67.9 l -498.1 332.8 c 0 0 0 -0.1 -0.1 -0.1 l 450.4 -395 c -17.3 -19.7 -35.8 -38.2 -55.5 -55.5 l -395 450.4 c 0 0 -0.1 0 -0.1 -0.1 l 332.9 -498.2 c -21.7 -14.5 -44.4 -27.6 -68 -39.3 l -265 537.4 c 0 0 -0.1 0 -0.1 0 l 192.6 -567.4 c -24.6 -8.3 -49.9 -15.1 -75.8 -20.2 l -116.9 587.5 c 0 0 -0.1 0 -0.1 0 l 39.2 -597.7 c -26.5 -1.7 -52.7 -1.7 -78.5 -0.1 l 39.1 597.8 c 0 0 -0.1 0 -0.1 0 l -116.9 -587.6 c -25.9 5.1 -51.2 11.9 -75.8 20.3 l 192.6 567.4 c 0 0 -0.1 0 -0.1 0 l -265 -537.3 c -23.5 11.6 -46.2 24.8 -67.9 39.3 l 332.8 498.1 c 0 0 -0.1 0 -0.1 0.1 l -395 -450.4 c -19.7 17.2 -38.2 35.8 -55.5 55.5 l 450.4 395 c 0 0 0 0.1 -0.1 0.1 l -498.2 -332.9 c -14.5 21.7 -27.6 44.4 -39.3 68 l 537.4 265 c 0 0 0 0.1 0 0.1 l -567.4 -192.6 c -8.3 24.6 -15.1 49.9 -20.2 75.8 l 587.5 116.9 c 0 0 0 0.1 0 0.1 l -597.7 -39.2 c -1.7 26.5 -1.7 52.7 -0.1 78.5 l 597.8 -39.1 c 0 0 0 0.1 0 0.1 l -587.6 116.9 c 5.1 25.9 11.9 51.2 20.3 75.8 l 567.4 -192.6 c 0 0 0 0.1 0 0.1 l -537.3 265 c 11.6 23.5 24.8 46.2 39.3 67.9 l 498.1 -332.8 c 0 0 0 0.1 0.1 0.1 l -450.4 395 c 17.3 19.7 35.8 38.2 55.5 55.5 l 395 -450.4 c 0 0 0.1 0 0.1 0.1 l -332.9 498.2 c 21.7 14.5 44.4 27.6 68 39.3 l 265 -537.4 c 0 0 0.1 0 0.1 0 l -192.6 567.4 c 24.6 8.3 49.9 15.1 75.8 20.2 l 116.9 -587.5 c 0 0 0.1 0 0.1 0 l -39.2 597.7 c 26.5 1.7 52.7 1.7 78.5 0.1 l -39.1 -597.8 c 0 0 0.1 0 0.1 0 l 116.9 587.6 c 25.9 -5.1 51.2 -11.9 75.8 -20.3 l -192.6 -567.4 c 0 0 0.1 0 0.1 0 l 265 537.3 c 23.5 -11.6 46.2 -24.8 67.9 -39.3 l -332.8 -498.1 c 0 0 0.1 0 0.1 -0.1 l 395 450.4 c 19.7 -17.3 38.2 -35.8 55.5 -55.5 l -450.4 -395 c 0 0 0 -0.1 0.1 -0.1 l 498.2 332.9 c 14.5 -21.7 27.6 -44.4 39.3 -68 l -537.4 -265 c 0 0 0 -0.1 0 -0.1 l 567.4 192.6 c 8.3 -24.6 15.1 -49.9 20.2 -75.8 l -587.5 -116.9 c 0 0 0 -0.1 0 -0.1 l 597.7 39.1 z"
						/>
					</g>
				</motion.svg>
			</div>

			<Header />
			<PlayButton />
		</motion.div>
	);
};

export default StartWrapper;
