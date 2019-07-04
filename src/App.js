import React from 'react'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message : false,
        }
    }
    static getDerivedStateFromProps (props, state) {
        if (props.message !== state.message) {
            return {
                message :  props.message
            }
        }
        return {}
    }
    render(){
        return (
            <div> teste</div>
    );
    }
}
export default  App