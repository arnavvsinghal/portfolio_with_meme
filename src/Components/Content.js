import React from "react";
import memesData from "../memesData.js";

export default function Content() {
  const [memeImage, setMemeImage] = React.useState("");
  /**
   * Challenge: Save the random meme URL in state
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber]);
  }

  return (
    <main>
      <button className="form--button" onClick={getMemeImage}>
        What I know 🖼
      </button>
      <h3 className="h3--tag">{memeImage.name}</h3>
      <img src={memeImage.url} className="meme--image" alt="" />
    </main>
  );
}
