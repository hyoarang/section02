import { useRouter } from "next/router";    

const Page = () =>{const router = useRouter();
    console.log(router);

    const {id} = router.query;
    return <><h1>book {id}</h1></>
}

export default Page;