import styles from './Container.module.css'

function Container(props){

     return <div className={`${styles.container} ${styles[props.customClass]}` }>
        {props.children}
        </div>
        // ${props.customClass}
    
}

export default Container