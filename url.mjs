import { URL } from "url";

const pzn = new URL("https://www.amienkurniawan.com/belajar?kelas=nodejs");

// kita modifikasi host dan menambahkan param
pzn.host = "www.kurniawan.com";
pzn.searchParams.append("status", "premium");

// kita tampilkan beberapa informasinya
console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);
