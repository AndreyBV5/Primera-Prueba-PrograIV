import React from "react";
import Image from "next/image";


function Header() {
    return (
      <div>
        <li>< a href="#">Inicio</a></li>
        <li>< a href="#">Perfil</a></li>
        <li>< a href="#">Proyectos</a></li>
        <li>< a href="#">Contacto</a></li>
        <Image src = "https://static.vecteezy.com/system/resources/previews/004/550/083/non_2x/houses-logo-illustration-free-vector.jpg" width={200} height={200} alt="aaa"/>
      </div>
    );
  }

  export default Header;