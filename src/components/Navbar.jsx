import React from "react"
import { header, container, item, contact, shoppingBag, phone } from "../styles/Navbar.module.scss"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiFillShopping } from "react-icons/ai"
import { MdOutlineFoodBank } from "react-icons/md"

const Navbar = () => {
    return (
        <header className={header}>
            <div className={container}>
                <div className={item}>
                    <a href="#">
                        <MdOutlineFoodBank color="white" size={35} />
                    </a>
                </div>

                {/* center */}
                <div className={item}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">My Orders</a>
                        </li>
                        <li>
                            <a href="#">Policy</a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                    </ul>
                </div>

                {/* right */}
                <div className={item}>
                    <div className={contact}>
                        <BsFillTelephoneFill size={25} className={phone} />
                        <div>
                            <span>Order now</span>
                            <p>+60173221032</p>
                        </div>
                    </div>
                    <div className={shoppingBag}>
                        <a href="#">
                            <AiFillShopping color="white" size={25} />
                            <span>{6}</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
