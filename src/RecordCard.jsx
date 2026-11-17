
function RecordCard({ data }){
    return (
        <article>
            <h2>{data.name}</h2>
            <p>{data.diet} </p>
            <p>{data.length_in_meters} meters in length</p>
            <p>lived in {data.fossil_found}</p>
        </article>
    )
}

export default RecordCard