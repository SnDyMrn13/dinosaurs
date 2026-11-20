
function RecordCard({ data }){
    return (
        <article>
            <h2 className="head2">{data.name}</h2>
            <p><strong>{data.diet}</strong> </p>
            <p><strong>{data.length_in_meters}</strong> meters in length</p>
            <p>lived in <strong>{data.fossil_found}</strong></p>
        </article>
    )
}

export default RecordCard