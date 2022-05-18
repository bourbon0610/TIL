
const images = [
    "alberta-2297204__340.jpeg",
    "polynesia-3021072__340.webp",
    "aurora-1197753__340.jpeg",
    "road-1072821__480.jpeg",
    "fantasy-2049567__340.webp",
    "tree-276014__340.webp",
    "forest-1072828__340.jpeg",
    "tree-736885__340.webp",
    "nature-3082832__340.webp"
];



const chooseImages = images[Math.floor(Math.random()*images.length)];
const bgimage = document.createElement("img");

bgimage.src = `./img/${chooseImages}`;
document.body.appendChild(bgimage);

