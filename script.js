
function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
}

function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    var transfer = e.dataTransfer;
    var files = transfer.files;

    handleFiles(files);
}

var dropzone = document.getElementById('dropzone');
dropzone.addEventListener("dragenter", dragenter, false);
dropzone.addEventListener("dragover", dragover, false);
dropzone.addEventListener("drop", drop, false);

function handleFiles(files) {
    var preview = document.getElementById('imagePreview');
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (files[0]) {
        reader.readAsDataURL(files[0]);
    } else {
        preview.src = "";
    }
}
