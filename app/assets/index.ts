const smile = require('./images/smile.png');
const bow = require('./images/bow.png');
const favourites = require('./images/favourites.png');
const heart = require('./images/heart.png');
const kitty = require('./images/kitty.png');
const pawPrint = require('./images/pawprint.png');
const sparkles = require('./images/sparkles.png');
const sparkles1 = require('./images/sparkles1.png');
const star = require('./images/star.png');

export interface sticker {
    title: string
    image: any
}

export const stickerImages = [{
    title: "smile",
    image: smile
}, {
    title: "bow",
    image: bow
}, {
    title: "favourites",
    image: favourites
}, {
    title: "heart",
    image: heart
}, {
    title: "kitty",
    image: kitty
}, {
    title: "pawPrint",
    image: pawPrint
}, {
    title: "sparkle with border",
    image: sparkles
}, {
    title: "sparkle",
    image: sparkles1
}, {
    title: "star",
    image: star
}];