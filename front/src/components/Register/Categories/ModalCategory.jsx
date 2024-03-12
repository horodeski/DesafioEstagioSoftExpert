import React, { useCallback, useEffect, useState } from 'react';
import styles from "./Categories.module.css";
import { Icon } from '../../Common';
import { useDispatch } from 'react-redux';
import { setModalRegister } from '../../../redux/ui/actions';
import { toast } from 'react-toastify';
import { CategoriesApi } from '../../../services';

export default function ModalCategory() {
    const dispatch = useDispatch();
    const dataCategory = {
        name: "",
        tax: "",
    }

    const [name, setName] = useState("")
    const [tax, setTax] = useState("")
   
    const [formValues, setFormValues] = useState(dataCategory);


    function objectToFormData(obj) {
        const formData = new FormData();

        Object.entries(obj).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return formData;
    }

    const updateValues = useCallback(() => {
        setFormValues({
            name: name,
            tax: tax,
        })
    }, [name, tax])


    async function postCategory() {
       
        if (name != undefined && tax != undefined) {
            const categoryFormData = objectToFormData(formValues)
            await CategoriesApi.postCategory(categoryFormData);
            setFormValues({ name: '', tax: '' });
            dispatch(setModalRegister(false))
            toast.success("Categoria Criada")
        } else {
            toast.warning("Preencha todos os inputs")
        }
        
    }

    const handleDiscard = () => {
        setFormValues({ name: '', tax: '' });
        dispatch(setModalRegister(false));
        toast.success("Categoria descartada")
    };

    useEffect(() => {
        updateValues()
    }, [updateValues])

    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Nova Categoria</h2>
                    <button className="btn-blue" onClick={() => dispatch(setModalRegister(false))}>
                        <Icon iconPath={"ph ph-x"} />
                    </button>
                </div>
                <form onSubmit={e => e.preventDefault()}>
                    <div className={styles.group}>
                        <label>Nome da categoria</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Limite de 244 caracteres'
                            type="text"
                            name="nomeCategoria"
                        />
                    </div>
                    <div className={styles.group}>
                        <label>Taxa</label>
                        <input
                            value={tax}
                            onChange={(e) => setTax(e.target.value)}
                            placeholder='Valor em porcentagem'
                            type="number"
                            name="taxa"
                            max={99}
                        />
                    </div>
                    <div className={styles.allButtons}>
                        <button className="btn-blue" onClick={postCategory}>Adicionar</button>
                        <button onClick={handleDiscard}>Descartar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
