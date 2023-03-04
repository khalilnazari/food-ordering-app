"use client"
import React from "react"
import Image from "next/image"
import { BiTrash } from "react-icons/bi"
import style from "../styles/ShoppingCard.module.scss"
import { useDispatch } from "react-redux"
import { removeFromCard } from "../../redux/reducers/shoppingCard"

const ShoppingBagCard = ({ item }) => {
    const dispatch = useDispatch()

    const removeCardItem = () => {
        dispatch(removeFromCard({ id: item._id, size: item.size }))
    }

    return (
        <div className={style.card}>
            <div>
                <Image
                    src={item.img}
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                    alt="product image"
                />
            </div>
            <div>
                <h3>{item.title}</h3>
                <p>{item.desciption}</p>
                <p>
                    <strong>Size: </strong>
                    <span>{item.size}</span>
                </p>
                <p>
                    <strong>Quantity: </strong>
                    <span>{item.quantity}</span>
                </p>
                <p>
                    <strong>Price: </strong>
                    <span>${item.price}</span>
                </p>

                <p>
                    <strong>Shipping Cost : </strong>
                    <span>${item.shippingCost}</span>
                </p>

                <button className={style.deleteBtn} onClick={removeCardItem}>
                    <BiTrash size={25} />
                </button>
            </div>
        </div>
    )
}

export default ShoppingBagCard
