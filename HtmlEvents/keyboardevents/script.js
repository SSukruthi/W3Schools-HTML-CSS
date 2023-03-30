const handleKeyDown = (event) => {
    console.log('Key down!');
    console.log('Key:', event.key);
    console.log('Code:', event.code);
    console.log('Which:', event.which);
    console.log('Location:', event.location);
    console.log('Alt key:', event.altKey);
    console.log('Ctrl key:', event.ctrlKey);
    console.log('Meta key:', event.metaKey);
    console.log('Shift key:', event.shiftKey);
    console.log('Is composing:', event.isComposing);
    console.log('Repeat:', event.repeat);
  };
  
  const handleKeyPress = (event) => {
    console.log('Key press!');
    console.log('Key:', event.key);
    console.log('Code:', event.code);
    console.log('Which:', event.which);
    console.log('Location:', event.location);
    console.log('Alt key:', event.altKey);
    console.log('Ctrl key:', event.ctrlKey);
    console.log('Meta key:', event.metaKey);
    console.log('Shift key:', event.shiftKey);
    console.log('Is composing:', event.isComposing);
    console.log('Repeat:', event.repeat);
  };
  
  const handleKeyUp = (event) => {
    console.log('Key up!');
    console.log('Key:', event.key);
    console.log('Code:', event.code);
    console.log('Which:', event.which);
    console.log('Location:', event.location);
    console.log('Alt key:', event.altKey);
    console.log('Ctrl key:', event.ctrlKey);
    console.log('Meta key:', event.metaKey);
    console.log('Shift key:', event.shiftKey);
    console.log('Is composing:', event.isComposing);
    console.log('Repeat:', event.repeat);
  };
  
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keypress', handleKeyPress);
  document.addEventListener('keyup', handleKeyUp);
  