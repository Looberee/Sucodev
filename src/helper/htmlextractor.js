export function htmlExtractor(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    doc.querySelectorAll("p").forEach((p) => p.classList.add("custom-paragraph"));
    doc.querySelectorAll("img").forEach((img) => img.classList.add("custom-image"));

    doc.querySelectorAll("h3").forEach((blockquote) => {
        blockquote.classList.add("custom-heading");
    });

    return doc.body.innerHTML;
}