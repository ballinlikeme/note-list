export const highlight = (id) => {
  const note = document.getElementById(`${id}`);

  const text = note.textContent;

  const highlighted = text.replace(
    /(#\w+)/g,
    '<span class="hashtag">$1</span>'
  );

  note.innerHTML = highlighted;
};

export const getTags = (id) => {
  const note = document.getElementById(`${id}`);

  const text = note.textContent;

  const words = text.split(" ");
  let tags = words.filter((word) => word.includes("#"));

  tags.map((t) => {
    if (t.includes(" ")) {
      tags = tags.filter((tag) => tag !== t);
      const tempArr = t.split(" ");
      tempArr.forEach((elem) => {
        if (elem.includes("#")) {
          tags.push(elem);
        }
      });
    }
  });

  return tags;
};

export function placeCaretAtEnd(el) {
  el.focus();
  if (
    typeof window.getSelection != "undefined" &&
    typeof document.createRange != "undefined"
  ) {
    let range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (typeof document.body.createTextRange != "undefined") {
    let textRange = document.body.createTextRange();
    textRange.moveToElementText(el);
    textRange.collapse(false);
    textRange.select();
  }
}
