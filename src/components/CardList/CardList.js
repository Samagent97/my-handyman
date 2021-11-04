import React from "react";
import Card from "../Card/Card";

const CardList = ({ handy }) => {
    const cardComponent = handy.map((user,i) => {
        return (
            <Card
            key={i} 
            id={handy[i].id} 
            name={handy[i].name} 
            skill={handy[i].skill} 
            ratings={handy[i].ratings}
            />
        );
    });
    return (
        <div>
          {cardComponent}
        </div>
    
    );
}

export default CardList;