import { Container } from "./style";
import banner from '../../assets/Group 90.svg'


export default function Banner() {
    return ( 
        <Container>
            <img src={banner} alt="" />
        </Container>
    )
}