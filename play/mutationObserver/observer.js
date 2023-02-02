let overflowDog;

setOverflowToHidden();

function setOverflowToHidden() {
  if (!overflowDog) {
    overflowDog = setInterval( overflowChange, 500 );
  }
}

function overflowChange() {
  const test_box = document.getElementById("test_box");

  test_box.style.color = "blue";
  test_box.style.overflow = "hidden";
}