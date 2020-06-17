import React, { useState } from "react";
import "./App.css";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

const marked = require("marked");
const placeHolder = `
  **This is bolded text**
  # This is a heading 
  ## This is a sub-heading
  - list item 

  > Blockquote

  [link to google](https://google.com)

  This is an inline \`<div></div>\`

  This a block of code:
  \`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
  \`\`\`
  ![React](https://techchronos.com/wp-content/uploads/SszarkLabs/stack-icon/cywBkaGwkMeDAuJbSt1k.png)
`;
// header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

function App() {
  const [value, setValue] = useState(placeHolder);

  function updateValue(e) {
    setValue(e.target.value);
    // console.log(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <FormGroup controlId="text-area">
          <FormLabel>
            <h2>Enter Markdown:</h2>
          </FormLabel>
          <FormControl
            as="textarea"
            rows="3"
            placeholder="Enter Markdown"
            value={value}
            onChange={updateValue}
            id="editor"
          ></FormControl>
        </FormGroup>
        <div>
          <h2>Markdown Output:</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(value, { breaks: true }),
            }}
          ></div>
        </div>
      </header>
    </div>
  );
}

// class App extends React.Component {
//   state = {
//     value: "",
//   };

//   updateValue(e) {
//     this.setState({
//       value: e.target.value,
//     });
//     console.log(this.state.value);
//   }

//   render() {
//     const value = this.state.value;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <FormGroup controlId="text-area">
//             <FormLabel>
//               <h4>Hello</h4>
//             </FormLabel>
//             <FormControl
//               as="textarea"
//               rows="3"
//               placeholder="Enter Markdown"
//               value={value}
//               onChange={this.updateValue.bind(this)}
//             ></FormControl>
//           </FormGroup>
//           <div>
//             <h4>Markdown Output</h4>
//             <div dangerouslySetInnerHTML={{ __html: marked(value, { breaks: true }) }}></div>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
