import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Navlink() {
  const currentPath = useLocation().pathname

  if (currentPath === '/' || currentPath === '/register') {
    return (
      <>
        <Button variant="link" >Dark Mode</Button>
        <Button variant="link" >Bahasa</Button>
      </>
    )
  }

  return (
    <>
      <Link to="#">Home</Link>
      <Link to="#">Archived</Link>
      <Link to="#">Add</Link>
      <Button variant="link" >Dark Mode</Button>
      <Button variant="link" >Bahasa</Button>
    </>
  )
}
export default Navlink