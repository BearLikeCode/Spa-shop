import {useRouter} from "next/router";
import {AdDetails} from "../../components";

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