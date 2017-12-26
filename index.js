module.exports = function removeUndefinedProperties (obj, mutate, recursive) {
	const returnObj = {};
	Object.entries(obj).forEach(([key, val]) => {
		if(val === undefined) {
			if (mutate) {
				delete obj[key];
			}
		} else {
      let recursiveVal;
      if (recursive && val !== null && typeof val === 'object') {
        recursiveVal = removeUndefinedProperties(val, mutate, true);
      }
      if (!mutate) {
        returnObj[key] = recursiveVal || val;
      }
    }
	})
	return mutate ? obj : returnObj;
}
