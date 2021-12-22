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
  const [url, setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=0ff0b42ee9954d06803c3e6a809bcc38`)

  //useFetch Hook
  const { data: news, isPending, error } = useFetch(url)

  console.log(8);


  useEffect(() => {
      if(source !== ''){
          setUrl(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=0ff0b42ee9954d06803c3e6a809bcc38`)
      }else{
        setUrl(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=0ff0b42ee9954d06803c3e6a809bcc38`)
  
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
