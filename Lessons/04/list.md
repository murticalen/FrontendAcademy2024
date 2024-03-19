To demonstrate how lists work, create a List component which returns elements ``['Hello', 'Again', 'from', 'Sofascore', 'Academy']`` as they are stored in its state.

The component should also return two buttons "Sort" and "Default" which trigger:
a) sorting elements array alphabetically and storing the new value in state
b) setting the default order

Each list element should be wrapped in Element component and displayed with two additional values: a number counter and increase button. The component should track how many times the user has clicked on the increase button for each string.

Demonstrate how using index as key creates problems. The correct solution in this case is to use each of the words as key.