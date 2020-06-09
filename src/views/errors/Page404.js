import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Page404  = () => {
    return (
        <Container>
            <Content>
                <Code>404</Code>
                <Msg>Not Found</Msg>
                <Button to="/home">Back to Home</Button>
            </Content>
        </Container>
    )
}

const Container = styled.div(
    props => ({
        height:"100vh",
        width:"100%",
        padding:"150px 0px",
        textAlign:"center",
    })
)

const Content = styled.div(
    props => ({
        margin:"auto",
        width:"400px",
    })
)

const Button = styled(Link)(
    props => ({
        marginTop:"15px",
        padding:"11px 32px",
        border: "0px",
        userSelect: "none",
        textAlign: "center",
        display: "inline-block",
        color: "#fff",
        transition: ".15s all",
        background: "#CC9980",
        fontFamily: 'Verlag Bold',
        textTransform: "uppercase",
        fontStyle: "normal",
        fontWeight: "bold",
        "&:hover":{
            textDecoration:"none",
            color:"#CC9980",
            backgroundColor:"transparent",
            border:"2px solid #CC9980"
        },
    })
)

const Code = styled.h1(
    props => ({
        fontFamily:"Gilroy Regular !important",
        margin: "50px auto",
        padding: 0,
        fontSize: "150px",
        textAlign: "center",
        color:"#CC9980",
    })
)

const Msg = styled.div(
    props => ({
        fontSize: "18px",
        textAlign: "center",
        padding: props.padding,
        margin: props.margin,
    })
)

export default Page404