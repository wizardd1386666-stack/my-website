// حرکت نرم برای لینک‌ها
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});


// پیام خوش آمدگویی در کنسول
console.log("Welcome to MasterMal 🚀");
console.log("Created for business growth and entrepreneurship");


// نمایش ساده هنگام ورود کارت‌ها
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});
