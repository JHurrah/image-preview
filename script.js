(function(document){

    var preventDefault = function(e){
        e.stopPropagation();
        e.preventDefault();
    };

    var drop = function(e) {
        e.stopPropagation();
        e.preventDefault();

        var transfer = e.dataTransfer;
        var files = transfer.files;

        handleFiles(files);
    };

    var handleFiles = function(files) {
        var preview = document.getElementById('imagePreview');
        var reader  = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
        };

        if (files[0]) {
            reader.readAsDataURL(files[0]);
        } else {
            preview.src = "";
        }
    };

    var dropzone = document.getElementById('dropzone');

    dropzone.addEventListener("dragenter", preventDefault, false);
    dropzone.addEventListener("dragover", preventDefault, false);
    dropzone.addEventListener("drop", drop, false);
}(document));
