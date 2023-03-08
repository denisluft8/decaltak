import { useState } from "react";


export const BurguerMenu = () => {
  const [burguer, setBurguer] = useState(false);

  const handleClick = () => {
    burguer === false ? setBurguer(true) : setBurguer(false);
    
    
  };
  return (
    <BurguerContainer onClick={() => handleClick()}>
      <Burguer1
        transform1={burguer ? "translate(0, 11px) rotate(-45deg)" : ""}
      ></Burguer1>
      <Burguer2 opacity={burguer ? "0" : "1"}></Burguer2>
      <Burguer3
        transform1={burguer ? "translate(0, -11px) rotate(45deg)" : ""}
      ></Burguer3>
    </BurguerContainer>
  );
};
