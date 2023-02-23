import React from "react"
import style from "../styles/Product.module.scss"
import Image from "next/image"

const ProductImage = () => {
    return (
        <div className={style.productImages}>
            <Image src="/products/4.png" width={500} height={500} layout="responsive" />
            <div className={style.imageToggler}>
                <Image src="/products/4.png" width={150} height={120} layout="" />
                <Image src="/products/4.png" width={150} height={120} layout="" />
                <Image src="/products/4.png" width={150} height={120} layout="" />
            </div>
        </div>
    )
}

export default ProductImage
