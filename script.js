function openWhatsApp() {
    const phoneNumber = "62895603126471";
    const message = "Hallo Pawon Catering, mau tanya-tanya soal pemesanan";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
