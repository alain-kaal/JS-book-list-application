function getOneElement(cssSelector) {
  let element = document.querySelector(cssSelector);
  return element;
}

function getManyElements(cssSelector) {
  let elements = document.querySelectorAll(cssSelector);
  return elements;
}
