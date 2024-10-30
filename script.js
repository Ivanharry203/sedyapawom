function openWhatsApp() {
    const phoneNumber = "62895603126471";
    const message = "Hallo Pawon Catering";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
