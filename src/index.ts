import lib from "./lib"

export default function root(): Root {
  console.log(lib.name);
}

root()

type Root = void;
