import { setModalRegister } from '../../../redux/ui/actions'
import { useDispatch } from 'react-redux'
import styles from "./Categories.module.css"


function AddCategory() {
    const dispatch = useDispatch()

    function toggleModal() {
        dispatch(setModalRegister(true))
    }

    return (
        <div className={styles.search}>
            <button className='btn-blue' onClick={toggleModal}>
                <span>
                    + Adicionar categoria
                </span>
            </button>
        </div>
    )
}


export default AddCategory