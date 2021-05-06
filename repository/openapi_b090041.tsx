import {OpenDataUrlQueryParams} from "@utils/MakeUrl";
import axios from "axios";

const rootUrl = "http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService";

/**
 * getAnniversaryInfo
 * @param params
 */
export async function getAnniversaryInfo(params: object) : Promise<[]> {
    const baseUrl = rootUrl + "/getAnniversaryInfo";
    let url = OpenDataUrlQueryParams(baseUrl, params) + '&type=JSON';
    console.log(url)
    try {
        const response = await axios.get(url)
        const data = response.data;
        const items = data.response.body.items.item;
        console.log(items)
        return  items;
    }catch (e){
         console.log(e.response)
    }
    return [];
}

/**
 *
 */