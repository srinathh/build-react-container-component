import React from 'react'
import './myContainer.css'
import classNames from 'classnames'

export default class MyContainer extends React.Component{
    static propTypes = {
        title: React.PropTypes.string
    }
    render(){
        const {title, children, className, ...other} = this.props

        const classnames = classNames(
            'MyContainer',
            className
        )

        const newChildren = React.Children.map(this.props.children, child=>{
            const childclassnames = classNames(
                child.props.className,
                'childStyle'
            )
            const newprops = Object.assign({},child.props,{className:childclassnames})
            return React.cloneElement(child, newprops)
        })

        return(
            <div className={classnames} {...other}>
                <h1>{title}</h1>
                <hr />
                <div>
                    {newChildren}
                </div>
            </div>
        )
    }
}