import { useDispatch } from "react-redux"
import { Icon } from "../../Common"
import styles from "../history.module.css"
import { setModalMoreInfo } from "../../../redux/ui/actions"

function Header() {
    const dispatch = useDispatch()
    function closeModal(){
        dispatch(setModalMoreInfo(false))
    }

    return (
        <div className={styles.header}>
            <h2>Suas compras</h2>
            <button onClick={closeModal}>
                <Icon iconPath={"ph ph-x"} />
            </button>
        </div>
    )
}

export default Header