// GANTI NAMA USER
function replaceName() {
    let name = prompt("Siapa nama anda?", "");
    document.getElementById("name").innerHTML = name;
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName();
});

// MENAMPILKAN INFO FASILITAS SAAT DIKLIK
document.addEventListener("DOMContentLoaded", function () {
    let fasilitasImages = document.querySelectorAll(".fasilitas-img");

    fasilitasImages.forEach(img => {
        img.addEventListener("click", function () {

            document.querySelectorAll(".info-text").forEach(text => {
                if (text !== this.parentElement.querySelector(".info-text")) {
                    text.textContent = "";
                }
            });

            let infoText = this.parentElement.querySelector(".info-text");
            
            infoText.textContent = infoText.textContent === "" ? this.getAttribute("data-info") : "";
        });
    });
});

// MENAMPILKAN PESAN DI MESSAGE US
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();
 
    let name = document.getElementById("letName").value;
    let birthdate = document.getElementById("birthdate").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    let message = document.getElementById("messageText").value;
 
    let output = `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
 
    document.getElementById("messageOutput").innerHTML = output;
    document.getElementById("messageForm").reset(); 
});

// SLIDESHOW OTOMATIS
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
        });
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 3000); 
});
