import React, { useEffect, useState } from "react";
import CardClientes from "./CardClientes";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const clientes = [
	{
		id: 1,
		comentario:
			"BeautyZone was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.",
		nombre: "Evelyn Martinez",
		profecion: "Fashion Designer",
		imagen: "/imagen/avatar.png",
	},
	{
		id: 2,
		comentario:
			"BeautyZone was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.",
		nombre: "Evelyn Martinez",
		profecion: "Fashion Designer",
		imagen: "/imagen/avatar.png",
	},
	{
		id: 3,
		comentario:
			"BeautyZone was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.",
		nombre: "Evelyn Martinez",
		profecion: "Fashion Designer",
		imagen: "/imagen/image2.png",
	},
	{
		id: 4,
		comentario:
			"BeautyZone was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.",
		nombre: "Evelyn Martinez",
		profecion: "Fashion Designer",
		imagen: "/imagen/image1.png",
	},
	{
		id: 5,
		comentario:
			"BeautyZone was extremely creative and forward thinking. They are also very quick and efficient when executing changes for us.",
		nombre: "Evelyn Martinez",
		profecion: "Fashion Designer",
		imagen: "/imagen/image3.png",
	},
];

const NuestrosClientes = () => {
	const [pause, setPause] = useState(false);
	const timer = React.useRef();
	const [sliderRef, slider] = useKeenSlider({
		slidesPerView: 3,
		spacing: 15,
		loop: true,
		duration: 1000,
		breakpoints: {
			"(min-width: 150px)": {
				slidesPerView: 1,
				mode: "free-snap",
			},
			"(min-width: 768px)": {
				slidesPerView: 2,
				mode: "free-snap",
			},
			"(min-width: 1200px)": {
				slidesPerView: 3,
				mode: "free-snap",
			},
		},
		dragStart: () => {
			setPause(true);
		},
		dragEnd: () => {
			setPause(false);
		},
	});

	useEffect(() => {
		sliderRef.current.addEventListener("mouseover", () => {
			setPause(true);
		});
		sliderRef.current.addEventListener("mouseout", () => {
			setPause(false);
		});
	}, [sliderRef]);

	useEffect(() => {
		timer.current = setInterval(() => {
			if (!pause && slider) {
				slider.next();
			}
		}, 5000);
		return () => {
			clearInterval(timer.current);
		};
	}, [pause, slider]);

	return (
		<section className="bg-secundary place-items-center p-3 md:p-20 lg:py-32 pb-20">
			<div className="pb-10 pt-10 p-3 flex flex-col items-center space-y-5">
				<h2 className="text-white	text-center text-3xl md:text-4xl lg:text-5xl font-bold  ">
					¿Qué dicen nuestros aliados?
				</h2>
				<p className="text-white text-lg md:text-xl lg:text-1xl text-center max-w-3xl">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the.
				</p>
			</div>
			<div className="flex justify-center">
				<div ref={sliderRef} className="keen-slider">
					{clientes.map((cliente) => (
						<div className="keen-slider__slide" key={cliente.id}>
							<CardClientes cliente={cliente} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default NuestrosClientes;
