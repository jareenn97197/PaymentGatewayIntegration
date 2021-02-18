window.onload = function () {

    function changeImage() {   
        var BackgroundImg=["./images/orphan.jpg",
            "./images/orphan1.jpg",
            "./images/orphan2.jpg",
            "./images/orphan3.jpg"
        ];
        var i = Math.floor((Math.random() * 4));
        document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 3000);
}