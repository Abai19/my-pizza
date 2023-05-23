import {
    HeaderWrapper, 
    HeaderRightBlock,
    Logo,
    Destination,
    Call,
    HeaderLeftBlock,
    Coins,
    SignIn
} from './style'
import {StarFilled, DollarOutlined} from "@ant-design/icons"
const Header =()=> {
    return (
        <HeaderWrapper>
            <HeaderRightBlock>
                <Logo>My Pizza</Logo>
                <Destination>
                    <div>Доставка пиццы Александров</div> 
                    <span> 30 мин, 4.91
                    <StarFilled 
                        style={{color: 'gold' }}
                    />
                    </span>
                </Destination>
                <Call>
                    <div>8 800 302-00-60</div>
                    <div>Звонок бесплатный</div>
                </Call>
            </HeaderRightBlock>

            <HeaderLeftBlock>
                <Coins>
                    <DollarOutlined
                        style={{fontSize: '25px'}}
                    />
                    <span>Коины</span>
                </Coins>
                <SignIn>
                    Войти
                </SignIn>
            </HeaderLeftBlock>
        </HeaderWrapper>
    )
}

export default Header
