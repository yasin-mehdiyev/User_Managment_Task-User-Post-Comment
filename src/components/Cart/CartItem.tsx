import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSelectedUser } from '../../redux/features/user/userSlice';
import { UserCardContainer, UserDetailButton } from '../../utilits/styledComponents'

const CartItem:React.FC<{item:any}> = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const routingUserDetailPage = (id: string, userName: string): void => {
        dispatch(setSelectedUser(userName));
        history.replace(`/user/${id}`);
    };

    return (
        <div className="col-md-4 col-lg-3 mb-4">
          <UserCardContainer>
            <p>
              <b>{props?.item?.name}</b>
            </p>
            <div className="mt-3">
              <ul>
                <li>
                  <a href="#">{props?.item?.email}</a>
                </li>
                <li>
                  <a href="#">{props?.item?.phone}</a>
                </li>
                <li>
                  <a href="#">{props?.item?.website}</a>
                </li>
              </ul>
            </div>
  
            <div className="mt-3">
              <p>{props?.item?.company?.name}</p>
              <p>{props?.item?.company?.catchPhrase}</p>
              <p>
                <b>{props?.item?.company?.bs}</b>
              </p>
            </div>
  
            <div className="d-flex justify-content-center align-items-center mt-5">
              <UserDetailButton
                onClick={() => routingUserDetailPage(props?.item?.id, props?.item?.name)}
              >
                Details
              </UserDetailButton>
            </div>
          </UserCardContainer>
        </div>
    )
}

export default CartItem
