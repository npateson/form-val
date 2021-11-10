import styled from 'styled-components';


export const ELIWrapper = styled.div`
padding: 20px;
width: 90%;

h1 {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 2.5rem;
}

p {
    font-size: 1.4rem;
    line-height: 1.5;
    color: #000D6B;
    opacity: 0.6;
}

div {
    margin-top: 20px;
}
`

export const PayBtn = styled.button`
background: #FFAB32;
padding: 15px 30px 15px;
color: #FFFFFF;
font-weight: bold;
border: none;
border-radius: 30px;
font-size: 1rem;
margin-right: 10px;

&:hover {
    background: #FF7600;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #FFF;
}
`

export const DownloadBtn = styled.button`
background: #FFFFFF;
padding: 15px 30px 15px;
color: #FFAB32;
font-weight: bold;
border: 1px solid #FFAB32;
border-radius: 30px;
font-size: 1rem;

&:hover {
    background: #FFAB32;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #FFF;
}
`