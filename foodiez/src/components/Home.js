import React from "react";
import { observer } from "mobx-react";

import CreateRecipe from "./CreateRecipe";

function Home() {
  return (
    <div>
      <CreateRecipe />
    </div>
  );
}

export default observer(Home);
