import React from "react";

const FormInputs = ({
  type,
  distance,
  setDistance,
  reps,
  setReps,
  sets,
  setSets,
  weight,
  setWeight,
}) => {
  switch (type) {
    case "lifting":
      return (
        <>
          <label className="label">Reps:</label>
          <input
            type="range"
            min="0"
            max="24"
            value={reps}
            className="range"
            step="4"
            onChange={(e) => setReps(e.target.value)}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>0</span>
            <span>4</span>
            <span>8</span>
            <span>12</span>
            <span>16</span>
            <span>20</span>
            <span>24</span>
          </div>
          <label className="label">Sets:</label>
          <input
            type="range"
            min="0"
            max="6"
            value={sets}
            className="range"
            step="1"
            onChange={(e) => setSets(e.target.value)}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </div>
          <label className="label">Weight (kg):</label>
          <input
            type="range"
            min="0"
            max="72"
            value={weight}
            className="range"
            step="6"
            onChange={(e) => setWeight(e.target.value)}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>0</span>
            <span>6</span>
            <span>12</span>
            <span>18</span>
            <span>24</span>
            <span>30</span>
            <span>36</span>
            <span>42</span>
            <span>48</span>
            <span>54</span>
            <span>60</span>
            <span>66</span>
            <span>72</span>
          </div>
        </>
      );
    case "cycling":
    case "running":
    case "walking":
      return (
        <>
          <label className="label">Distance (km):</label>
          <input
            type="range"
            min="0"
            max="20"
            value={distance}
            className="range"
            step="1"
            onChange={(e) => setDistance(e.target.value)}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>0</span>
            <span>5</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
          </div>
        </>
      );
    default:
      return <></>;
  }
};

export default FormInputs;
