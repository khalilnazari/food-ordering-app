import React from "react"
import style from "../styles/Product.module.scss"
import ProductCard from "../components/ProductCard"
import PageHeader from "@/components/PageHeader"

const Products = ({ products }) => {
    console.log(products)

    return (
        <>
            <PageHeader title="Shop" />
            <main className={style.products}>
                <div className={style.container}>
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
        </>
    )
}

export default Products
