

function App() {
  const [Color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: Color}}
    >
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white" 
        style={{backgroundColor:"red"}}
        >Red</button>

       <button onClick={() => setColor("orange")}
       className="outline-none px-4 py-1 rounded-full text-white" 
        style={{backgroundColor:"red"}}
        >orange</button>

        <button onClick={() => setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-white" 
        style={{backgroundColor:"red"}}
        >yellow</button>

       <button onClick={() => setColor("blue")}
       className="outline-none px-4 py-1 rounded-full text-white" 
        style={{backgroundColor:"red"}}
        >blue</button>

       <button onClick={() => setColor("pink")}
       className="outline-none px-4 py-1 rounded-full text-white" 
        style={{backgroundColor:"red"}}
        >pink</button>

      <button onClick={() => setColor("brown")}
       className="outline-none px-4 py-1 rounded-full text-white" 
        style={{backgroundColor:"red"}}
        >brown</button>

       <button onClick={() => setColor("green")}
       className="outline-none px-4 py-1 rounded-full text-white" 
        style={{backgroundColor:"red"}}
        >green</button>
      </div>
     </div>
    </div>
  )
}

export default App
