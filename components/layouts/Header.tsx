import React from "react";
import Link from "next/Link";
import {Router, withRouter} from 'next/router';
import {MenuRep} from "repository/menuRep";

const style ={
    header :{
        height: 60,
        padding: 0,
        margin: 0,
        background: '#333',
        display: 'flex',
        justifyContent : 'left',
        alignItems :'center',
        position: 'sticky' as const,
        top : 0
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
    normalItem : {
        margin : '3px 10px',
        color : '#eee'
    },
    activeItem :{
        margin : '3px 10px',
        color :'red'
    }
};

type props ={
    router : Router
}

const Header =({router}: props) => {
    const repository = MenuRep;
    const path = router.pathname;
    return(
        <header style={style.header}>
                <div style={style.logoWrapper}>
                    <svg>
                        <path d="M10,65 C35,125 80,0 130,95" fill="none" stroke="#fff" strokeWidth="3" />
                    </svg>
                </div>
                <nav style={style.navWrapper}>
                    {repository.map((item) => (
                        <div style={
                            (path === item.path )
                                ? style.activeItem
                                : style.normalItem
                        } key={item.id}>
                            <Link href={item.path} as={item.as}><a>{item.name}</a></Link>
                        </div>
                    ))}
                    <div>
                        <input type="text"/>
                        <button>검색</button>
                    </div>
                </nav>
        </header>
    )
}

// export default Header;
export default withRouter(Header);