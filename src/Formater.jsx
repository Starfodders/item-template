import { useState, useEffect } from "react";

const Formater = ({ data, descPlaceholder, effects, removeTag }) => {
  const { name, type, rarity, attune, tags, desc, tableRows } = data;

  // console.log(tableRows);
  return (
    <div className="format-container">
      <div className="format-top">
        <p>{name}</p>
      </div>
      <div className="format-mid">
        <p>{type}</p>
        {type && rarity ? <span>-</span> : null}
        <p>{rarity}</p>
      </div>
      <p className="attune">{attune ? "Attunement Required" : null}</p>
      <div className="format-tags">
        {tags &&
          tags.length > 0 &&
          tags.map((tag, index) => (
            <p key={index} className="tag" onClick={() => removeTag(index)}>
              {tag}
            </p>
          ))}
      </div>
      <div className="format-desc">
        {desc &&
          desc.length > 0 &&
          desc.map((paragraph, index) => (
            <p key={index} className="desc">
              {paragraph}
            </p>
          ))}
        <p>{descPlaceholder}</p>
      </div>
      <div className="format-effects">
        {effects &&
          effects.length > 0 &&
          effects.map((property, index) => (
            <div key={index} className="effect">
              <p>{property.name}</p>
              <p>{property.description}</p>
            </div>
          ))}
      </div>
      {tableRows > 0 && (
        <div className="format-table">
          {tableRows > 0 && (
            <div className="format-table-header">
              <input className="table-header" placeholder="Row Name"></input>
              <input className="table-header" placeholder="Row Name"></input>
            </div>
          )}
          {Array.from({ length: tableRows }).map((_, index) => (
            <div key={index} className="table-row">
              <input className="table-cell"></input>
              <input className="table-cell"></input>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Formater;
