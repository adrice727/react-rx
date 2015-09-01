import R from 'ramda';

var _assets = new Map();

const imageSizes = ['c', 's', 'm', 'th'];
const baseUrl = 'http://localhost:8282/assets/';

var getImageSrc = (asset, preferredSize) => `${baseUrl}${asset.coverImageId}-${preferredSize}.jpg`

export { getImageSrc };
// coverImageDimensions: "[{"c":{"w":1024,"h":576}},{"m":{"w":960,"h":540}},{"s":{"w":640,"h":360}},{"th":{"w":320,"h":180}}]"
// coverImageId: "1okr1oibxvcwaS15ulw65ty4bgh"
// coverImageSizes: "c,m,s,th"
// id: "9bx1ieqhj0osS1a5l83j0wwakg"
// numAwards: 0
// numCollaborators: 0
// numComments: 0
// numLikes: 0
// popularity: 0
// projectName: "Coca-Cola Ad"


// background-image: url(http://localhost:8282/assets/S19l49ag6wsf6kS1vegkexbrj3m6-s.jpg);
