import Home from "./components/Home";
import Navv from "./components/Navv";
import BasicTabs from "./components/Tabb"
import Tagg from "./components/Tagg"
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  //State Hooks
  const [category, setCategory] = useState('business')
  const [country, setCountry] = useState('in')
  const [source, setSource] = useState('')
  const [query, setQuery] = useState('')
  const [url, setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=036b7aff2f27464085aabd2fa1f34314`)

  //useFetch Hook
  const { data: news, isPending, error } = useFetch(url)

  console.log(news);


  useEffect(() => {
      if(source !== ''){
          setUrl(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=036b7aff2f27464085aabd2fa1f34314`)
      }else{
        setUrl(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=036b7aff2f27464085aabd2fa1f34314`)
  
      }   
  }, [source, category, country])

  return (
    <div className="App">

      <Navv setCountry={setCountry} setSource={setSource} setQuery={setQuery} query={query} setUrl={setUrl} />
      <BasicTabs setCat={setCategory} setSource={setSource} />
      <Tagg country={country} source={source} />

 
      <div className="container">
        <Home news={news} isPending={isPending} error = {error}/>
      </div>
    </div>
  );
}

export default App;
