import SearchableLayout from "@/component/searchable-layout";
import { useRouter } from "next/router";    
import { ReactNode } from "react";

import { GetServerSidePropsContext } from "next";
import BookItem from "@/component/book-item";
import fetchBook from "@/lib/fetch-book";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps= async(context: GetServerSidePropsContext)=>{
    const query = context.query.q;

    console.log(query);

    const books = await fetchBook(query as string);
    return {
        props:{books}
    }
}

const Search = ({books}: InferGetServerSidePropsType<typeof getServerSideProps>)=>{
    return (
    <div>
        {
          books.map((book)=><BookItem key={book.id} {...book}/>)
        }

    </div>
    );
}

Search.getLayout = (page:ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}


export default Search;

