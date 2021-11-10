import styled from 'styled-components'
import Photo from './images/primepub2.jpg'


export const ELImgWrapper = styled.div`
background-image: url(${Photo});
height: 250px;
margin-top: 60px;
object-fit: contain;
width: 80%;


div {
    background: #B8FF33;
    padding: 30px;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    text-align: center;
    float: right;
    transform: translateY(-70px);
    transform: translateX(65px);

}

p {
    font-size: 1.3rem;
    font-weight: bold;
    color: #FFF;
}
`