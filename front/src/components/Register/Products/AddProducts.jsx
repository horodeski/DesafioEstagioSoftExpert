import styles from "./Products.module.css";
import { useDispatch } from 'react-redux';
import { setModalRegister } from '../../../redux/ui/actions';

function AddProducts() {
  const dispatch = useDispatch()
 
  function toggleModal() {
    dispatch(setModalRegister(true))
  }
 
  return (
    <div className={styles.search}>
      <button onClick={toggleModal} className='btn-blue'>
        <span>
          + Adicionar produto
        </span>
      </button>
    </div>
  );
}

export default AddProducts;
