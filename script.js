const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("Button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerHTML = "Downloading file...";
    fetchFile(fileInput.value);
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href =tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerHTML = "Download File";
        // console.log(tempUrl);
    }).catch(() => {
        downloadBtn.innerHTML = "Failed to download file!";
        setTimeout(() => {  downloadBtn.innerHTML = "Download File"; }, 3000);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
