const favicon = document.getElementById("favicon");
const input = document.querySelector(".gradient-text");
const img = document.querySelector(".img");

const setValue = (value) => {
  if (value.trim() === "") value = "asdf";

  const href = `/${value}`;
  img.src = href;
  favicon.href = href;
};

input.addEventListener("input", (e) => {
  setValue(e.target.value);
});

setValue(input.value);
