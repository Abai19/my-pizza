import { 
    PizzaData, 
    DesertsData, 
    SnacksData 
} from '../../consts';
import ProductItem  from './ProductItem/ProductItem';
import {
    PizzaContainer, 
    Title, 
    Container
} from './style'

const Product = ({id,name}) => {
    return (
        <Container id={id}>
            <Title>
                {name}
            </Title>
            <PizzaContainer>
            {
                id === "pizzas" ?
                PizzaData.map((pizza,index)=>(
                    <ProductItem key={index} data={pizza} />
                )) :
                id === "desserts" ? 
                DesertsData.map((desert,index)=>(
                    <ProductItem key={index} data={desert} />
                )) :
                id === "snacks" ? 
                SnacksData.map((snack,index)=>(
                    <ProductItem key={index} data={snack} />
                )) : (
                    <div>
                        {name} не найдены
                    </div>
                )
            }
            </PizzaContainer>
        </Container>
    )
}
export default Product;