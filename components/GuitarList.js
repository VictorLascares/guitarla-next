import styles from '../styles/Tienda.module.css'
import Guitar from './Guitar'

const GuitarList = ({guitars}) => {
    return (
        <div className={styles.listado}>
            {guitars.map(guitar => (
                <Guitar
                    key={guitar.id}
                    guitar={guitar}
                />
            ))}
        </div>
    )
}

export default GuitarList