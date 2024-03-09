import React, { useState } from 'react';
import styles from "./Categories.module.css";
import { Icon } from '../../Common';
import { useDispatch } from 'react-redux';
import { setModalRegister } from '../../../redux/ui/actions';
import { toast } from 'react-toastify';

export default function ModalCategory() {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState({
        nomeCategoria: '',
        taxa: '',
    });

    const handleInputChange = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    const handleDiscard = () => {
        setFormValues({ nomeCategoria: '', taxa: '' });
        dispatch(setModalRegister(false));
        toast.success("Categoria descartada")
    };

    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Nova Categoria</h2>
                    <button className="btn-blue" onClick={() => dispatch(setModalRegister(false))}>
                        <Icon iconPath={"ph ph-x"} />
                    </button>
                </div>
                <form>
                    <div className={styles.group}>
                        <label>Nome da categoria</label>
                        <input
                            value={formValues.nomeCategoria}
                            onChange={handleInputChange}
                            placeholder='Limite de 244 caracteres'
                            type="text"
                            name="nomeCategoria"
                        />
                    </div>
                    <div className={styles.group}>
                        <label>Taxa</label>
                        <input
                            value={formValues.taxa}
                            onChange={handleInputChange}
                            placeholder='Valor em porcentagem'
                            type="text"
                            name="taxa"
                        />
                    </div>
                    <div className={styles.allButtons}>
                        <button type="submit" className="btn-blue">Adicionar</button>
                        <button onClick={handleDiscard}>Descartar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
