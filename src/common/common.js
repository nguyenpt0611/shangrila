const sortColumn = (event, datatable, header) => {
  if (!header.sortable)
    return
  if (event.target.attributes.sort) {
    switch (event.target.attributes.sort.value) {
      case 'none':
        event.target.attributes.sort.value = 'asc';
        event.target.classList.add('active', 'asc')
        datatable.sort(compareValues(header.value, 'asc'))
        break;
      case 'asc':
        event.target.attributes.sort.value = 'desc';
        event.target.classList.remove('asc')
        event.target.classList.add('desc')
        datatable.sort(compareValues(header.value, 'desc'))
        break;
      case 'desc':
        event.target.attributes.sort.value = 'none';
        event.target.classList.remove('active', 'desc')
        datatable.sort(compareValues(header.value, 'asc'))
        break;
    }
  }
}

// function for dynamic sorting
const compareValues = (key, order = 'asc') => {
  return function (a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }
    const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA, varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
}
export {sortColumn};