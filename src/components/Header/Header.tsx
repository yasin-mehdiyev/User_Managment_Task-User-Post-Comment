import React from "react";
import { useHistory } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { classes } from "../../utilits/styleUtilities";

const Header: React.FC<{
  routingUrl: string;
  selectedUser: string;
  handleClickAddUserPost?: any;
  isExistAdd?: Boolean;
  isCenter?: Boolean;
}> = (props) => {

  const history = useHistory();

  const routingPreviousPage = (): void => {
    history.replace(props?.routingUrl);
  };

  return (
    <div className="col-md-12 d-flex justify-content-between align-items-center">
      <div style={classes?.customCursor} onClick={routingPreviousPage}>
        <BiArrowBack size={35} color="blue" />
        <span
          style={{
            ...classes?.customColor,
            ...classes?.customMarginLeft,
          }}
        >
          Back
        </span>
      </div>
      <div
        style={
            !props?.isCenter ?
                {
                ...classes?.customSize,
                ...classes?.customLeft,
                ...classes?.customWidth,
                }
            :   {
                ...classes?.customSize,
                ...classes?.customCenter,
                ...classes?.customWidth,
                }
        }
      >
        <b>{props?.selectedUser}</b>
      </div>

      {props?.isExistAdd ? (
        <div
          style={classes?.customCursor}
          onClick={props?.handleClickAddUserPost}
        >
          <AiOutlinePlusCircle size={35} color="blue" />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
