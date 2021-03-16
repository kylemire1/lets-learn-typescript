// tsc --init
// tsc -w

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    console.log("Clicked");
  });
}
