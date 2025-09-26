export default function Post({post}){
    const {id, title, body}= post;

    return(
        <div className="card">
            <div className="card">
            <h5>{id}</h5>
            <h4>Title</h4>
            <p>{title}</p>
            </div>
            <h5>Body</h5>
            <p>{body}</p>
        </div>
    )
}