import { PizzaData } from '../../consts';
import PizzaItem from './PizzaItem/PizzaItem';
import {
    PizzaContainer, 
    Title, 
    Container
} from './style'

const Pizza = () => {
    return (
        <Container id="pizzas">
            <Title>
                Пицца
            </Title>
            <PizzaContainer>
            {
                PizzaData.map((pizza,index)=>(
                    <PizzaItem key={index} pizza={pizza} />
                ))
            }
            </PizzaContainer>
        </Container>
    )
}
export default Pizza;