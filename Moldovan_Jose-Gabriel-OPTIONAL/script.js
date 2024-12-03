document.addEventListener('DOMContentLoaded', function () {
    var images = ["CPU.png", "Internet.png", "Memorie.png", "Disk.png", "Porturi.png"];
        var time = 3000;
        var currentIndex = 0;
        let slideshowStarted = false;

        
        function changeImg() {
            
            const slide1 = document.getElementById('slide1');
            const slide2 = document.getElementById('slide2');
            const slide3 = document.getElementById('slide3');

            if (!slide1 || !slide2 || !slide3) return;

            
            slide1.src = images[currentIndex % images.length];
            slide2.src = images[(currentIndex + 1) % images.length];
            slide3.src = images[(currentIndex + 2) % images.length];

            
            currentIndex = (currentIndex + 1) % images.length;

            
            setTimeout(changeImg, time);
        }

        
        const targetDiv = document.getElementById('targetDiv');

        
        targetDiv.addEventListener('dblclick', function () {
            if (!slideshowStarted) {
                slideshowStarted = true;
                changeImg();
            }
        });
});