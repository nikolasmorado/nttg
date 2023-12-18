'use client';
import { FC, ReactNode } from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';
// import { ScrollSmoother } from '../lib/utils/gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SmootherWrapperProps {
	children: ReactNode;
}

const SmootherWrapper: FC<SmootherWrapperProps> = ({ children }) => {
	useEffect(() => {
		gsap.registerPlugin(
			ScrollTrigger
			// ScrollSmoother
		);
		// const smoother = ScrollSmoother.create({
		// 	smooth: 1,
		// 	effects: true,
		// 	smoothTouch: 0,
		// });
	}, []);

	return (
		<div id="smooth-wrapper" style={{ minWidth: '100vw' }}>
			{children}
		</div>
	);
};

export default SmootherWrapper;
