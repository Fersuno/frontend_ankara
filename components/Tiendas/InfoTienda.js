import React from 'react'
import GalleryTienda from './GalleryTienda';
import Image from "next/image";
import { loader } from "utils/loader";
import MapTienda from './MapTienda';

const InfoTienda = ({tienda}) => {

	const { nombre, ciudad, telefono, direccion, galeria, horario, coordenadas } =
		tienda;
  return (
		<section className="px-6 py-10 lg:px-16">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
				<div className="w-full md:w-3/5 lg:w-full">
					<Image
						src={loader(galeria[0].formats.small.url)}
						alt={nombre}
						width={750}
						height={500}
						layout="responsive"
						priority
						objectFit="cover"
						className="object-center rounded-md"
						unoptimized
					/>
				</div>
				<div className="flex flex-col space-y-4	 lg:space-y-6 text-black">
					<h2 className="text-black text-2xl lg:text-4xl font-bold">
						{nombre}
					</h2>
					<div className=" w-ful	l border-t-2 border-primary" />
					<div className="space-y-3">
						<p className="font-bold text-xl">Dirección:</p>
						<p className=" text-xl">{direccion}</p>
						<p className="font-bold text-xl ">Horario de Atencion: :</p>
						<p className=" text-xl lg:text-xl">{horario}</p>
						<p className="font-bold  text-4xl lg:text-xl">Contacto:</p>
						<p className=" text-xl lg:text-base">{telefono}</p>
					</div>
				</div>
			</div>
			<div className="py-10">
				<h2 className="text-black text-2xl lg:text-4xl font-bold text-center">
					Encuentranos
				</h2>
				<MapTienda coordenadas={coordenadas} />
			</div>
		</section>
	);
}

export default InfoTienda