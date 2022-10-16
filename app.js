const apiUrl = "https://api.adviceslip.com/advice";
const adviceIdContainer = document.querySelector("#advice-id");
const adviceTextContainer = document.querySelector("#advice-text");
const adviceButton = document.querySelector("#advice-button");

adviceButton.addEventListener("click", showAdvice);

async function fetchAPI(apiUrl) {
  const dataFetch = await fetch(apiUrl);
  const data = await dataFetch.json();
  return data;
}

async function showAdvice() {
  const data = await fetchAPI(apiUrl);
  const adviceId = data.slip.id;
  const adviceText = data.slip.advice;
  adviceIdContainer.innerHTML = adviceId;
  adviceTextContainer.innerHTML = adviceText;
}

showAdvice();
