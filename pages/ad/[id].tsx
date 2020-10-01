import {useRouter} from "next/router";
import {Navbar, AdDetails} from "../../components";
import {useEffect} from "react";

function ReadAd(props) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <AdDetails id={`${id}`} />
        </>
    )
}

export default ReadAd