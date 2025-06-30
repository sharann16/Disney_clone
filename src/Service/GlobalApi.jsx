
import axios from "axios";

const BaseUrl ="https://api.themoviedb.org/3";
const Key ="475f438aef7666139d29fed32cdd2d3a";
// https://api.themoviedb.org/3/trending/all/day?api_key=475f438aef7666139d29fed32cdd2d3a"

const getTrending=axios.get(BaseUrl+'/trending/all/day?api_key='+Key);


export default getTrending;