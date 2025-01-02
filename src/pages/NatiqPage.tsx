import React, { useState } from "react";
import { callNatiq } from "../api";
import LoadingIndicator from "../components/LoadingIndicator";

const NatiqPage: React.FC = () => {
  // determaine the state of the app
  const [state, setState] = useState<"initial" | "loading" | "output">(
    "initial"
  );
  //   carry the input value
  const [text, setText] = useState("");
  //   carry the audio url
  const [audio, setAudio] = useState("");
  const [error, setError] = useState<string | null>("");

  const handleEcho = async () => {
    setState("loading");
    setError(null);
    try {
      // extract the last word from the text
      const words = text.trim().split(" ");
      const lastWord = words[words.length - 1];
      // add the last word to the actual text twice to repeat it 3 times
      const echoedText = `${text} ${lastWord} ${lastWord} `;
      const result = await callNatiq(echoedText);
      // handle the audio
      const base64Audio = result.wave.replace(/-/g, "+").replace(/_/g, "/");
      const audioData = `data:audio/wav;base64,${base64Audio}`;
      setAudio(audioData);
      setState("output");
    } catch (err) {
      setError("Failed to fetch audio");
      //   setState('output');
      console.log(err);
    }
  };
  //   handle the input change only accept arabic text
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    const arabicRegex = /^[\u0600-\u06FF\s]*$/;
    if (arabicRegex.test(inputText) || inputText === "") {
      setText(inputText);
      setError(null);
    } else {
      setError("please enter arabic text");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Natiq</h1>
      <p className="mb-4">
        Here you can convert arabic text to a cool audio with a repeated last
        word for 3 times for a reason i can't understand but here we go{" "}
      </p>
      {state === "initial" && (
        <div>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Enter Arabic text"
            className="border p-2 mb-4 w-full"
          />

          {error && <p className="text-red-500">{error}</p>}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleEcho}
          >
            Echo
          </button>
        </div>
      )}
      {state === "loading" && <LoadingIndicator />}
      {state === "output" && (
        <div>
        <div>
          {audio ? (
            <audio src={audio} controls autoPlay>
              <track kind="captions" />
            </audio>
          ) : (
            <p className="text-red-500">{error}</p>
          )}{" "}
        </div>
        
      <div className="mt-4">
      <button
        onClick={() => setState("initial")}
        className="border border-blue-500 text-blue-500 font-semibold px-4 py-2 rounded"
      >
        Back to input
      </button>
    </div>
    </div>
      )}
    </div>
  );
};

export default NatiqPage;
