import SearchableLayout from "@/component/searchable-layout";
import { useRouter } from "next/router";    
import { ReactNode } from "react";

const Search = ()=>{
    const router = useRouter();
    console.log(router);

    const {q} = router.query;

    return <><h1>search {q}</h1></>;
}

Search.getLayout = (page:ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}


export default Search;

