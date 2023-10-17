// Bubble.js

import { useState } from "react";

function Bubble(){
    const  [isPopped, setIsPopped] = useState(false);
    
    const popBubble = () => {
        if (!isPopped) {
            setIsPopped(true);
        }
    };

    return (
    <div>
      <h2>Bubble</h2>
      <p>Status: {isPopped ? 'Popped' : 'Filled'}</p>
      <button onClick={popBubble} disabled={isPopped}>
        Pop Bubble
      </button>
    </div>
    );
}


export default Bubble;
