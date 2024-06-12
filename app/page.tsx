import Image from "next/image";
import React from "react";
import Link from "next/link";

import Acceso from './access/acceso'
import Login from "./login/login";
import SignIn from "./login/signin";
import Recuperar1 from './recuperar/recuperar1'
import Recuperar2 from './recuperar/recuperar2'
import Recuperar3 from './recuperar/recuperar3'
import Exito from './recuperar/exito'

export default function App (){
  return(
     <div className="bg-dark">
      {/*<section><Acceso/></section>*/}
      {/* <section><Login/></section> */}
      {/* <section><SignIn/></section> */}
      {/* <section><Recuperar3/></section> */}
      <section><Exito/></section>
     </div>
 
  );
}