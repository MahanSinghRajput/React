function customRender(reactElement, mainContainer){

    //version 1
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // mainContainer.appendChild(domElement)


    //version 2 (modular code)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click Me'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)