const tagInput = document.getElementById("tag-input");
const tagArea = document.getElementById("tag-area");
const ul = document.querySelector("#tag-area ul");
const label = document.getElementById("label");

let tag = [];

function addEvent(element) {
    tagArea.addEventListener("click", () => {
        element.focus();
    });

    element.addEventListener("focus", () => {
        tagArea.classList.add("active");
        label.classList.add("label-active");
    });

    element.addEventListener("blur", (e) => {
        tagArea.classList.remove("active");
        if (element.value === "" && tag.length === 0) {
            label.classList.remove("label-active");
        }

        if (!element.value.match(/^\s+$/gi) && element.value !== "") {
            tag.push(e.target.value.trim());
            element.value = "";
            renderTags();
        }
    });

    element.addEventListener("keydown", (e) => {
        const value = e.target.value;
        if (
            (e.key === " " || e.key === "Enter" || value[value.length - 1] === " ") &&
            !value.match(/^\s+$/gi) &&
            value !== ""
        ) {
            tag.push(e.target.value.trim());
            element.value = "";
            renderTags();
        }
        if (e.key === "Backspace" && value === "") {
            tag.pop();
            renderTags();
        }
    });
}

addEvent(tagInput);

function renderTags() {
    ul.innerHTML = "";
    tag.forEach((tagValue, index) => {
        createTag(tagValue, index);
    });

    const input = document.createElement("input");
    input.type = "text";
    input.className = "tag-input";
    addEvent(input);
    ul.appendChild(input);
    input.focus();
    setTimeout(() => (input.value = ""), 0);
}

function createTag(tagValue, index) {
    const li = document.createElement("li");
    li.className = "tag";

    const text = document.createTextNode(tagValue);
    const span = document.createElement("span");

    span.className = "cross";
    span.dataset.index = index;

    span.addEventListener("click", (e) => {
        tag = tag.filter((_, idx) => idx != e.target.dataset.index);
        renderTags();
    });

    li.appendChild(text);
    li.appendChild(span);
    ul.appendChild(li);
}
