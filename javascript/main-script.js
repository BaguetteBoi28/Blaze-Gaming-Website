const newsletterPrompt = document.getElementById("newsletter");

function removeNewsletter() {
    newsletterPrompt.classList.add("after");
    setTimeout(() => {
        newsletterPrompt.remove();
    },1100);
}