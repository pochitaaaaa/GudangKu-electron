import {pinjam, riwayat, datas, jenis, admin } from "./db";



export async function tambahData(table:string, data:any) {
 if(table === "pinjam"){
    pinjam.push(data)
    alert("oke!")
 } else if(table === "riwayat"){
    riwayat.push(data)
 }else if(table === "datas"){
    datas.push(data)
 }else if(table === "jenis"){
    jenis.push(data)
 }
}

