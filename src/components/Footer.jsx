import React from "react"
import style from "../styles/Footer.module.scss"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.sections}>
                    <div className={style.section}>
                        <strong>Important links</strong>
                        <div>
                            <a href="#">link item</a>
                            <a href="#">link item</a>
                            <a href="#">link item</a>
                            <a href="#">link item</a>
                            <a href="#">link item</a>
                        </div>
                    </div>
                    <div className={style.section}>
                        <strong>Pages</strong>
                        <a href="#">link item</a>
                        <a href="#">link item</a>
                        <a href="#">link item</a>
                        <a href="#">link item</a>
                    </div>
                    <div className={style.section}>
                        <strong>Account</strong>
                        <a href="#">link item</a>
                        <a href="#">link item</a>
                        <a href="#">link item</a>
                        <a href="#">link item</a>
                    </div>
                    <div className={style.section}>
                        <strong>policies</strong>
                        <a href="#">link item</a>
                        <a href="#">link item</a>
                        <a href="#">link item</a>
                        <a href="#">link item</a>
                    </div>
                </div>

                <div className={style.rows}>
                    <div className={style.row}>&copy; alright reserved</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
