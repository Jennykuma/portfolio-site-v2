import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export const DotIcon = ({ className, ...props }: IconProps) => (
	<svg
		viewBox='0 0 24 24'
		aria-hidden='true'
		focusable='false'
		className={className}
		{...props}
	>
		<circle cx='12' cy='12' r='3' fill='currentColor' />
	</svg>
);

export const ExternalLinkIcon = ({ className, ...props }: IconProps) => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		aria-hidden='true'
		focusable='false'
		className={className}
		{...props}
	>
		<path d='M15 3h6v6' />
		<path d='M10 14 21 3' />
		<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
	</svg>
);

export const MailIcon = ({ className, ...props }: IconProps) => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		aria-hidden='true'
		focusable='false'
		className={className}
		{...props}
	>
		<path d='M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z' />
		<path d='m22 7-10 6L2 7' />
	</svg>
);
