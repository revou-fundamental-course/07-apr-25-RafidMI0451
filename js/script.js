// Validate Form

document.getElementById("form-list").addEventListener("submit", function(event) {
    event.preventDefault(); 


    const name = document.getElementById("username").value;
    const bday = document.getElementById("bday").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not specified";
    const message = document.getElementById("message").value;

    
    document.getElementById("sender-name").textContent = name;
    document.getElementById("sender-bday").textContent = bday;
    document.getElementById("sender-gender").textContent = gender;
    document.getElementById("sender-message").textContent = message;

    document.getElementById("name").textContent = name;

    document.querySelector(".form-output").style.display = "block";
});



// Image Slider

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    document.querySelector(".slides").style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Auto-slide
setInterval(nextSlide, 3000);

showSlide(slideIndex);
