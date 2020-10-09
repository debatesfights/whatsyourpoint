const Challenge = () =>{
    const chat_id = window.location.pathname.split("/")[window.location.pathname.split("/").length -1]
    return <h2>{chat_id}</h2>
}