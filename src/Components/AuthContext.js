import React, { Component } from 'react'

const AuthContext = React.createContext()



export class AuthProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            people: [],
        }
        this.handleClick = this.handleClick.bind(this)
    }

    async componentDidMount() {
        this.handleClick()
    }

    async handleClick() {
        const url = "https://api.randomuser.me/?results=100"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ people: data.results, loading: false })
    }
    render() {
        const { loading, people } = this.state
        const { handleClick } = this
        return (
            <AuthContext.Provider value={{
                loading, people, handleClick
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContext