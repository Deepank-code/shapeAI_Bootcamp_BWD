import React from "react";
const now=new Date();
const year=now.getFullYear();
console.log(year);
function Footer(){
    return <footer>
        <p>copyright @ {year}</p>
   
    </footer> 
}
export default Footer;