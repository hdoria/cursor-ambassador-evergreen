'use client';

import DOMPurify from 'dompurify';
import React from 'react';
import { Slide } from '@/modules/slides/types';

interface SlideContentProps {
	slide: Slide;
}

const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
	if (typeof slide.content === 'string') {
		const sanitized = DOMPurify.sanitize(slide.content);
		return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
	}

	return <>{slide.content}</>;
};

export default SlideContent;
