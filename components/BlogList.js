import styles from "../styles/Blog.module.css"
import Input from "./Input"

const BlogList = ({entradas}) => {
    return (
        <div className={styles.blog}>
            {entradas.map(entrada => (
                <Input
                    key={entrada.id}
                    entrada={entrada}
                />
            ))}
        </div>
    )
}

export default BlogList