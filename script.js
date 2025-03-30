document.addEventListener("DOMContentLoaded", function () {

    var captures = 0;
    var captured = 0

    async function camera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            document.getElementById("video").srcObject = stream;
        } catch (error) {
            console.error("Error accessing camera: ", error);
        }
    }

    function capture() {
        const video = document.getElementById("video");
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        captures++;
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

    camera();



    const canvasResult = document.getElementById("gallery");
    const ctx = canvasResult.getContext("2d");

    const img = new Image();
    img.src = img.src = "https://re-kin-commits.github.io/img.png"; 
    ;

    img.onload = function() {
        ctx.drawImage(img, 0, 0, 300, 650);
    }


    camera();

});
