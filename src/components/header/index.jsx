import { Container } from "./style";


import logo from '../../assets/Group 3.svg'
import search from '../../assets/Group 63.svg'
import pessoa from '../../assets/Group 61.svg'
import lok from '../../assets/Group 62.svg'





export default function Header() {
    return (
        <Container>
            <img src={logo} alt="" />
            <ul>
                <a href=""> <img src={search} alt="" /> </a>
                <a href=""> <img src={pessoa} alt="" /> </a>
                <a href=""> <img src={lok} alt="" /> </a>
            </ul>
        </Container>
    )
}