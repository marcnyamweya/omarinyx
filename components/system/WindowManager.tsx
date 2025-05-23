"use client";
import { useContext } from "react";
import { ProcessContext } from "../../contexts/process";
const WindowManager: React.FC = () => {
  const { processes } = useContext(ProcessContext);

  return (
    <>
      {Object.entries(processes).map(([id, { Component }]) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default WindowManager;
