import React from 'react';
import {Image} from 'react-native';
import {Cool, Grayscale, Polaroid, Sepia, Tint, Warm} from 'react-native-color-matrix-image-filters';

export const GrayscaledImage = (style, imgSrc) => (
	<Grayscale>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Grayscale>
);

export const TintedFilterImage = (style, imgSrc) => (
	<Tint amount={0.5}>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Tint>
);

export const WarmFilterImage = (style, imgSrc) => (
	<Warm>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Warm>
);

export const CoolFilterImgae = (style, imgSrc) => (
	<Cool>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Cool>
);

export const PolaroidFilterImage = (style, imgSrc) => (
	<Polaroid>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Polaroid>
);

export const SepiaFilterImage = (style, imgSrc) => (
	<Sepia>
		<Image
			style={style}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Sepia>
);
