const newsletterPrompt = document.getElementById("newsletter");
const newsletterButton = document.getElementById("btnDelete");

const newsletterStorageKey = 'bannerClosedAt';
const newsletterHideDuration = 5 * 60 * 1000;

function removeNewsletter() {
    newsletterPrompt.classList.add("after");
    localStorage.setItem(newsletterStorageKey,Date.now());
}

function shouldShowNewsletter() {
    const closedAt = localStorage.getItem(newsletterStorageKey);
    if (!closedAt) return true;

    const timePassed = Date.now() - parseInt(closedAt,10);
    return timePassed > newsletterHideDuration;
}

if (!shouldShowNewsletter()) {
    removeNewsletter();
}