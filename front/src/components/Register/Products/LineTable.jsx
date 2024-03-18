import React, { useState } from "react";
import { Icon } from "../../Common";
import styles from "./Products.module.css";
import { ProductsApi } from "../../../services";
import { toast } from "react-toastify";

function LineTable({ name, code, price, category, tax, amount }) {
    const [alert, setAlert] = useState(false);

    function productTaxed(tax, price) {
        const taxAccount = parseFloat(tax) / 100;
        const originalUnitValue = parseFloat(price);
        const taxedUnit = originalUnitValue + originalUnitValue * taxAccount;
        return taxedUnit.toFixed(2);
    }

    function sendAlert() {
        setAlert(!alert);
    }

    function objectToFormData(obj) {
        const formData = new FormData();

        Object.entries(obj).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return formData;
    }

    function teste (){
        console.log("asdasd")
    }

    async function deleteProduct(code) {
        const codeFormData = objectToFormData(code)
        await ProductsApi.deleteProduct(codeFormData)
        toast.success("Produto removido do sistema")
    }

    return (
        <tr>
            <td>#{code}</td>
            <td>{name}</td>
            <td
                onMouseEnter={amount <= 10 ? sendAlert : teste}
                onMouseOut={amount <= 10 ? sendAlert : teste}
                className={styles.amount}
                style={amount <= 10 ? { color: "red" } : { color: "white" }}
            >
                {amount}
                {alert && (
                    <div className={styles.alert}>
                        <span>Quantidade muito baixa</span>
                    </div>
                )}
            </td>
            <td>R${price}</td>
            <td>{productTaxed(tax, price)}</td>
            <td>
                {category} (Tax: {tax}%)
            </td>
            <td>
                <div className={styles.buttons}>
                    <button onClick={() => deleteProduct({ code })}>
                        <Icon iconPath={"ph ph-trash"} />
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default LineTable;
