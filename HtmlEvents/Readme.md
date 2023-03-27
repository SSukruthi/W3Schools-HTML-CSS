Events: An event is something that happens on a webpage, such as a user clicking a button or scrolling the page. When an event occurs, the browser generates an Event object, which contains information about the event, such as its type and any relevant data.

For HTMLEvents:
A. Events:

1. "click" event on box1 

2. "mouseover" event on box2

3. "dblclick" event on box3

4. "keydown" event on the window object

5. "keyup" event on the window object

B. Event Objects:

1. "event" object passed as a parameter to each event handler function
like "event" object in clickEventHandler(event), mouseOverEventHandler(event), doubleClickEventHandler(event), keyDownEventHandler(event), keyUpEventHandler(event)

C. Event Methods:

1. "stopPropagation()" method used in the clickEventHandler function

D. Event Properties:

1. "target" property of the "event" object, used to refer to the target element that triggered the event

2. "type" property of the "event" object, used to identify the type of event that was triggered

3. "clientX" and "clientY" properties of the "event" object, used to get the X and Y coordinates of the mouse pointer when the event occurred

4. "keyCode" property of the "event" object, used to get the code of the key that was pressed during the "keydown" or "keyup" event.


For HTMLDomEvents Folder:

1. abort: triggered when an image, a video, or an audio file is stopped before it is finished loading.

2. afterprint: triggered when a print job has been sent to the printer or the print preview has been closed.

3. animation: a CSS event that is triggered when a CSS animation is started.

4. beforeprint: triggered when a print job is about to be sent to the printer or the print preview is about to be opened.

5. beforeunload: triggered when the window or the tab is about to be closed.

6. change: triggered when the value of an input element, a select element, or a textarea element is changed.

7. click: triggered when the user clicks on an element. 

8. contextmenu: triggered when the user right-clicks on an element to open the context menu.

9. copy: triggered when the user copies text from an input element or a textarea element.

10. cut: triggered when the user cuts text from an input element or a textarea element.

11. dblclick: triggered when the user double-clicks on an element.

12. drag: triggered when an element is being dragged.

13. dragend: triggered when the dragging of an element is finished.

14. dragenter: triggered when a dragged element enters a drop zone.

15. dragover: triggered when a dragged element is being dragged over a drop zone.

16. dragleave: triggered when a dragged element leaves a drop zone.

17. drop: triggered when a dragged element is dropped into a drop zone.

18. durationchange: triggered when the duration of a media element is changed.

19. ended: triggered when a media element has finished playing.

20. error: triggered when an image, a video, or an audio file cannot be loaded.

21. focus: triggered when an element gets focus.

22. fullscreenchange: triggered when the fullscreen mode of the browser is changed.

23. hashchange: triggered when the URL hash changes.

24. input: triggered when the value of an input element, a select element, or a textarea element is changed, including during user input or programmatically.

25. invalid: triggered when a form element is invalid.

26. keydown: triggered when a key is pressed down.

27. keyup: triggered when a key is released.

28. keypress: triggered when a key is pressed.

29. load: triggered when an image, a video, or an audio file is finished loading.

30. mousedown: triggered when the user presses the mouse button on an element.

31. mousemove: triggered when the user moves the mouse pointer over an element.

32. mouseout: triggered when the user moves the mouse pointer out of an element.

33. mouseover: triggered when the user moves the mouse pointer over an element.

34. mouseup: triggered when the user releases the mouse button on an element.

35. reset: triggered when a form is reset.

36. search: triggered when the user clears the text from an input element with the X button.

37. submit: triggered when a form is submitted.


For HTMLEventObject folder:

1. Mouse events: click, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, and contextmenu

2. Keyboard events: keydown, keyup, and keypress

3. Form events: submit

4. Input events: input and change

5. Focus events: focus, blur, focusin, and focusout

6. Drag and drop events: drag, dragstart, dragend, dragenter, dragleave, dragover, and drop

7. Animation events: animationstart, animationend, and animationiteration

8. Transition events: transitionend

9. Touch events: touchstart, touchmove, touchend, and touchcancel

10. Page transition events: pageshow and pagehide

11. Hash change event: hashchange

12. Popstate event: popstate

13. Progress events: loadstart and error

14. Clipboard events: copy, cut, and paste

15. Storage event: storage

16. UI events: abort and beforeunload

17. Wheel event: onwheel

For HTMLEventProperties folder: 

1. altKey: Whether the 'Alt' key was pressed during the event

2. bubbles: Whether the event bubbles up through the DOM or not

3. button: The mouse button that was pressed during the event (1 for left, 2 for middle, 3 for right)

4. buttons: A bit field representing which mouse buttons were pressed during the event

5. cancelable: Whether the event can be canceled or not

6. clientX: The horizontal coordinate of the mouse pointer relative to the client window at the time of the event

7. clientY: The vertical coordinate of the mouse pointer relative to the client window at the time of the event

8. composed: Whether the event can be composed across shadow boundaries or not

9. ctrlKey: Whether the 'Ctrl' key was pressed during the event

10. currentTarget: The element that the event listener is attached to

11. defaultPrevented: Whether the default action of the event has been prevented or not

12. detail: The number of times the mouse button was pressed and released during the event

13. eventPhase: The current phase of the event propagation (capturing, at target, or bubbling)

14. isTrusted: Whether the event was generated by the user agent or not

15. key: The key value of the key represented by the event

16. metaKey: Whether the 'Meta' key was pressed during the event

17. movementX: The horizontal distance that the mouse has been moved since the last mouse event

18. movementY: The vertical distance that the mouse has been moved since the last mouse event

19. offsetX: The horizontal coordinate of the mouse pointer relative to the target element at the time of the event

20. offsetY: The vertical coordinate of the mouse pointer relative to the target element at the time of the event

21. pageX: The horizontal coordinate of the mouse pointer relative to the whole document at the time of the event

22. pageY: The vertical coordinate of the mouse pointer relative to the whole document at the time of the event

23. relatedTarget: The secondary target for mouse events (for mouseover and mouseout events)

24. screenX: The horizontal coordinate of the mouse pointer relative to the whole screen at the time of the event

25. screenY: The vertical coordinate of the mouse pointer relative to the whole screen at the time of the event

26. shiftKey: Whether the 'Shift' key was pressed during the event

27. target: The element that the event was originally dispatched to

28. timeStamp: The time that the event was created

29. type: The type of the event

30. view: The window object that the event occurred in

31. which: The numeric code for the key or button that was pressed during the event
