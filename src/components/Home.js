import NewsList from "./NewsList";

const Home = ({news, isPending, error}) => {

    return ( 
        <div className="home">
            {news && <NewsList news={news}/>}
        </div>
    );
}
 
export default Home;