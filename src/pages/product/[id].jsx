import PageHeader from "@/components/PageHeader"
import React from "react"
import style from "../../styles/Product.module.scss"
import { AiOutlinePlus, AiOutlineMinus, AiFillStar } from "react-icons/ai"
import ProductImage from "@/components/ProductImage"
import Reviews from "@/components/Reviews"

const Product = () => {
    // jsx
    return (
        <>
            <PageHeader title="Product Detail" />
            <main className={style.productDetail}>
                <div className={style.container}>
                    <div className={style.detailWrapper}>
                        {/* iamge */}
                        <ProductImage />
                        {/* <div>sd</div> */}

                        {/* details */}
                        <div>
                            <div className={style.detailSection}>
                                <h1 className={style.productName}>Lorem ipsum dolor sit amet.</h1>
                                <p className={style.productDescription}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Temporibus dolor ipsa explicabo at! Fugiat consequuntur officia
                                    animi tempora ea ipsa, culpa recusandae, odio excepturi
                                    accusantium quas alias. Reiciendis, laborum itaque?
                                </p>
                                <p className={style.productDescription}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Temporibus dolor ipsa explicabo at! Fugiat consequuntur officia
                                    animi tempora ea ipsa, culpa recusandae, odio excepturi
                                    accusantium quas alias. Reiciendis, laborum itaque?
                                </p>
                            </div>

                            <div className={style.detailSection}>
                                <p>
                                    <strong>Price : </strong>
                                    $12.34
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
                        <Reviews />
                        <Reviews />
                    </div>

                    {/* Suggested items */}
                    <div className="suggestedItemsWrapper"></div>
                </div>
            </main>
        </>
    )
}

export default Product
