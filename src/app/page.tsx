// import { ReactElement } from "react";

// export default function Index(): ReactElement {
//     return <div>Hello, world!</div>;
// }
// import { ReactElement } from "react";
// import processDirectory from "../../utils/processDirectory";

// export default function Home(): ReactElement {
//   return <processDirectory.HelloWorld.component />;
// }

import WindowManager from "../../components/system/WindowManager";
import { ProcessProvider } from "../../contexts/process";
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <WindowManager />
    </ProcessProvider>
  );
}