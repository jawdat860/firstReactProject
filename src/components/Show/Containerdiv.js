import { Fragment } from "react";

function ContainerDiv(props) {
  function del(e) {
    props.cc(e.target.id);
  }

  return (
    <Fragment>
      <div onClick={del} id={`${props.id}`}>
        {props.value}
      </div>
    </Fragment>
  );
}
export default ContainerDiv;
