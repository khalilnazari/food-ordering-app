import PageHeader from "@/components/PageHeader"
import Head from "next/head"
import React from "react"
import style from "../styles/Contact.module.scss"
import { GrMapLocation } from "react-icons/gr"
import { FaPhone, FaPhoneSquare } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const contact = () => {
    return (
        <>
            <Head>
                <title>Contact us - KD-commerce</title>
            </Head>

            <PageHeader title="Contact us" />
            <main className={style.contactPage}>
                <div className={style.container}>
                    {/* cards */}
                    <div className={style.cards}>
                        <div className={style.card}>
                            <GrMapLocation size={50} color="black" />
                            <strong>Address</strong>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nam?
                            </p>
                        </div>

                        <div className={style.card}>
                            <FaPhoneSquare size={50} color="black" />
                            <strong>Phone</strong>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nam?
                                <br />
                                +601326549898
                            </p>
                        </div>

                        <div className={style.card}>
                            <MdEmail size={50} color="black" />
                            <strong>Email</strong>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nam?
                                <br />
                                name@domain.com
                            </p>
                        </div>
                    </div>

                    {/* form */}
                    <form className={style.contactForm}>
                        <h2>Get in touch with us</h2>
                        <div className={style.inputControl}>
                            <input type="text" placeholder="Full name" />
                        </div>

                        <div className={style.inputControl}>
                            <input type="text" placeholder="Your email" />
                        </div>

                        <div className={style.inputControl}>
                            <input type="text" placeholder="Phone number" />
                        </div>

                        <div className={style.inputControl}>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Write your message"
                            ></textarea>
                        </div>
                        <div className={style.buttonControl}>
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default contact
