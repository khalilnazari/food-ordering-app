import React from "react"
import axios from "axios"
import style from "../styles/Product.module.scss"
import ProductCard from "../components/ProductCard"
import PageHeader from "@/components/PageHeader"
import Head from "next/head"

const Products = ({ products }) => {
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
                        {products.map((product) => (
                            <ProductCard data={product} key={product._id} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export const getServerSideProps = async () => {
    const res = await axios.get("http://localhost:3000/api/products")
    return {
        props: {
            products: res.data
        }
    }
}

export default Products
