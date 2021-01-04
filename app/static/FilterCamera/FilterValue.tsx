import React from 'react';
import {Image} from 'react-native';
import {Cool, Grayscale, Polaroid, Sepia, Tint, Warm} from 'react-native-color-matrix-image-filters';

export const GrayscaledImage = (imgSrc, style) => (
	<Grayscale>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Grayscale>
);

export const TintedFilterImage = (imgSrc, style, amount) => (
	<Tint amount={amount}>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Tint>
);

export const WarmFilterImage = (imgSrc, style) => (
	<Warm>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Warm>
);

export const CoolFilterImgae = (imgSrc, style) => (
	<Cool>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Cool>
);

export const PolaroidFilterImage = (imgSrc, style) => (
	<Polaroid>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Polaroid>
);

export const SepiaFilterImage = (imgSrc, style) => (
	<Sepia>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Sepia>
);
