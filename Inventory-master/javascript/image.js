// image upload with image validation
function readURL() {

    var fileInput = document.getElementById('medicine-image');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
     if(!allowedExtensions.exec(filePath)){
        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput.value = '';
        return false;
    }else{

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#medicine-image-base64').attr('src', e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}
}

// image update with image validation
function readUpdateURL(input) {
    var fileInput = document.getElementById('medicine-update-image');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
     if(!allowedExtensions.exec(filePath)){
        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput.value = '';
        return false;
    }else{
    if (input.files) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#medicine-update-image-base64').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
}
// event listner for upload and update image
$("#medicine-image").change(function () {
    readURL(this);
});

$("#medicine-update-image").change(function () {
    readUpdateURL(this);
});
