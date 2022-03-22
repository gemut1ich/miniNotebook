import "./App.css";
import LocalStore from "./local.store";
import Highlighter from "web-highlighter";
import { useState, useEffect } from "react";
import FormModal from "./components/FormModal";
import Article from "./components/Article";
import axios from "axios";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const highlighter = new Highlighter();
  const store = new LocalStore();
  useEffect(() => {
    highlighter.run();
    // store.removeAll();
    const storeInfos = store.getAll();
    
    console.log("storeInfos: ", storeInfos);
    storeInfos.forEach(({ hs }) =>
      highlighter.fromStore(hs.startMeta, hs.endMeta, hs.text, hs.id, hs.extra)
    );
    setTitleText("");
    setShowModal(false);
    axios.get("http://localhost:8000/api/notes/").then((res) => {
      console.log(res.data);
      setNotes(res.data);
    });
  }, []);

  highlighter
    .on(Highlighter.event.CREATE, ({ sources }) => {
      setTitleText(sources[0].text);
      setShowModal(true);
      console.log("titleText: ", titleText);
      sources = sources.map((hs) => ({ hs }));
      store.save(sources);
    });
  const [showModal, setShowModal] = useState(false);
  const [titleText, setTitleText] = useState("");
  return (
    <div className="App">
      <h1>Sample Article</h1>
      <Article />
      <h1>Notes:</h1>
      <Note notes={notes} />
      <FormModal
        showModal={showModal}
        setShowModal={setShowModal}
        titleText={titleText}
        setNotes={setNotes}
        notes={notes}
      />
    </div>
  );
}

export default App;
