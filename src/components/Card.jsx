import {React, useState} from 'react'
import styled from 'styled-components';
import {ReactComponent as UserIcon} from '..//assets/user.svg'
import {ReactComponent as Expand} from '..//assets/expand_more.svg'
import {ReactComponent as Collapse} from '..//assets/expand_less.svg'
import moment from 'moment';


const Card = (props) => {

    const role = props.role;

    const [expand, setExpand] = useState(false);

    const showInfo = () => {
        setExpand(!expand)
    }

    function formatPhoneNumber(phoneNumberString) {
        //captures the number in divided parts
        var match = ('' + phoneNumberString).match(/^(\d{3})(\d{3})(\d{4})$/);
        //format number
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
      }

    function formatDate(proposedDate){
        var date = moment(proposedDate);
        return date.format('l LT')
      }


  return (
    <Container data-testid="card" >
        <div className='user-card'>
            <div className='user-profile'>
                <div className='heading'>
                    <UserIcon 
                        style={{
                            height: '3.5rem', 
                            width: '3.5rem', 
                            //color code user icon based on role
                            fill: role === "Administrator" ? "var(--color-adm)"
                            : role === "User" ? "var(--color-user)"
                            : role === "Viewer" && "var(--color-viewer)" 
                        }} />
                    <div>
                        <h4>{props.name}</h4>
                        <p>{props.role}</p>
                        <p className='email'>{props.email}</p>
                    </div>
                </div>
                
                <div className='button'>
                    {expand ? 
                        <div type="button" onClick={showInfo}><Collapse style={{fill: 'var(--color-text)'}} /></div> 
                        : <div type="button" onClick={showInfo}><Expand style={{fill: 'var(--color-text)'}} /></div>
                    }
                </div>
            </div>

            {expand && 
                <div className='user-info'>
                    <h6>Address</h6>
                    <p>{props.address}</p>
                    <h6>Phone</h6>
                    <p>{formatPhoneNumber(props.phone)}</p>
                    <h6>Created At</h6>
                    <p>{formatDate(props.created)}</p>
                    <h6>Last Logged In</h6>
                    <p>{formatDate(props.lastLog)}</p>
                </div>
            }
        </div>
    </Container>
  )
}

const Container = styled.div`

    .user-card{
        margin: 1.25rem 1rem;
        background-color: var(--color-white);
        padding: 1rem;
        box-shadow: 0 0 3px 1px var(--color-shadow);
    }
    .user-profile{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .heading{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .button{
        cursor: pointer;
    }
    .email{
        color: var(--color-text-variant);
    }
    .user-info{
        padding: 1rem 0;
        padding-left: 4.5rem;
    }
    h6{ 
        padding-top: .6rem;
    }
`;

export default Card