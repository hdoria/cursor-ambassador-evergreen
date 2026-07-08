'use client';

import React from 'react';
import Image from 'next/image';
import { isPriorityPhoto } from '@/lib/bento-assign';
import { HeaderPhoto } from '@/lib/types';

type BentoGridProps = {
	desktopPhotos: HeaderPhoto[];
	mobilePhotos: HeaderPhoto[];
	cols?: number;
	rows?: number;
	mobileCols?: number;
	mobileRows?: number;
	gapClassName?: string;
};

function toGridPlacement(start: number, span?: number) {
	return `${start} / span ${span ?? 1}`;
}

function getSizes(colSpan: number, cols: number, fallback = 100) {
	const ratio = Math.min(1, Math.max(colSpan / cols, 0));
	return `${Math.round(ratio * fallback)}vw`;
}

const BentoGrid: React.FC<BentoGridProps> = ({
	desktopPhotos,
	mobilePhotos,
	cols = 4,
	rows = 4,
	mobileCols = 2,
	mobileRows = 4,
	gapClassName = 'gap-1',
}) => {
	return (
		<>
			<div
				className={`grid md:hidden h-full ${gapClassName}`}
				style={{
					gridTemplateColumns: `repeat(${mobileCols}, minmax(0, 1fr))`,
					gridTemplateRows: `repeat(${mobileRows}, minmax(0, 1fr))`,
				}}
			>
				{mobilePhotos.map((photo) => (
					<div
						key={`mobile-${photo.src}-${photo.row}-${photo.col}`}
						className="relative overflow-hidden"
						style={{
							gridRow: toGridPlacement(photo.row, photo.rowSpan),
							gridColumn: toGridPlacement(photo.col, photo.colSpan),
						}}
					>
						<Image
							src={photo.src}
							alt={photo.alt}
							fill
							className="object-cover"
							sizes={getSizes(photo.colSpan ?? 1, mobileCols)}
							priority={isPriorityPhoto(photo, mobilePhotos)}
						/>
					</div>
				))}
			</div>

			<div
				className={`hidden md:grid h-full ${gapClassName}`}
				style={{
					gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
					gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
				}}
			>
				{desktopPhotos.map((photo) => (
					<div
						key={`desktop-${photo.src}-${photo.row}-${photo.col}`}
						className="relative overflow-hidden"
						style={{
							gridRow: toGridPlacement(photo.row, photo.rowSpan),
							gridColumn: toGridPlacement(photo.col, photo.colSpan),
						}}
					>
						<Image
							src={photo.src}
							alt={photo.alt}
							fill
							className="object-cover"
							sizes={getSizes(photo.colSpan ?? 1, cols)}
							priority={isPriorityPhoto(photo, desktopPhotos)}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default BentoGrid;
