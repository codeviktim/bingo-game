import "./App.css";
import { useState} from "react";

import Tile from "./components/tile/Tile";
import TileWords from "./data/Words";
import _Words from "./data/_Words";

function App() {
  //Holds Current Word
  const [currentWord, setCurrentWord] = useState("Click on button");

  //Holds Called Words
  const [calledWords, setCalledWords] = useState([]);

  //Holds Clicked tile ids
  const [tileIndexes, setTileIndexes] = useState([]);

  const [bingo, setBingo] = useState(false)
  
 

  //Call random word
  const callWord = () => {
    const printedWord = _Words[Math.floor(Math.random() * _Words.length)];
    setCalledWords([...calledWords, printedWord]);
    setCurrentWord(printedWord);
    console.log(calledWords)
  };

  //Handle tile Click
  const click = (tile_Id) => {
    setTileIndexes(tileIndexes=>[...tileIndexes, tile_Id]);
    if (rowWin === true) {
      setBingo(true);
   }
  };

  //Generates board
  const board = TileWords.map((item, i) => (
    <Tile
      key={i}
      tileWord={item.word}
      click={() => click(item.id)}
      tileIndexes={tileIndexes}
      tile_Id={item.id}
    />
  ));


  //rowWin
  function rowWin() {
    const isRow1 = [0, 1, 2, 3, 4].every(e=> tileIndexes.includes(e))
    const isRow2 = [5, 6, 7, 8, 9].every(e=> tileIndexes.includes(e))
    const isRow3 = [10, 11, 12, 13, 14].every(e=>tileIndexes.includes(e))
    const isRow4 = [15, 16, 17, 18, 19].every(e=>tileIndexes.includes(e))
    const isRow5 = [20, 21, 22, 23, 24].every(e=>tileIndexes.includes(e))
    
    if (isRow1 || isRow2 || isRow3 || isRow4 || isRow5) {
      return true
    }
}


  return (
    <div className="App">
      <h4 className="font-sans text-xl mt-5 pb-5">Bingo</h4>
      <div className='inline-block'>
        <button
          className="font-sans text-gray-500 bg-gray-200 rounded-md p-4 mb-5 mr-2"
          onClick={callWord}
        >
          Print Word
        </button>
        <button
          className="font-sans text-gray-500 bg-gray-200 rounded-md p-4 mb-5"
        >
          CheckWin
        </button>
      </div>
      <h1 className="font-sans text-green-400 text-xl">{currentWord}</h1>
      <div className="mx-auto mt-5">
        {
          (bingo === true)  ?
            (<div><h1>Bingo !!!</h1></div>)
              :
            (<div className="grid grid-cols-5 gap-1 p-2">{board}</div>)          
        }
      </div>
    </div>
  );
}
export default App;
