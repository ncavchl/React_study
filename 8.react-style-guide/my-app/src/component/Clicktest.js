import React, {Component} from 'react'

class Clicktest extends Component {
    handleClick() {
        alert('button click');
    }
    render() {
        return (
            <div>
                {/* <button onClick={alert('button click')}>Error - 읽어들일 때 함수가 한 번 실행됨</button> */}
                <button onClick={this.handleClick}>Button</button>
            </div>
        )
    }
}
export default Clicktest