import SearchableLayout from "@/component/searchable-layout";
import  { ReactNode, useEffect, useState } from "react";

import { GetServerSidePropsContext } from "next";
import {GetStaticPropsContext} from "next"
import BookItem from "@/component/book-item";
import fetchBook from "@/lib/fetch-book";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { BookData } from "@/types";
import Head from "next/head";


//export const getServerSideProps= async(context: GetServerSidePropsContext)=>{
// export const getStaticProps= async(context: GetStaticPropsContext)=>{
//     const query = context.query.q;

//     console.log(query);

//     const books = await fetchBook(query as string);
//     return {
//         props:{books}
//     }
// }

// const Search = ({books}: InferGetServerSidePropsType<typeof getServerSideProps>)=>{
const Search = ()=>{
    const [books,setBooks] = useState<BookData[]>([]);
    const router = useRouter();
    const q = router.query.q;

    const fetchSearchResult = async()=>{
        const data = await fetchBook(q as string);
        setBooks(data);
    }

    useEffect(()=>{
        if(q){
            //현재 검색어가 있다면 데이터를 불러옴
            fetchSearchResult();
        }
    },[q]);
    return (
    <>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property="og:image" content="thumbnail.png"/>
        <meta property="og:title" content="한입북스 - 검색결과"/>
        <meta property="og:description" content="한입 북스에 등록된 도서들을 만나 보세요."/>
      </Head>    
    <div>
        {
          books.map((book)=><BookItem key={book.id} {...book}/>)
        }
    </div>
    </>
    );
}

Search.getLayout = (page:ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}


export default Search;

