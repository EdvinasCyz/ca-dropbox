const itemsData = [{
        path: "img/sad_clown.png",
        name: "Sad clown.png",
        size: "1",
    },

    {
        path: "img/bike.png",
        name: "bike.png",
        size: "1",
    },

    {
        path: "img/blue_dandelion_drops.png",
        name: "blue dendalion drops.png",
        size: "1",
    },

    {
        path: "img/bottle.png",
        name: "bottle.png",
        size: "1",
    },

    {
        path: "img/camera.png",
        name: "camera.png",
        size: "1",
    },

    {
        path: "img/daisy.png",
        name: "daisy.png",
        size: "1",
    },

    {
        path: "img/drop_some_droplets.png",
        name: "drop some droplets.png",
        size: "1",
    },

    {
        path: "img/gymnast.png",
        name: "gymnast.png",
        size: "1",
    },

    {
        path: "img/little_friends.png",
        name: "little friends.png",
        size: "1",
    },

    {
        path: "img/poppy_for_mom.png",
        name: "poppy for mom.png",
        size: "1",
    },

    {
        path: "img/sunglasses.png",
        name: "sunglasses.png",
        size: "1",
    },

    {
        path: "img/sunshine.png",
        name: "sunshine.png",
        size: "1",
    },

    {
        path: "img/traffic.png",
        name: "traffic.png",
        size: "1",
    },

    {
        path: "img/waiting_for_the_train.png",
        name: "waiting for the train.png",
        size: "1",
    },

    {
        path: "img/what_a_wonderful.png",
        name: "what a wonderful.png",
        size: "1",
    },
];

function printImg(array) {
    let photosContainer = document.getElementById("photos-container");
    let code = "";

    for (let i = 0; i < array.length; i++) {
        code += `
        <article class="photo-wrapper">
            <div class='img' style=' background-image: url(${
              array[i].path
            })'></div>
            <span>${array[i].name}</span>
            <span>${formatBytes(array[i].size)}</span>
        </article>`;
    }
    photosContainer.innerHTML = code;
}

document.getElementById("uploadBtn").addEventListener("click", function() {
    const images = [];
    for (let i = 0; i < document.getElementById("file").files.length; i++) {
        const element = document.getElementById("file").files[i];
        images.push({
            name: element.name,
            size: element.size,
            path: URL.createObjectURL(element),
        });
    }

    printImg(images);
    dataStorage(images);
});

function dataStorage(array) {
    let data = 0;
    array.forEach((element) => {
        data += element.size;
    });
    return data;
}

function convertBytes(bytes) {
    return (bytes / 1048576).toFixed(2);
}