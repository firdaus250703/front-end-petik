
const showDownload = (result) => {
    console.log(`File ${result} berhasil didownload.`);
  };
  

  const download = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filename = "file.txt";
        resolve(filename);
      }, 2000); 
    });
  };
  

  const initiateDownload = async () => {
    try {
      const result = await download();
      showDownload(result);
    } catch (error) {
      console.error("Terjadi kesalahan dalam proses download:", error);
    }
  };
  
  initiateDownload();
  