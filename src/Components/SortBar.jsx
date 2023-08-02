// Allows damage, or  the user to sort by health,damage or armor 
import React from "react";

    const SortBar = ({onSortByHealth, onSortByDamage, onSortByArmor})=> {
        return(
            <div className="sortbar">
                {/* created buttons to sort the bots */}
                <button onClick={onSortByHealth}></button>
                <button onClick={onSortByDamage}></button>
                <button onCLICK={onSortByArmor}></button>
            </div>
        );
    };
    export default SortBar;


