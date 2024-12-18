/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Download selesai");
    console.log("Hasil Download: " + result);
};

/**
 * Fungsi untuk download file yang mengembalikan Promise
 * @returns {Promise<string>} - Promise yang akan terresolve dengan nama file yang didownload
 */
const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = "windows-10.exe";
            resolve(result);
        }, 3000);
    });
};

// Fungsi async untuk menjalankan download dan menampilkan hasilnya
const executeDownload = async () => {
    try {
        const result = await download(); 
        showDownload(result); 
    } catch (error) {
        console.error("Terjadi kesalahan saat mendownload:", error);
    }
};
executeDownload();