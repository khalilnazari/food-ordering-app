import React from "react"
import Image from "next/image"
import style from "../styles/Product.module.scss"
import { AiFillStar } from "react-icons/ai"
import { BiUser } from "react-icons/bi"

const Reviews = ({ userAvatar, reviewNotes, stars }) => {
    return (
        <div className={style.reviews}>
            <div className={style.reviewHeader}>
                <div className={style.userInfo}>
                    <BiUser size={30} />
                    <strong>John doe</strong>
                </div>
                <div className={style.reviewStars}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
            </div>
            <div className={style.reviewBody}>
                <div className={style.reviewNote}>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ullam
                        cupiditate fugit voluptatum inventore nisi nobis ad voluptatem. In, ad?
                    </p>

                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ullam
                        cupiditate fugit voluptatum inventore nisi nobis ad voluptatem. In, ad?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Reviews
