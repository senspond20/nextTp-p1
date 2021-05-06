import { createUseStyles} from "react-jss";
import oc from 'open-color';
const useStyles = createUseStyles({
    Wrapper: {
        "& + &": {
            marginTop: "1rem"
        }
    },
    Label : {
        fontSize: "1rem",
        color: `${oc.gray[6]}`,
        marginBottom: "0.25rem"
    },
    Input : {
        width: '100%',
        border: `1px solid ${oc.gray[3]}`,
        outline: 'none',
        borderRadius: '0px',
        lineHeight: '2.5rem',
        fontSize: '1.2rem',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
    }
});

export default useStyles;