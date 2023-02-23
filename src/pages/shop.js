import React from "react"
import style from "../styles/Product.module.scss"
import ProductCard from "../components/ProductCard"
import PageHeader from "@/components/PageHeader"
import Head from "next/head"

const Products = ({ products }) => {
    console.log(products)

    return (
        <>
            <Head>
                <title>KD shop</title>
                <meta name="description" content="Welcome to kd e-commerce web page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>

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
