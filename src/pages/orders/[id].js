import styles from "../../styles/Order.module.scss"
import Image from "next/image"
import axios from "axios"
import { RiMoneyDollarCircleFill, RiEBike2Line, RiHomeSmileFill } from "react-icons/ri"
import { GiCook } from "react-icons/gi"
import { BsFillCheckCircleFill } from "react-icons/bs"

const Order = ({ order }) => {
    const status = order.status

    const statusClass = (index) => {
        if (index - status < 1) return styles.done
        if (index - status === 1) return styles.inProgress
        if (index - status > 1) return styles.undone
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <tr className={styles.trTitle}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <span className={styles.id}>{order._id}</span>
                            </td>
                            <td>
                                <span className={styles.name}>{order.customer}</span>
                            </td>
                            <td>
                                <span className={styles.address}>{order.address}</span>
                            </td>
                            <td>
                                <span className={styles.total}>${order.total}</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <RiMoneyDollarCircleFill size={50} color="#8400ff" />
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                            <BsFillCheckCircleFill size={25} color="green" />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <GiCook size={50} color="#ff9200" />
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}>
                            <BsFillCheckCircleFill
                                size={25}
                                color="green"
                                className={styles.checkedIcon}
                            />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <RiEBike2Line size={50} color="black" />
                        <span>On the way</span>
                        <div className={styles.checkedIcon}>
                            <BsFillCheckCircleFill
                                size={25}
                                color="green"
                                className={styles.checkedIcon}
                            />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <RiHomeSmileFill size={50} color="#3b474f" />
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}>
                            <BsFillCheckCircleFill
                                size={25}
                                color="green"
                                className={styles.checkedIcon}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>${order.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>${order.total}
                    </div>
                    <button disabled className={styles.button}>
                        PAID
                    </button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`)
    return {
        props: { order: res.data }
    }
}

export default Order
