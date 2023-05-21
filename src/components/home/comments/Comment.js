import avatar from "../../../assets/avatar.png";
import like from "../../../assets/like.png";

const Comment =({img, title, count, color})=>{
    return(
        <div className="message flex">
            <div className="img-box" style={{background: color}}>
                <img src={img} alt="" className="message__img"/>
            </div>
            <div className="message__container">
                    <span className="message__title">
                        {title}
                    </span>
                <div className="message__marks flex">
                    <img  className="message__small-img1" src={avatar} alt="img"/>
                    <img  className="message__small-img2" src={avatar} alt="img"/>
                    <div className="message__cont flex">
                        <img className="message__small-img3" src={like} alt="mark"/>
                        <span className="message__count">{count}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment