import ReactDom from "react-dom";
import { Card } from "./user";


function Render() {
 return <div>
  <h2>Hello React</h2>
  {Card}
</div>

}


ReactDom.render(<Render/>, document.querySelector('#root'))