
import { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/component/searchable-layout";
import books from "@/mock/books.json";
import BookItem from "@/component/book-item";
import { useEffect } from "react";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-book";
import fetchRandomBooks from "@/lib/fetch-random-books";

export const getServerSideProps = async() =>{
  // console.log("서버사이드실행");
  // const allBooks = await fetchBooks();
  // const recoBooks = await fetchRandomBooks();

  const [allBooks,recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks()

  ]);

   
  return{
    props:{
      allBooks,
      recoBooks
    }
  }
}


export default function Home({allBooks,recoBooks}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //console.log(allBooks);
  useEffect(
    ()=>{
      
    },[]
  );

  

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        { recoBooks.map((book)=> {return <BookItem key={book.id} {...book}/>})}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {
          allBooks.map((book)=><BookItem key={book.id} {...book}/>)
        }
      </section>
    </div>
  )
}



Home.getLayout = (page:ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}