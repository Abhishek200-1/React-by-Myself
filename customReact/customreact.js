

function customRender(reactElement, container){
    // const domElement = document.createElement 
    // (reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    //
    // container.appendChild(domElement)
    
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        if (prop === 'Children') continue; 
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)


const reactElement = {
    type: 'a',
    props: {
        href:'https://gppgle.com',
        target:'_blank'
    },
    Children:'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
