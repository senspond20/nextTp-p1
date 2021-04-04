
import HomePostList from "@components/posts/HomePostList";
import NormalPostList from "@components/posts/NormalPostList";
import {Props} from "repository/postRep";

const BoardSelector = ({items, isHome}: Props) =>{
    return (
        <ul>
            {
                isHome
                    ? <HomePostList items={items}  isHome/>
                    : <NormalPostList items={items}  isHome/>
            }

        </ul>
    )
}
export default BoardSelector;