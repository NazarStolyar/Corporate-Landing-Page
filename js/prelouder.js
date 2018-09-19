var images = document.images;
var images_total_count = images.length;
var images_loader_count = 0;
var perc_displey = document.getElementById('load_perc');
for (var i = 0; i < images_total_count; i++) {
 image_clone = new Image;
 image_clone.onload = image_loaded;
 image_clone.onerror = image_loaded;
 image_clone.src = images[i].src;
}
function image_loaded () {
    images_loader_count++;
    perc_displey.innerHTML = (((100 / images_total_count) * images_loader_count ) << 0) + '%';
    if (images_loader_count >= images_total_count) {

        setTimeout(function () {
            var prelouder = document.getElementById('page_prelouder');
            if (!prelouder.classList.contains('done')) {
                prelouder.classList.add('done');
            }
        }, 1000);
    }
}


