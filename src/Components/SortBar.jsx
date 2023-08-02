import React from 'react';

// SortBar component that allows the user to sort bots by health, damage, or armor
// The component receives `onSortByHealth`, `onSortByDamage`, and `onSortByArmor` as props
const SortBar = ({ onSortByHealth, onSortByDamage, onSortByArmor }) => {
  return (
    // Render a container with buttons for sorting bots
    <div className="sort-bar">
      {/* Button to sort bots by health */}
      <button onClick={onSortByHealth}>Sort by Health</button>

      {/* Button to sort bots by damage */}
      <button onClick={onSortByDamage}>Sort by Damage</button>

      {/* Button to sort bots by armor */}
      <button onClick={onSortByArmor}>Sort by Armor</button>
    </div>
  );
};

// Export the SortBar component for use in other files
export default SortBar;