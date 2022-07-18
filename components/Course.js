import styles from '../styles/Course.module.css'

const Course = ({ course }) => {
    const { titulo, contenido, imagen } = course.attributes
    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p>{contenido}</p>
                    <a href="#">Más información</a>
                </div>
            </div>

            <style jsx>{`
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 / .4), rgb(0 0 0 / .6)), url(${imagen.data.attributes.url});
                    background-size: cover;
                    background-position: center;
                }
            `}</style>
        </section>
    )
}

export default Course