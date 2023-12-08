import axios from "axios";
import {useEffect, useState} from "react";

export const Appi = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        getMovies();
    }, [])

    // fetch

    //async function getMovies(){
        //const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1");

        //const responseData = await response.json();
        //setData(responseData.results);
        //console.log(data);
   // }


   // metodo fetch .then()

   //function getMovies() {
        
        //fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1");
       // .then((response) => response.json())
       // .then((responseData)=> { 
       //     setData(responseData.results);
       //     })
      //  .catch((error)=>{
       //     console.log(error);
      //  })
//}

     // Axios

    // async function getMovies(){
       // const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1");
      //  setData(response.data.results);
  //   }

    // Axios .then
    function getMovies(){
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=ee2648f9f1e9bd8b7424b1f5bb21b561&language=en-US&page=1")
        .then((response)=> {
            setData(response.data.results);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    return(
        <div>
            {
                data.map((item)=>(
                    <div key={item.id}>{item.title} </div>
                ))
            }
        </div>
    )
}