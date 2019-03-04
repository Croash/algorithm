const swapArr = (arr,a,b) => {
	[arr[a],arr[b]] = [arr[b],arr[a]]
}

const partition = (data,first,last) => {
	const mid = data[last]
	let i=first,
		j=first
	for(;j<=last-1;j++) {
		if(data[j]<mid) {
			swapArr(data,i,j)
			i++
		}
	}
	swapArr(data,i,last)
	return i
}
const QuickSort = (data,i,j) => {
  if(i<j) {
		console.log(i,j)
		const mid = partition(data,i,j)
		QuickSort(data,i,mid-1)
		QuickSort(data,mid,j)
	}
}

module.exports = QuickSort
