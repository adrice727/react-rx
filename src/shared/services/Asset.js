import R from 'ramda';

var _assets = new Map();

const imageSizes = ['c', 's', 'm', 'th'];
const baseUrl = 'http://localhost:8282/assets/';

var getImageSrc = (asset, preferredSize) => `${baseUrl}${asset.coverImageId}-${preferredSize}.jpg`

export { getImageSrc };
