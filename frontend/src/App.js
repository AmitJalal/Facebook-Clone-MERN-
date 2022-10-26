function App() {
  const get = async ()=>{
    const res = await fetch('http://localhost:8000') 
    console.log(res);
  }
  get()
  return (
     <>
     <h1>welcome to facebook</h1>
     </>
  )
}

export default App;
