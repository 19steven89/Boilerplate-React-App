class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    handleAddOne(){
        // setState is a React component fucntion. 
        //prevState is the params used to access the previous state of the var count used below. 
        //this rerenders the count var and changes state in the UI, without having to use function calls all the time.
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            };
        });
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count-1
            };
        });

    }   

    handleReset(){
        this.setState(() => {
            return{
                count: 0
            };
        });
    }

    render() {
      return (
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>  
        </div>
      );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter/>, document.getElementById("app"));



// let count = 0;

// const addOne = () => {
//     count += 1;
//     renderCountApp()
// };

// const minusOne = () => {
//     count -= 1;
//     renderCountApp();    
// };

// const reset = () => {
//     count = 0;
//     renderCountApp();    
// };

// const appRoot = document.getElementById("app");

// const renderCountApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     //render the var template in the appRoot id tag 
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCountApp();