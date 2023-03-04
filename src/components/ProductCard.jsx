"use client"

import React from "react"
import style from "../styles/Product.module.scss"
import Image from "next/image"
import { BsBagPlusFill } from "react-icons/bs"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { addToCard } from "../../redux/reducers/shoppingCard"

const ProductCard = ({ data }) => {
    const dispatch = useDispatch()
    const addItemToCard = () => {
        dispatch(addToCard(data))
    }

    return (
        <div className={style.productCard}>
            <Link href={`/product/${data._id}`}>
                <Image
                    className={style.productImage}
                    src={data.img}
                    alt="an product"
                    width="500"
                    height="800"
                    layout="responsive"
                />
            </Link>
            <div className={style.cardBody}>
                <p className={style.name}>{data.title}</p>
                <p className={style.description}>{data.description}</p>
            </div>

            <div className={style.cardFooter}>
                <p className={style.price}>{data.price}</p>
                <button onClick={addItemToCard}>
                    <BsBagPlusFill size={20} />
                </button>
            </div>
        </div>
    )
}

export default ProductCard
