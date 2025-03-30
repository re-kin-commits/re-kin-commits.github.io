document.addEventListener("DOMContentLoaded", function () {
    var captures = 0;

    async function camera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            document.getElementById("video").srcObject = stream;
        } catch (error) {
            console.error("Error accessing camera: ", error);
        }
    }

    function capture() {

        if (capture == 0) {
            console.log(captures)
        const video = document.getElementById("video");
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");

        if (!video || video.videoWidth === 0) {
            console.error("Video stream not ready");
            return;
        }
        canvas.width = video.videoWidth * 0.23;
        canvas.height = video.videoHeight * 0.24;
        ctx.drawImage(video, 85, 11, canvas.width , canvas.height);
        captures++;

        } else if (captures == 1) {
            
        }

    }

    function timer(seconds) {
        if (captures < 3) {
            setTimeout(() => {
                capture();
                timer(seconds);
            }, seconds * 1000);
        }
    }

    function start() {
        captures = 0;
        timer(3);
    }

    // Expose start function globally so it can be used in HTML
    window.start = start;

    camera();

    const canvas = document.getElementById("resultCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "img.png"; 

    img.onload = function () {
        const scaleFactor = 0.20;
        const newWidth = img.width * scaleFactor;
        const newHeight = img.height * scaleFactor;


        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.drawImage(img, 0, 0, newWidth, newHeight);
    };
});
