import React from "react"
import style from "../styles/ShoppingCard.module.scss"
import Image from "next/image"
import { BiTrash } from "react-icons/bi"
import PageHeader from "@/components/PageHeader"

const Card = () => (
    <div className={style.card}>
        <div>
            <Image
                src="/products/5.png"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
            />
        </div>
        <div>
            <h3>Product title</h3>
            <p>Description.... I amy not needed...</p>
            <p>
                <strong>Size: </strong>
                <span>L</span>
            </p>
            <p>
                <strong>Quantity: </strong>
                <span>4</span>
            </p>
            <p>
                <strong>Price: </strong>
                <span>$12.90</span>
            </p>

            <button className={style.deleteBtn}>
                <BiTrash size={25} />
            </button>
        </div>
    </div>
)

const ShoppingCard = () => {
    return (
        <>
            <PageHeader title="Shopping Bag" />
            <main className={style.shoppingCard}>
                <div className={style.container}>
                    <div className={style.shoppingInfo}>
                        <div className={style.cardsWrapper}>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>

                        {/* checkout */}
                        <div className={style.checkout}>
                            <div className={style.addressInfo}>
                                <strong>Delivery Adress : </strong>
                                <span>
                                    241, Petronas Twin Tower, Kuala Lumpur City Centre, 50088 Kuala
                                    Lumpur, Wilayah Persekutuan Kuala Lumpur
                                </span>
                            </div>
                            <div className={style.checkoutInfo}>
                                <h3>Shopping Summary</h3>
                                <div>
                                    <strong>Total products: </strong>
                                    <span>3</span>
                                </div>
                                <div>
                                    <strong>Total Price: </strong>
                                    <span>$300.23</span>
                                </div>
                                <div>
                                    <strong>Tax: </strong>
                                    <span>$0</span>
                                </div>

                                <button className={style.checkoutBtn}>Proceed Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ShoppingCard
