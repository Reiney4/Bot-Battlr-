// Allows damage, or  the user to sort by health,damage or armor 
import React from "react";

    const SortBar = ({onSortByHealth, onSortByDamage, onSortByArmor})=> {
        return(
            <div className="sortbar">
                {/* created buttons to sort the bots */}
                <button onClick={onSortByHealth}>Sort by Health</button>
                <button onClick={onSortByDamage}>Sort by Damage</button>
                <button onCLICK={onSortByArmor}>Sort by Armor</button>
            </div>
        );
    };
    export default SortBar;


