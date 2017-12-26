module.exports = function removeUndefinedProperties (obj, mutate) {
	const returnObj = {};
	Object.entries(obj).forEach(entry => {
		if(entry[1] === undefined) {
			if (mutate) {
				delete obj[entry[0]];
			}
		} else if (!mutate) {
      returnObj[entry[0]] = entry[1];
    }
	})
	return mutate ? obj : returnObj;
}
