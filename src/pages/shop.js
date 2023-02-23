import React from "react"
import Image from "next/image"
import style from "../styles/Product.module.scss"
import ProductCard from "../components/ProductCard"

const Products = ({ products }) => {
    console.log(products)

    return (
        <main className={style.products}>
            <div className={style.container}>
                <h1>Shop here</h1>
                <div className={style.wrapper}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </main>
    )
}

export default Products
