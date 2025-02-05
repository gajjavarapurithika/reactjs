import React from 'react'
import PropTypes from 'prop-types'
class Sum extends React.Component
{
    render()
    {
        return <p>The sum of{this.props.num1}and{this.props.num2}is{parseInt(this.props.num1)+parseInt(this.props.num2)}</p>
    }
}
Sum.propTypes=
{
    num1:PropTypes.number,
    num2:PropTypes.number,
}
export default Sum;