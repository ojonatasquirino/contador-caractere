document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector("textarea");
  const postButton = document.getElementById("post-button");

  const counterContainer = document.createElement("div");
  counterContainer.classList.add("counter-container");

  const counterCircle = document.createElement("div");
  counterCircle.classList.add("counter-circle");

  const counterText = document.createElement("span");
  counterText.classList.add("counter-text");
  counterText.innerText = "0";

  counterContainer.appendChild(counterCircle);
  counterContainer.appendChild(counterText);

  const counterAndButton = document.querySelector(".counter-and-button");
  counterAndButton.insertBefore(counterContainer, postButton);

  const maxChars = 250;
  const warningThreshold = 200;
  const dangerThreshold = 250;

  textarea.addEventListener("input", function () {
    const textLength = textarea.value.length;
    counterText.innerText = textLength;

    let color = "#0082d9"; 
    if (textLength >= warningThreshold) color = "yellow";
    if (textLength >= dangerThreshold) color = "red";

    const percent = (textLength / maxChars) * 100;
    counterCircle.style.background = `conic-gradient(${color} ${percent}%, transparent ${percent}%)`;
    counterCircle.style.borderColor = color;

    postButton.disabled = textLength > maxChars;
  });

  document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector("textarea");
  
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto"; 
      textarea.style.height = Math.min(textarea.scrollHeight, 150) + "px"; 
    });
  });
  
});
