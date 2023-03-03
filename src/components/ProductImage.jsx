import React from "react"
import style from "../styles/Product.module.scss"
import Image from "next/image"

const ProductImage = ({ productImage }) => {
    return (
        <div className={style.productImages}>
            <Image src={productImage} width={500} height={500} layout="responsive" />
            <div className={style.imageToggler}>
                <Image src={productImage} width={150} height={120} layout="" />
                <Image src={productImage} width={150} height={120} layout="" />
                <Image src={productImage} width={150} height={120} layout="" />
            </div>
        </div>
    )
}

export default ProductImage
