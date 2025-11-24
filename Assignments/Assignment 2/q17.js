function fileDownload(filename,callback){
    console.log(`Click here to Download the ${filename} file`)
    setTimeout(()=>{
        console.log("Download Complete")
    },2000);
    callback();
}

function com(){
        console.log(`Downloading the file`)
    }
fileDownload("mp3",com)