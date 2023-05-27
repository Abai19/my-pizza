import {
    PizzaWrapper,
    ImgBlock,
    NameBlock,
    DescBlock,
    FooterBlock,
    Price,
    CartButton,
    ModalWrapper
} from './style';

import {Modal} from 'antd';
import { useState } from 'react';

const ProductItem = ({data}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
        <>
        <PizzaWrapper onClick={showModal}>  
            <ImgBlock src={data.img}/>
            <NameBlock>
                {data.name}
            </NameBlock>
            <DescBlock>
                {data.desc}
            </DescBlock>
            <FooterBlock>
                <Price>
                   от {data.price} ₽
                </Price>
                <CartButton>
                    в корзину
                </CartButton>
            </FooterBlock>
        </PizzaWrapper>

        <Modal 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
            width='50%'
            cancelButtonProps={{
                style: {
                    display: "none",
                },
            }}
            okButtonProps={{
                style: {
                    backgroundColor: "gold",
                    width: "200px",
                    // content: "в корзину"
                }
                // className: "viri"
            }}
        >
            <ModalWrapper>
                <ImgBlock src={data.img}/>
                <div>
                    <NameBlock> 
                        {data.name}
                    </NameBlock>
                    <DescBlock>
                        {data.desc}
                    </DescBlock>
                </div>
            </ModalWrapper>
        </Modal>
        </>
    )
}
export default ProductItem;