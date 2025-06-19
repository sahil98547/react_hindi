function customRender(reactElement, container){
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);

  container.appendChild(domElement);
  */
 
  //creating the dom element.
  const domElement = document.createElement(reactElement.type);

  //setting the innter html of <a><a/>
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
      if (prop === 'children') continue;
      domElement.setAttribute(prop, reactElement.props[prop]);
  }

  //putting the element(<a><a/>) in the container.
  container.appendChild(domElement)
}

const reactElement = {  
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google',
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);