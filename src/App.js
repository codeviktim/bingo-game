import "./App.css";
import { useState , useEffect} from "react";

import Tile from "./components/tile/Tile";
import TileWords from "./data/Words";
import _Words from "./data/_Words";


function App() {
  //Holds Current Word
  //const [currentWord, setCurrentWord] = useState("Click on button");

  //Holds Called Words
  const [calledWords, setCalledWords] = useState([]);

  //Holds Clicked tile ids
  const [tileIndexes, setTileIndexes] = useState([]);

  const [bingo, setBingo] = useState(false);
 
  let [newWin, setNewWin] = useState({
    row1Up: false,
    row2Up: false,
    row3Up: false,
    row4Up: false,
    row5Up: false,
    col1Up: false,
    col2Up: false,
    col3Up: false,
    col4Up: false,
    col5Up: false,
    diag1Up: false,
    diag2Up: false
  });
  
  useEffect(() => {
    console.log(tileIndexes);
    console.log(`bingo=${bingo}`)
    
    
      const isRow1 = [0, 1, 2, 3, 4].every(e => tileIndexes.includes(e))
      const isRow2 = [5, 6, 7, 8, 9].every(e => tileIndexes.includes(e))
      const isRow3 = [10, 11, 12, 13, 14].every(e => tileIndexes.includes(e))
      const isRow4 = [15, 16, 17, 18, 19].every(e => tileIndexes.includes(e))
      const isRow5 = [20, 21, 22, 23, 24].every(e => tileIndexes.includes(e))
      
      const isCol1 = [0, 5, 10, 15, 20].every(e => tileIndexes.includes(e))
      const isCol2 = [1, 6, 11, 16, 21].every(e => tileIndexes.includes(e))
      const isCol3 = [2, 7,17, 22].every(e => tileIndexes.includes(e))
      const isCol4 = [3, 8, 13, 18, 23].every(e => tileIndexes.includes(e))
      const isCol5 = [4, 9, 14, 19, 24].every(e => tileIndexes.includes(e))
      
      const isDiag1 = [0, 6, 18, 24].every((e) => tileIndexes.includes(e));
      const isDiag2 = [4, 8, 16, 20].every((e) => tileIndexes.includes(e));

    /*
      if (isRow1|| isRow2 || isRow3 || isRow4 || isRow5 || isCol1 || isCol2 || isCol3 || isCol4 || isCol5 || isDiag1 || isDiag2)
         setBingo(true);
    
    let row1Up = false;
    let row2Up = false;
    let  row3Up = false;
    let row4Up = false;
    let row5Up = false;
    let col1Up = false;
    let col2Up = false;
    let col3Up = false;
    let col4Up = false;
    let col5Up = false;
    let diag1Up = false;
    let diag2Up =false;
    */
    let { row1Up, row2Up, row3Up, row4Up, row5Up, col1Up, col2Up, col3Up, col4Up, col5Up, diag1Up, diag2Up } = newWin;
    
    console.log(`row1Up : ${newWin.row1Up}`)
    console.log(`row2Up : ${newWin.row2Up}`);
    console.log(`row3Up : ${newWin.row3Up}`);

    if(isRow1 && (row1Up === false || undefined)) {
      setBingo(true);
      setNewWin({ row1Up: true })
      setTimeout(() => setBingo(false), 1000)
      console.log(newWin)
    }
    
   if (isRow2 && (row2Up === false || undefined)) {
      setBingo(true);
      setNewWin({row2Up:true});
      setTimeout(() => setBingo(false), 1000);
    }
    
   if (isRow3 && (row3Up === false || undefined)) {
      setBingo(true);
      setNewWin({ row3Up: true })
      setTimeout(() => setBingo(false), 1000);
    }
    
    if (isRow4 && (row4Up === false || undefined)) {
      setBingo(true);
      setNewWin({ row4Up : true });
      setTimeout(() => setBingo(false), 1000);
    }
    
    if (isRow5 && (row5Up === false || undefined)) {
       setBingo(true);
       setNewWin({row5Up: true})
      setTimeout(() => setBingo(false), 1000);
    }
   if (isCol1 && (col1Up === false || undefined)) {
      setBingo(true)
     setNewWin({ col1Up: true });
      setTimeout(() => setBingo(false), 1000);
    }
    if (isCol2 && (col2Up === false || undefined)) {
      setBingo(true)
      setNewWin({col2Up: true});
      setTimeout(() => setBingo(false), 1000);
    }
   if (isCol3 && (col3Up === false || undefined)) {
      setBingo(true);
     setNewWin({ col3Up: true });
      setTimeout(() => setBingo(false), 1000);
    }
    if (isCol4 && (col4Up === false || undefined)) {
      setBingo(true)
      setNewWin({ col4Up: true })
      setTimeout(() => setBingo(false), 1000);
    }
    if (isCol5 && (col5Up === false || undefined)) {
      setBingo(true);
       setNewWin({col5Up:true});
      setTimeout(() => setBingo(false), 1000);
    }
   if (isDiag1 && (diag1Up === false || undefined)) {
      setBingo(true);
     setNewWin({ diag1Up : true });
      setTimeout(() => setBingo(false), 1000);
    }
  if (isDiag2 && (diag2Up === false || undefined)) {
      setBingo(true);
      setNewWin({diag2Up:true});
      setTimeout(() => setBingo(false), 1000);
    }
 

  }, [tileIndexes,
    bingo,newWin
  ],
  )
 

  //Call random word
  const callWord = () => {
    const printedWord = _Words[Math.floor(Math.random() * _Words.length)];
    setCalledWords([...calledWords, printedWord]);
  };

  //Handle tile Click
  const click = (tile_Id) => {
    if(tile_Id === 12){
      return;
    }

    setTileIndexes(tileIndexes=>[...tileIndexes, tile_Id]);
    //console.log(tileIndexes)
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

  return (
    <div className="App">
      {bingo && <h1 className="font-sans text-green-400 text-xl">ITS B I N G O ! ! !</h1>}
      <div className="mx-auto mt-5">
      <div className="grid grid-cols-5 gap-1 p-2">{board}</div>          
      </div>
    </div>
  );
}
export default App;
