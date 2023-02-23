import React from "react"

const PageHeader = ({ title }) => {
    const section = {
        padding: "20px",
        backgroundColor: "#f1f1f1"
    }
    const container = {
        maxWidth: "1100px",
        margin: "0 auto"
    }
    const style = {
        fontSize: "30px",
        fontWeight: "400"
    }
    return (
        <section style={section}>
            <div style={container}>
                <p style={style}>{title}</p>
            </div>
        </section>
    )
}

export default PageHeader
