module.exports = function removeUndefinedProperties (obj, mutate = false, recursive = false) {
	const returnObj = {};
	Object.entries(obj).forEach(([key, val]) => {
		if(val === undefined) {
			if (mutate) {
				delete obj[key];
			}
		} else {
      let recursiveVal;
      if (recursive > 0 && val !== null && typeof val === 'object') {
        recursiveVal = removeUndefinedProperties(val, mutate, typeof recursive === 'number' ? (recursive - 1) : true );
      }
      if (!mutate) {
        returnObj[key] = recursiveVal || val;
      }
    }
	})
	return mutate ? obj : returnObj;
}
