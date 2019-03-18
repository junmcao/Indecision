class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) =>{
            return{
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                    <p>Here are some details homie.</p>
                    </div>
                )}
            </div>
        );
    }

}


ReactDOM.render(<Visibility />, document.getElementById('app'));



// const appRoot = document.getElementById('app');





// let text = "";
// let detailsButton = "Show details";

// const toggleDetails = () => {
//     if (text){
//         text = "";
//         detailsButton = "Show details";
//     }
//     else {
//         text = "Hey. These are details you can now see!"
//         detailsButton = "Hide details";
//     }
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//         <title>Build it!</title>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleDetails}>{detailsButton}</button>
//         <p>{text}</p>
//         </div>
//     )
    
    
//     ReactDOM.render(template, appRoot);
// };

// render();