function solution(scoville, K) {
    const minHeap = new MinHeap();
    scoville.forEach(i => minHeap.push(i))
    let count = 0;
    while(minHeap.heap[0] < K){
        if(minHeap.size() < 2) return -1
        const first = minHeap.pop();
        const second = minHeap.pop();   
        
        const next = first + second * 2;
        minHeap.push(next)
        count ++;
    }
    
    return count;
}

/** 
가장 맵지 않은 지수를 찾기 -> sort() 방식으로 찾으니 런타임 에러
정렬이 자동으로 되는 자료구조
-> 최소 힙
const new = heap.pop() + heap.root() * 2
heap.pop()
heap.add(new)
*/ 

class MinHeap {
  constructor() {
    this.heap = [];
  }
  size(){
    return this.heap.length;
  }
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}