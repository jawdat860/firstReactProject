import { useState } from "react";
import ContainerDiv from "./Containerdiv";

function Container(props) {
  function showId(p) {
    props.del(p);
  }

  const show = props.data.map((e) => (
    <ContainerDiv key={e.id} value={e.value} id={e.id} cc={showId} />
  ));

  return <div>{show}</div>;
}
export default Container;
