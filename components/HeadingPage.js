
const HeadingPage = ({ titulo }) => {
	return (
		<div className="relative bg-heading bg-contain bg-no-repeat bg-fixed h-full">
			<div className="flex flex-col w-full p-14 lg:flex-row items-center justify-between">
				<div className="flex w-full flex-col items-center">
					<div className=" relative z-30  bg-center lg:h-auto text-white text-center space-y-3 ">
						<div className="text-white text-xl md:text-4xl lg:text-5xl text-center font-bold textShadow">
							{titulo}
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
};

export default HeadingPage