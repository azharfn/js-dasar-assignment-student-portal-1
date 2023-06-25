/**
 * flow 
 * 1. buat variable sks dan program id
 * 2. buat kondisi gpa yang nanti akan dicek nilai gpanya dengan data student yang sudah diberikan jika tidak memenuhi kondisi maka outputnya akan "invalid gpa number"(if.. else)
 * 3. kemudian buat kondisi supaya fungsi bisa mengecek dari data program id atau prodi diasumsikan  (switch case)
 * 4. untuk output kita gunakan return untuk mengembalikan nilai output supaya bisa ditampilkan 
 *    - output pertama yaitu kondisi if gpa>3 maka akan dapat 24 sks kemudian di return supaya bisa di tampilkan pada output
 *    - untuk output kedua yaitu return saat kondisi if gpa<3 maka akan diberi pesan yang berbeda dan tambahan yang menggunakan nilai dari variable prodi
 * 
 */


function process_argv() {
    const { argv } = process;
    const result = krsApplication(argv[2], argv[3], argv[4]);

    return result;
}

function krsApplication(name, programId, gpa) {
    let jumlahSks = 0;
    let prodi;

    if (gpa > 4 || gpa < 0) {
        return `Invalid gpa number`
    }
    else if (gpa > 2.99){
        jumlahSks = 24;
        return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${jumlahSks} SKS untuk semester depan.`;
    }
    else if (gpa >= 2.5 && gpa <= 2.99){
        jumlahSks = 21;
    }
    else if (gpa >= 2 && gpa <= 2.49){
        jumlahSks = 18;
    }
    else if (gpa >= 1.5 && gpa <= 1.99){
        jumlahSks = 15;
    }
    else if (gpa >= 0 && gpa <= 1.49){
        jumlahSks = 12;
    }else {
        return`Invalid gpa number`;
    }
    

    switch (programId) {
        case "ACC":
            prodi = "Akuntansi";
            break;
        case "HIN":
            prodi = "Hubungan Internasional";
            break;
        case "IAB":
            prodi = "Ilmu Administrasi Bisnis";
            break;
        case "IAP":
            prodi = "Ilmu Administrasi Publik";
            break;
        case "MJN":
            prodi = "Manajemen";
            break;
        case "TKM":
            prodi = "Teknik Kimia";
            break;
    
        default:
            prodi = "";
            break;
    }
    return `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${prodi} dan hanya dapat mengambil SKS sebanyak ${jumlahSks} SKS untuk semester depan.` 
}


// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = krsApplication;
