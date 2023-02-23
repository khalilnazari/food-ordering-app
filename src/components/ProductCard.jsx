import React from "react"
import style from "../styles/Product.module.scss"
import Image from "next/image"
import { BsBagPlusFill } from "react-icons/bs"
import Link from "next/link"

const ProductCard = () => {
    return (
        <div className={style.productCard}>
            <Link href="/product/1212">
                <Image
                    className={style.productImage}
                    src="/products/5.png"
                    alt="an product"
                    width="500"
                    height="800"
                    layout="responsive"
                />
            </Link>
            <div className={style.cardBody}>
                <p className={style.name}>Blut pink T-Shirt</p>
                <p className={style.description}>Lorem ipsum dolor sit amet....</p>
            </div>

            <div className={style.cardFooter}>
                <p className={style.price}>$12.99</p>
                <button>
                    <BsBagPlusFill size={20} />
                </button>
            </div>
        </div>
    )
}

export default ProductCard
