import React from "react";

export const Container = ({ title }: { title: string }) => (
  <div role="contentinfo">
    <h1>{title}</h1>
    <p>This is a container</p>
  </div>
);
