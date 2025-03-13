
    function replaceName() {
    let name = prompt("siapa nama anda?","");
    document.getElementById("name").innerHTML = name ;
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName() ;
})

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
 
    // Clear form after submission
    document.getElementById("messageForm").reset();
 });

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

    showSlide(currentIndex); // Tampilkan slide pertama

    setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
});
