import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Modal = ({ id, closeButton, handleClose, header, content }) => {

  // const handleModalClick = e => {
  //   if (e.target.id == id) {
  //     handleClose();
  //   }
  // };

  return (
    <Container id={id} >  {/*onClick={handleModalClick}*/}
      <Content>
        <Header>
          <Heading>{header}</Heading>
          {closeButton && <CloseButton onClick={handleClose}>&times;</CloseButton>}
        </Header>
        <Main>
          {content}
        </Main>
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  id: PropTypes.string,
  closeButton: PropTypes.bool,
  handleClose: PropTypes.func,
  header: PropTypes.string,
  text: PropTypes.string,
  actions: PropTypes.element
};

Modal.defaultProps = {
  closeButton: true
};

const Container = styled.div`
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: #312e2e9d;   
`

const Content = styled.div` 
  color: black;
  max-width: 580px; 
  margin: 15% auto;
  border: 1px solid #FF8B00;
  border-radius: 10px;
`

const Header = styled.div`  
  background-color: white;
  display: flex; 
  justify-content: space-between; 
  padding: 0 0 0 30px;  
  border-radius: 10px 10px 0 0; 
`

const Heading = styled.h2` 
  font-weight: normal;  
`

const CloseButton = styled.span`  
  font-size: 30px; 
  cursor: pointer;
  border-radius: 0 10px 0 0; 
  background: #FF8B00;
  color: white;
  padding: 0 0.3em 0.3em;
`

const Main = styled.div`  
  background: white;
  font-size: 20px;  
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  border-radius: 0 0 10px 10px; 
`

const Message = styled.p`  
  max-width: 470px;
  text-align: center;
  font-size: 16px;
  margin-top: 2em;
`

const Actions = styled.div`  
  display: flex;
  margin: 1em 0;
`