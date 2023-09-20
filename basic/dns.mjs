import dns from 'dns';

dns.lookup('www.programmerzamannow.com', 0, (error, address, family) => {
  if (error) {
    console.error("Gagal melakukan penulusuran DNS :", error)
    return;
  }

  console.log(`Alamat IP untuk www.amienkurniawan.com adalah ${address} family : ${family}`);
});

