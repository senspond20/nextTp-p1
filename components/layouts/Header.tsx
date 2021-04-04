import React from "react";
import Link from "next/Link";

const style ={
    header :{
        height: 60,
        padding: 0,
        margin: 0,
        background: '#333',
        display: 'flex',
        justifyContent : 'left',
        alignItems :'center'
    },
    logoWrapper :{
        color :'#eee',
        width : '60px',
        paddingRight: '30px'
    },
    navWrapper : {
        display: 'flex',
        background: '#333'
    },
    navItem : {
        margin : '3px 10px',
        color : '#eee'
    }
};

const Header =() =>{
    
    return(
        <header style={style.header}>
            <div style={style.logoWrapper}>
                <svg>
                    <path d="M10,65 C35,125 80,0 130,95" fill="none" stroke="#fff" stroke-width="3" />
                </svg>
            </div>
            <nav style={style.navWrapper}>
                <div style={style.navItem}>
                    <Link href="" as="/"><a>Home</a></Link>
                </div>
                <div style={style.navItem}>
                    <Link href="/posts" as="/posts"><a>Posts</a></Link>
                </div>
                <div style={style.navItem}>
                    <Link href= "#"><a>About</a></Link>
                </div>
            </nav>
        </header>
    )
}
export default Header;