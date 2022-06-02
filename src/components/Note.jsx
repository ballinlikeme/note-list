import { useState, useEffect } from "react";
import { highlight, placeCaretAtEnd, getTags } from "../js/sideFuncs";

export const Note = ({ text, id, removeNote }) => {
  const [tags, setTags] = useState([]);

  const handleDelete = () => {
    removeNote(id);
    setTags([]);
  };

  const handleFocusChange = () => {
    const note = document.getElementById(`${id}`);
    if (note.textContent === "") {
      removeNote(id);
      setTags([]);
    }
    setTags(getTags(id).join(", "));
  };

  const handleChange = (event) => {
    highlight(id);
    placeCaretAtEnd(event.target);
  };

  useEffect(() => {
    highlight(id);
    setTags(getTags(id).join(", "));
  }, [text, id]);

  return (
    <li className="note-list__item">
      <div className="note-list__content">
        <div
          onBlur={handleFocusChange}
          onKeyDown={handleChange}
          contentEditable
          className="note-list__text"
          id={id}
        >
          {text}
        </div>
        <ul className="note-list__tags">
          <li className="note-list__tag">{tags || "No tags"}</li>
        </ul>
      </div>
      <div className="note-list__controls">
        <div onClick={handleDelete} className="note-list__delete"></div>
      </div>
    </li>
  );
};
