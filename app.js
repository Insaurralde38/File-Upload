const dropzoneBox = document.getElementsByClassName("dropzone-box")[0]
const inputElement = document.querySelector(".dropzone-area input[type='file']")
const dropZoneElement = inputElement.closest(".dropzone-area")

inputElement.addEventListener("change", (event) => {
    if (inputElement.files.length) {
        updateDropzoneFilesList(dropZoneElement, inputElement.files[0])
    }
})

dropZoneElement.addEventListener("dragover", (event) => {
    event.preventDefault()
    dropZoneElement.classList.add("dropzone--over")
});

["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (event) => {
        dropZoneElement.classList.remove("dropzone--over")
    })
})

dropZoneElement.addEventListener("drop", (event) => {
    event.preventDefault()
    if (event.dataTransfer.files.length) {
        inputElement.files = event.dataTransfer.files
        updateDropzoneFilesList(dropZoneElement, event.dataTransfer.files[0])
    }
    dropZoneElement.classList.remove("dropzone--over")
})

const updateDropzoneFilesList = (dropzoneElement, file) => {
    let dropzoneFileMessage = dropzoneElement.querySelector(".message")
    dropzoneFileMessage.innerHTML = `${file.name}, ${file.size} bytes`
}

dropzoneBox.addEventListener("reset", (event) => {
    let dropzoneFileMessage = dropZoneElement.querySelector(".message")
    dropzoneFileMessage.innerHTML = `No Files Selected`
})

dropzoneBox.addEventListener("submit", (event) => {
    event.preventDefault()
    const myFiled = document.getElementById("upload-file")
    console.log(myFiled.files[0])
})