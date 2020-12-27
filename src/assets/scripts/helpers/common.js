export function toArray(list) {
  return [].slice.call(list);
}

export function qs(query, parent) {
  if (parent) {
    return parent.querySelector(query);
  } else {
    return document.querySelector(query);
  }
}

export function qsa(query, parent) {
  let list;
  parent
    ? (list = parent.querySelectorAll(query))
    : (list = document.querySelectorAll(query));

  return toArray(list);
}

//toggle attribute method alternative, IE compatible
export function toggleAttribute(elem, attr) {
  elem[attr] === "false" ? (elem[attr] = "true") : (elem[attr] = "false");
}
