import { ToyReact, Component } from './ToyReact.js';

// let a = <div>
//     <span>1</span>
//     <span>2</span>
//     <span>3</span>
// </div>
// console.log('a', a);
// document.body.appendChild(a);

class MyComponent extends Component {
    render() {
        return <div>cool<span> god!!!</span>
            {this.children} / {true}
            </div>
    }
}
let a = <MyComponent name="a" id="id"><div>i am children</div></MyComponent>


ToyReact.render(a, document.body);