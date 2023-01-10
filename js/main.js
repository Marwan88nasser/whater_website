/* start import slider */
if(document.querySelector("#landing-slide")) {
    document.addEventListener("DOMContentLoaded", function () {
        var splideOne = new Splide("#landing-slide", {
            autoplay: true,
            rewind: true,
    
            interval: 3000,
        });
    
        splideOne.mount();
    });

}