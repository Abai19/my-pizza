import {
    PizzaWrapper,
    ImgBlock,
    NameBlock,
    DescBlock,
    FooterBlock,
    Price,
    CartButton
} from './style'

const PizzaItem = ({pizza}) => {
    return (
        <PizzaWrapper>
            <ImgBlock src={pizza.img}/>
            <NameBlock>
                {pizza.name}
            </NameBlock>
            <DescBlock>
                {pizza.desc}
            </DescBlock>
            <FooterBlock>
                <Price>
                   от {pizza.price} ₽
                </Price>
                <CartButton>
                    в корзину
                </CartButton>
            </FooterBlock>
        </PizzaWrapper>
    )
}
export default PizzaItem