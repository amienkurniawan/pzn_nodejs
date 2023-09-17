const buffer = Buffer.from("Amien kurniawan");

console.info(buffer);

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("QW1pZW4ga3Vybmlhd2Fu", "base64");
console.info(bufferBase64.toString("utf8"));