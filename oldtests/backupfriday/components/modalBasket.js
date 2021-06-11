import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";


const ModalCheackout = (props) => {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Check Out
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          {props.basket.map((item, index) => {
            return  (
                <>
                    <StyledContainer>
                      <img src={item.url} alt="cat" width="100px" height="100px"></img>
                      <StyledInfo>
                        <p>Name: {item.name}</p> 
                        <p>Age: {item.age}</p> 
                        <p>Price: £{item.price}</p>
                      </StyledInfo>
                    </StyledContainer>
                </>
            )
            })
          }
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const PopUpBasket = ({basket}) =>{

    const [modalShow, setModalShow] = useState(false);

    return(
      // <p>test</p>

      <div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch Basket
        </Button>

        <ModalCheackout
          show={modalShow}
          onHide={() => setModalShow(false)}
          basket={basket}/>
      </div>

    )
  }

  const StyledContainer = styled.div`
    display: flex;    
    flex-direction: row;
    margin-bottom: 5px;
    padding:5px;
    /* justify-content: space-around;     */
    /* width: 400px; */
    background-color: beige;
    border-radius: 5px;
    height: 110px;
`;

const StyledInfo = styled.div`
    color: darkpink;  
    margin-left: 10px;
    
`;



  export default PopUpBasket
  