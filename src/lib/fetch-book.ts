import { BookData } from "@/types";

export default async function fetchBook(q?:string) : Promise<BookData[]>{
    let url = "https://onebite-books-server-main-delta-woad.vercel.app/book";

    if(q){
        url+= `/search?q=${q}`
    }

    console.log(url);

    try{
        const response = await fetch(url);
        

        if(!response.ok){
            throw new Error();
        }
        return await response.json();
    }catch(error){
        console.error(error);
        return [];
    }finally{
        console.log("fetch-book 함수 종료");
    }
}

