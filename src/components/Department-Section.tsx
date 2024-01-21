interface DepartmentSectionProps {
	title: string;
	description: string;
	imageURL: string;
	members: string[];
}

export default function DepartmentSection(props: DepartmentSectionProps) {
	const { title, description, imageURL, members } = props;
	return (
		<div className="perspective-none relative h-[300px] w-[300px]  bg-transparent  ">
			<div className="relative h-full w-full transform shadow-xl transition-transform  duration-700 ease-in-out [transform-style:preserve-3d]  hover:[transform:rotateY(180deg)]">
				{/* Front side */}
				<div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center bg-gray-300 text-black [-webkit-backface-visibility:hidden] [backface-visibility:hidden] ">
					<img
						className="absolute aspect-square object-cover "
						src={imageURL}
						alt={`Department ${title}`}
					/>
					<h2 className="absolute m-auto rounded p-2 text-center uppercase text-white backdrop-blur-xl">
						{title}
					</h2>
				</div>

				{/* Back side */}
				<div className="text-black-200 absolute inset-0 flex flex-col items-center justify-center bg-gray-200 p-3  text-neutral-950 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)]">
					<h2 className="mb-2 uppercase">{title}</h2>
					<p className="">
						{description}
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}

{
	/* <div className="department-members">
				<h3>Members:</h3>
				<ul>
					{members.map((member, index) => (
						<li key={index}>{member}</li>
					))}
				</ul>
			</div> */
}
