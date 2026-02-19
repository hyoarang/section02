import SearchableLayout from "@/component/searchable-layout";
import { useRouter } from "next/router";    
import { ReactNode } from "react";
import books from "@/mock/books.json"



const Search = ()=>{
    return <div>
        {
          books.map((book)=><BookItem key={book.id} {...book}/>)
        }

    </div>;
}

Search.getLayout = (page:ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}


export default Search;

