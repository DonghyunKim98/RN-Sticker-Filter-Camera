import {Image as RNimage} from 'react-native';

const smile = require('./images/smile.png');
const bow = require('./images/bow.png');
const favourites = require('./images/favourites.png');
const heart = require('./images/heart.png');
const kitty = require('./images/kitty.png');
const pawPrint = require('./images/pawprint.png');
const sparkles = require('./images/sparkles.png');
const sparkles1 = require('./images/sparkles1.png');
const star = require('./images/star.png');

export interface Sticker {
    title: string
    image: string
	url: string
}

export const stickerImages: Array<Sticker> = [
	{
		title: "smile",
		image: smile,
		url: RNimage.resolveAssetSource(smile).uri
	}, {
		title: "bow",
		image: bow,
		url: RNimage.resolveAssetSource(bow).uri
	}, {
		title: "favourites",
		image: favourites,
		url: RNimage.resolveAssetSource(favourites).uri
	}, {
		title: "heart",
		image: heart,
		url: RNimage.resolveAssetSource(heart).uri
	}, {
		title: "kitty",
		image: kitty,
		url: RNimage.resolveAssetSource(kitty).uri
	}, {
		title: "pawPrint",
		image: pawPrint,
		url: RNimage.resolveAssetSource(pawPrint).uri
	}, {
		title: "sparkle with border",
		image: sparkles,
		url: RNimage.resolveAssetSource(sparkles).uri
	}, {
		title: "sparkle",
		image: sparkles1,
		url: RNimage.resolveAssetSource(sparkles1).uri
	}, {
		title: "star",
		image: star,
		url: RNimage.resolveAssetSource(star).uri
	},
];
