import React,{Fragment} from "react";
import {Props} from "repository/postRep";

const idStyle={
    color:'red'
}
const HomePostList = ({items}: Props) => {
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td style={idStyle}>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default HomePostList;