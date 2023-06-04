import React from 'react'
import styled from 'styled-components';
import {ReactComponent as Group} from '..//assets/group.svg'

const Navbar = () => {
  return (
    <Container>
        <div className='header'>
            <Group />
            <h3>USERS</h3>
        </div>
    </Container>
  )
}

const Container = styled.div`
    
    .header{
        display: flex;
        gap: .25rem;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        box-shadow: 0 2px 3px var(--color-shadow);
        background-color: var(--color-white);
    }
    
    svg{
        fill: var(--color-adm);    
        }
`;

export default Navbar