import React from 'react';

class Taskinput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            input: ''
        };
    }

    addTask = () => {
        const  { input } = this.state;
        if(input){
        this.props.addTask(input);
        this.setState({ input: '' });
        }
    };

    inputChange = event => {
        this.setState({ input: event.target.value });
    };

    handleEnter = event => {
        if(event.key === 'Enter') this.addTask();
    };

    render() {
        const { input } = this.state;

        return (
            <div className="task-input">
            <input placeholder="Введите задание"
            onKeyPress={this.handleEnter}
            onChange={this.inputChange} value={input}></input>
            <p className="knopkaAdd" onClick={this.addTask}> + Добавить</p>
            </div>
        )
    }
}

export default Taskinput;