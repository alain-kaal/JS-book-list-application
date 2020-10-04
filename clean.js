let head = getOneElement("head");

const skeletonCSS = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"/>`;

head.insertAdjacentHTML("afterbegin", skeletonCSS);
