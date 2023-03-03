import PageHeader from "@/components/PageHeader"
import React from "react"
import axios from "axios"
import style from "../../styles/Product.module.scss"
import { AiOutlinePlus, AiOutlineMinus, AiFillStar } from "react-icons/ai"
import ProductImage from "@/components/ProductImage"
import Reviews from "@/components/Reviews"
import Head from "next/head"
import ProductCard from "@/components/ProductCard"

const Product = ({ product }) => {
    console.log(product)

    // jsx
    return (
        <>
            <Head>
                <title>KD e-commerece</title>
                <meta name="description" content="Welcome to kd e-commerce web page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <PageHeader title="Product Detail" />
            <main className={style.productDetail}>
                <div className={style.container}>
                    <div className={style.detailWrapper}>
                        <ProductImage productImage={product.img} />

                        <div className={style.detailSectionWrapper}>
                            <div className={style.detailSection}>
                                <h1 className={style.productName}>{product.title}</h1>
                                <p className={style.productDescription}>{product.description}</p>
                            </div>

                            <div className={style.detailSection}>
                                <p>
                                    <strong>Price : </strong>
                                    {product.prices.map((price) => (
                                        <span> - {price}</span>
                                    ))}
                                </p>
                                <p>
                                    <strong>Aavilaiblity</strong> : in stock
                                </p>
                                <p>
                                    <strong>Sold</strong> : 5k
                                </p>
                                <div>
                                    <strong>Review : </strong>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <p>
                                    <strong>Shipping form : </strong> Asia
                                </p>
                            </div>

                            {/* size */}
                            <div className={style.detailSection}>
                                <h4>Choose sizes</h4>
                                <div className={style.sizes}>
                                    <button className="box">S</button>
                                    <button className="box">M</button>
                                    <button className="box">L</button>
                                    <button className="box">XL</button>
                                </div>
                            </div>

                            {/* quantity */}
                            <div className={style.detailSection}>
                                <h4>Quantity</h4>
                                <div className={style.count}>
                                    <button className="box">
                                        <AiOutlineMinus />
                                    </button>
                                    <span>0</span>
                                    <button className="box">
                                        <AiOutlinePlus />
                                    </button>
                                </div>
                            </div>
                            <div className={style.detailSection}>
                                <div className={style.actionBtn}>
                                    <button>Add to Cart</button>
                                    <button>Add to Wishlist</button>
                                    <button>Buy it Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* reviews */}
                    <div className={style.reviewWrapper}>
                        <div>
                            <h2>Customer review</h2>
                            <Reviews />
                            <Reviews />
                        </div>

                        <div className="sponseredProducts">
                            <h2>Sponsered Items</h2>

                            {/* <ProductCard /> */}
                            {/* <ProductCard /> */}
                        </div>
                    </div>

                    {/* Suggested items */}
                    <div className={style.suggestedItemsWrapper}>
                        <h2>Suggested Items</h2>
                        <div className={style.suggestedItems}>
                            {/* <ProductCard /> */}
                            {/* <ProductCard /> */}
                            {/* <ProductCard /> */}
                            {/* <ProductCard /> */}
                            {/* <ProductCard /> */}
                        </div>
                        <div className={style.button}>
                            <button>Load more</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
    return {
        props: {
            product: res.data
        }
    }
}

export default Product
