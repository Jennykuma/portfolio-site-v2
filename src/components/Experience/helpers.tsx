export const renderDescriptionWithBold = (text: string) => {
	const segments = text.split(/(\*\*.*?\*\*)/g);

	return segments.map((segment, index) => {
		if (segment.startsWith('**') && segment.endsWith('**') && segment.length > 4) {
			return (
				<span className='font-semibold' key={index}>
					{segment.slice(2, -2)}
				</span>
			);
		}

		return segment;
	});
};
