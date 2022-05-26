const CryptoJS = require("crypto-js");
const $_SECRET = "625a8d839f579491d90252d48ae79ef1";

export function encrypt (data) {
    const toBeEncrypted = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(toBeEncrypted, $_SECRET).toString();
    return encrypted;
};

export function decrypt (data) {
    const toBeDecrypted = data;
    const decrypted = CryptoJS.AES.decrypt(toBeDecrypted, $_SECRET).toString(CryptoJS.enc.Utf8);
    return decrypted.slice(1,-1);
};