interface ParagraphProps {
	title: string;
	content: string;
}

export default function Paragraph(paragraphProps: ParagraphProps) {
	const { title, content } = paragraphProps;
	return (
		<section className="p-2">
			<h3 className="text-md my-3 font-bold">{title}</h3>
			<p>{content}</p>
		</section>
	);
}
