import chicken from "../../../assets/articles/grilled-chicken.svg"
import smile from "../../../assets/articles/smile2.svg"
import cookie from "../../../assets/articles/cookie.svg"
import pizza from "../../../assets/articles/favorite-pizza.svg"
import Comment from "./Comment";

const comments = [
    {
        id: 1,
        img: chicken,
        title: "How to cook turkey on Natural Gas",
        count: "28+",
        color: "#FFF0A5"
    },
    {
        id: 2,
        img: smile,
        title: "Corona virus update: 3,43,287+ cases",
        count: "13+",
        color: "#D6F5FF"
    },
    {
        id: 3,
        img: cookie,
        title: "Tasty chunk donutes with chocolate",
        count: "20+",
        color: "#FFDDF0"
    },
    {
        id: 4,
        img: pizza,
        title: "Home made double cheez with popcorn respies",
        count: "17+",
        color: "#C1FFF4"
    }
]

const Comments = () => {
    return (
        <div className="messages">
            {comments.map((comment) => <Comment key={comment.id} {...comment}/>)}
        </div>
    )
}
export default Comments