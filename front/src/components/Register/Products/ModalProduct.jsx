import React, { useCallback, useEffect, useState } from 'react';
import styles from "./Products.module.css";
import { Icon } from '../../Common';
import { useDispatch } from 'react-redux';
import { setModalRegister } from '../../../redux/ui/actions';
import { toast } from 'react-toastify';
import { CategoriesApi, ProductsApi } from '../../../services';

export default function ModalProduct() {
    const dispatch = useDispatch();
    const dataProduct = {
        name: "",
        price: "",
        amount: "",
        description: "",
        category_code: ""
    }
    const [categories, setCategories] = useState([])
    const [nameProduct, setName] = useState("")
    const [priceProduct, setPrice] = useState(0)
    const [descProduct, setDescription] = useState("")
    const [amountProduct, setAmount] = useState("")
    const [category_code, setCategory_code] = useState("")

    const [formValues, setFormValues] = useState(dataProduct);

    function objectToFormData(obj) {
        const formData = new FormData();

        Object.entries(obj).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return formData;
    }

    const updateValues = useCallback(() => {
        setFormValues({
            name: nameProduct,
            price: priceProduct,
            description: descProduct,
            amount: amountProduct,
            category_code: category_code
        })
    }, [nameProduct, priceProduct, amountProduct, category_code, descProduct])

    const getcategories = async () => {
        const data = await CategoriesApi.getCategories()
        setCategories(data)
    }

    async function postProduct() {

        const productFormData = objectToFormData(formValues)
        await ProductsApi.postProducts(productFormData);
        setFormValues({
            name: "",
            price: "",
            description: "",
            amount: "",
            category_code: ""
        });
        dispatch(setModalRegister(false))
        toast.success("Produto Criado")

    }

    function teste(priceProduct, category_code) {
        const categorySelected = categories.find(i => i.code == category_code)
        if (categorySelected) {
            const calc = (priceProduct * (categorySelected.tax / 100)).toFixed(2);
            return calc
        } else {
            return "0"
        }
    }

    const handleDiscard = () => {
        setFormValues({
            name: "",
            price: "",
            amount: "",
            description: "",
            category_code: ""
        });
        dispatch(setModalRegister(false));
        toast.success("Produto descartado")
    };

    useEffect(() => {
        getcategories()
        updateValues()
    }, [updateValues])

    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Novo produto</h2>
                    <button className="btn-blue" onClick={() => dispatch(setModalRegister(false))}>
                        <Icon iconPath={"ph ph-x"} />
                    </button>
                </div>
                <form onSubmit={e => e.preventDefault()}>
                    <div className={styles.group}>
                        <label>Nome do produto</label>
                        <input
                            value={nameProduct}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Limite de 244 caracteres'
                            type="text"
                            name="nomeCategoria"
                        />
                    </div>
                    <div className={styles.group}>
                        <label>Categoria</label>
                        <select
                            onChange={(e) => setCategory_code(e.target.value)}
                            placeholder='Valor em porcentagem'
                            type="number"
                            name="taxa"
                        >
                            <option hidden>Selecione uma categoria</option>
                            {
                                categories.map((product) =>
                                    <option key={product.code} value={product.code}>{product.name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className={styles.group}>
                        <label>Decrição</label>
                        <div className={styles.priceTax}>
                            <textarea
                                value={descProduct}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder='Valor em real'
                                type="number"
                                name="taxa"

                            />
                        </div>
                    </div>
                    <div className={styles.group}>
                        <label>Preço</label>
                        <div className={styles.priceTax}>
                            <input
                                value={priceProduct}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Valor em real'
                                type="number"
                                name="taxa"

                            />
                            <div className={styles.tax}>
                                <span>
                                    Tax:
                                </span>
                                <span>{teste(priceProduct, category_code)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <label>Amount</label>
                        <input
                            value={amountProduct}
                            onChange={(e) => setAmount(e.target.value)}
                            type="number"
                            name="taxa"
                        />
                    </div>
                    <div className={styles.allButtons}>
                        <button className="btn-blue" onClick={postProduct}>Adicionar</button>
                        <button onClick={handleDiscard}>Descartar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
