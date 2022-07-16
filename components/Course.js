const Course = ({ course }) => {
    const { titulo, contenido, imagen } = course.attributes
    return (
        <section>
            <div className="contenedor">
                <div>
                    <h2>{titulo}</h2>
                    <p>{contenido}</p>
                    <a href="#">Más información</a>
                </div>
            </div>
        </section>
    )
}

export default Course