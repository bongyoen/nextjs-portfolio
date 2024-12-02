'use client';
import React, { useEffect } from 'react';

export default function MapTest() {
	useEffect(() => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=cbmv6dhyl7';
		document.head.appendChild(script);

		script.onload = () => {
			let mapOptions = {
				center: new naver.maps.LatLng(37.3595704, 127.105399),
				zoom: 10,
			};

			let map = new naver.maps.Map('map', mapOptions);
		};
	}, []);

	return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
}
