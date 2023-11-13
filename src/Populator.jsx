import { useState, useEffect } from "react";
import Formater from "./Formater";

const Populator = () => {
  const [inputFields, setInputFields] = useState({
    tags: [],
    desc: [],
    tableRows: 0,
  });
  const [effectList, setEffectList] = useState([]);
  const [descPlaceholder, setDescPlaceholder] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({ ...prev, [name]: value }));
  };

  const updateTag = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      const value = e.target.value.trim();
      if (value) {
        setInputFields((prev) => ({
          ...prev,
          ["tags"]: [...prev.tags, value],
        }));
        e.target.value = "";
      }
    }
  };

  const removeTag = (index) => {
    setInputFields((prev) => ({
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const updateDesc = (e) => {
    setDescPlaceholder(e.target.value);
    if (e.keyCode === 13) {
      const value = e.target.value.trim();
      if (value) {
        setInputFields((prev) => ({
          ...prev,
          ["desc"]: [...prev.desc, value],
        }));
        e.target.value = "";
        setDescPlaceholder("");
      }
    }
  };

  const addEffect = () => {
    setEffectList([...effectList, { name: "", description: "" }]);
  };

  const handleEffectChange = (e, index) => {
    const { name, value } = e.target;

    setEffectList((currentList) =>
      currentList.map((item, i) =>
        i === index
          ? { ...item, [name === "effectName" ? "name" : "description"]: value }
          : item
      )
    );
  };

  return (
    <>
      <div className="populate-container">
        <div className="populate-row">
          <div className="populate-item">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="pop-input"
              placeholder="Item Name"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="populate-item">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              name="type"
              className="pop-input"
              placeholder="Weapon, Armour, etc"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="populate-item">
            <label htmlFor="rarity">Rarity</label>
            <input
              type="text"
              name="rarity"
              className="pop-input"
              placeholder="Common, Legendary"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="populate-row">
          <div className="populate-item">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              name="tags"
              className="pop-input"
              placeholder="Light, Versatile"
              onKeyDown={(e) => updateTag(e)}
            />
          </div>
        </div>
        <div className="populate-item">
            <label htmlFor="attune">Attunement</label>
            <input
              type="checkbox"
              name="attune"
              className="attune-input"
              onChange={() =>
                setInputFields((prev) => ({
                  ...prev,
                  ["attune"]: !inputFields.attune,
                }))
              }
            ></input>
          </div>
        <div className="populate-row">
          <div className="populate-item">
            <label htmlFor="desc">Description</label>
            <textarea
              type="text"
              name="desc"
              className="desc-input"
              onChange={(e) => updateDesc(e)}
              onKeyDown={(e) => updateDesc(e)}
            />
          </div>
        </div>
        <div className="populate-row-prop">
          <div className="populate-item">
            <label htmlFor="name" id = "prop-label">Properties</label>
            <button onClick={() => addEffect()} className="prop-btn">New Property</button>
          </div>
          {effectList.length > 0 &&
            effectList.map((effect, index) => {
              return (
                <div key={index}>
                  <div className="populate-item">
                    <label className="prop-label">Property Name</label>
                    <input
                      name="effectName"
                      value={effect.name}
                      className="prop-input"
                      onChange={(e) => handleEffectChange(e, index)}
                    />
                  </div>
                  <div className="populate-item">
                    <label className="prop-label">Property Description</label>

                    <textarea
                      name="effectDesc"
                      value={effect.description}
                      className="prop-input-desc"
                      onChange={(e) => handleEffectChange(e, index)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="populate-row">
          <div className="populate-item">
            <button
              onClick={() =>
                setInputFields((prev) => ({
                  ...prev,
                  ["tableRows"]: prev.tableRows + 1,
                }))
              }
              className="prop-btn"
            >
              Add Table Row
            </button>
          </div>
        </div>
      </div>
      <Formater
        data={inputFields}
        descPlaceholder={descPlaceholder}
        effects={effectList}
        removeTag={removeTag}
      />
    </>
  );
};

export default Populator;

//name, tags (separate with space), source, item type, item rarity, attunement toggle, description (separate with enter), add effect (effect title, effect description), add table,
//if theres an image, toggle class for different format

