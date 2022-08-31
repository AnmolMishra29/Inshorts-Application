import { data } from "./constants/data.js";
import News from './model/news-Schema.js'

const DefaultData = async ()=> {
    try{
        await News.deleteMany({});  //delete previous data to avoid redundancy
        await News.insertMany(data);
        console.log('Data Imported Successfully')
    }
    catch(error){
         console.log('Error ' ,error.message);
    }
}

export default DefaultData;