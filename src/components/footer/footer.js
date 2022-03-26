import React from "react";

const footerStyle = {
    backgroundColor: '#00acee',
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px auto",
    margin: "10px 0 0 0",
    left: "0",
    bottom: "0",
    width: "100%",
    flexShrink: '0'

};

function Footer() {
    return (
        <div>
            <div style={footerStyle}>Copyright © 2021</div>
        </div>
    );
}

export default Footer