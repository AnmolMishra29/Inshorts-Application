import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getNews } from "../service/api";
import Article from "./Article";

const Articles = ()=> {

  const [news, setNews] = useState([]);
    useEffect(()=>{
       dailyNews();
    },[]);      //becoz of empty array useEffect will call on components did Mount

    const dailyNews = async ()=> {
        let response = await getNews();
        setNews(response.data);
    }

  return(
    <Box>
         {
          news.map(data =>{                   // you can also use () instead of {} but in that case u dont need return statement 
             return <Article data={data}/>
          })
         }
    </Box>
  )
}

export default Articles;