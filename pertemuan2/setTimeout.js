
function download(callbackVerify) {
    setTimeout(() => {
        console.log("Download selama 3 detik");
        callbackVerify();
    },3000);
    
}

function verify(callbackNotify) {
    setTimeout(() => {
        console.log("Verify selama 2 detik");
        callbackNotify();
    }, 2000);
    
}

function notify() {
    console.log("Download Selesai");
}

function main() {
    
    // tapi ini kurang efektif, lebih baik menggunakan promise
    download(function () {
        verify(function (){
            notify();
        })
    });
}

main();