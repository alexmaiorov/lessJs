obj = {
    a: 1,
	b: [
		{
			a: 2,
			b: [
				{a: 3, c: 'qwe1'}, {a: 3, c: 'qwe2'}, {a: 3, c: 'qwe3'}
			]
		},
		{
			a: 2,
			b: [
				{a: 3, c: 'qwer1'}, {a: 3, c: 'qwer2'}
			]
		},
		{
			a: 2,
			b: [
				{a: 3, c: 'qwert1'}
			]
		}
	]
}

let res = []
function forrestGump(obj) {
    if (obj['c']) {
        res.push(obj)
    } else {
        for (let el in obj) {
            if (typeof(obj[el]) === 'object') forrestGump(obj[el])
        }
    }
    return res;
}
console.log(forrestGump(obj));