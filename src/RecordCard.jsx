
function RecordCard({ data }){
    return (
        <article>
            <h2>{data.name}</h2>
            <p>{data.diet} </p>
        </article>
    )
}

export default RecordCard