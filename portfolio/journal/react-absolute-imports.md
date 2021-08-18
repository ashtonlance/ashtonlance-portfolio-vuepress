---
title: 'React: Absolute Imports in CRA'
excerpt: 'Are you importing components like ../../../../somecomponents? Then you should
  update to Absolute imports. '
date: 

---
## Benefits of Absolute Import

1. You can move your existing code to other components with imports without any changes.
2. You can easily identify that where the component is actually placed using the import path.
3. Cleaner Code.
4. Easier to write.

## Configure Absolute Import

To support absolute import create a file named `jsconfig.json` in your root directory and add the below code.

    {
      "compilerOptions": {
        "baseUrl": "src"
      },
      "include": ["src"]
    }
    

Now let's convert the relative imports in the below component to Absolute Import

    import React from 'react';
    import Button from '../../components/Button';
    import { red } from '../../utils/constants/colors';
    
    function DangerButton(){
      return <Button color={red} />;
    }
    
    export default DangerButton;
    

The Above imports will be changed to as below

    import React from 'react';
    import Button from 'components/Button';
    import { red } from 'utils/constants/colors';
    
    function DangerButton(){
      return <Button color={red} />;
    }
    
    export default DangerButton;
    

Now our imports are clean and understandable.