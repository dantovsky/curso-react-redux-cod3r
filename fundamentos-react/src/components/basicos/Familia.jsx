import React from 'react'
// import FamiliaMembro from './FamiliaMembro'
export default props => {

    return (
        <div>
            {
                // React.cloneElement(props.children, props)

                // Opcao 1
                // React.Children.map(props.children, (el) => {
                //     return React.cloneElement(child, props)
                // })
            }

            {
                // Opaco 1 :: props.children.map
                props.children.map((child, i) => {
                    return React.cloneElement(child, { ...props, key: i })
                })
            }

            {/* <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Ana" {...props} />
            <FamiliaMembro nome="Gustavo" sobrenome="Silva" /> */}
        </div>
    )
}