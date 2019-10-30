class HelloUser extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            username: props.username,
        };

        this.handleNameChange = this.handleNameChange.bind(this);//makes keyword inside handleNameChange use the class when calling this
    }

    handleNameChange (e) {
        this.setState({ username: e.target.value });
    }

    render(){
        return(
            <div>
                Hello {this.state.username}
                <p>Change Name: </p>
                <input type="text" value={this.state.username} onChange={this.handleNameChange} />
            </div>
        );
    }

}


const init = () => {
    ReactDOM.render(
        <HelloUser username='Austin' />,
        document.getElementById('app'),
    );
};

window.onload = init;