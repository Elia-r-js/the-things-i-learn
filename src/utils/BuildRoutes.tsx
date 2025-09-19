import React from "react";
import { Route } from "react-router-dom";

type RouteConfig = {
  path: string;
  Component: React.ComponentType<any>;
};

export default function BuildRouter(routes: Record<string, RouteConfig>) {
  return Object.values(routes).map(({ path, Component }) => (
    <Route path={path} key={path} element={<Component />} />
  ));
}
// beacuse the path is string we have string and beacuse the component don't have any type we have to use any and in the end 
// chat gpt help me with this one .

// . Record<K, T> in TypeScript

// Record is a utility type built into TypeScript.

// It creates an object type where:

// K = the type of the keys (like string, number, or a union of literal strings).

// T = the type of the values. that you get somwhere you give address ot it 