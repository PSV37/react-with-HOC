import React, {Component} from 'react'

const WithData = (WrappedComponent, dataSource) => {
    class WithData extends Component {
        constructor(props) {
            super(props)

            this.state = {
                data:[]
            }
        }

        componentDidMount() {
            fetch(dataSource)
            .then(res => res.json())
            .then(data => this.setState({data : data.slice(0,3)}))
        }

        render() {
            const {dataSource, ...otherProps} = this.props
            const {data} = this.state

            return data.length < 1 ? (<h1>LOADING...</h1>) : (
                <WrappedComponent data={data} {...otherProps} />
            )
        }
    }

    return WithData;
}


export default WithData