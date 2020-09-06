// User defined class node 
class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        var node = new Node(element);
        var current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            while (current.next) {
                // console.log(current.next + " ashoap");
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node 
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            // add the element to the 
            // first index 
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find 
                // the position to insert 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element 
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    // removes an element from the 
    // specified location 
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element 
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the 
                // position to removce an element 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element 
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element 
            return curr.element;
        }
    }

    // removes a given element from the 
    // list 
    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list 
        while (current != null) {
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    // finds the index of element 
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list 
        while (current != null) {
            // compare each element of the list 
            // with given element 
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found 
        return -1;
    }


    // checks the list for empty 
    isEmpty() {
        return this.size == 0;
    }

    // gives the size of the list 
    size_of_list() {
        console.log(this.size);
    }

    // prints the list items 
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

}


// creating an object for the 
// Linkedlist class 
var ll = new LinkedList();

// testing isEmpty on an empty list 
// returns true 
//console.log(ll.isEmpty());

// adding element to the list 
ll.add(10);
// ll.add(11);

// prints 10 
//ll.printList();

// returns 1 
//console.log(ll.size_of_list());

// adding more elements to the list 
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50 
ll.printList();

// prints 50 from the list 
console.log("is element removed ?" + ll.removeElement(50));

// prints 10 20 30 40 
ll.printList();

// returns 3 
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position 
// ll contains 10 20 60 30 40 
ll.insertAt(60, 2);

ll.printList();

// returns false 
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list 
console.log(ll.removeFrom(3));

// prints 10 20 60 40 
ll.printList(); 
