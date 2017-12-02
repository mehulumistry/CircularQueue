class LinkedList {
    private head: LinkedListItem;
    public size:number = 0;

    constructor(item: LinkedListItem,siz:number) {
        this.head = item;
        this.size = siz;
    }

    // Adds the element at the end of the linked list
    append(val) {
        let currentItem: LinkedListItem = this.head;
        let newItem = new LinkedListItem(val);
        let count = 0;
        while (true) {
            count++;

            if (count <= this.size) {
                if (currentItem.next) {
                    currentItem = currentItem.next;
                }

                else {
                    currentItem.next = newItem;


                    break;
                }
            }
            else{


                this.delete();
                this.append(val);
                count = 0;
                break;

            }
        }

    }
    prepend(val) {
        let newItem = new LinkedListItem(val);
        let oldHead = this.head;

        this.head = newItem;
        newItem.next = oldHead;
    }

    delete() {
        var currentItem = this.head;
        this.head = currentItem.next;
        currentItem.next = null;


    }

    showInArray() {
        let arr = [];
        let currentItem = this.head;

        while (true) {
            arr.push(currentItem.value);

            if (currentItem.next) {
                currentItem = currentItem.next;
            } else {
                break;
            }
        }

        return arr;
    }
}

class LinkedListItem {
    value: any;
    next: LinkedListItem;

    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// while(true) {

input();
let head = new LinkedListItem('');
let linkedList = new LinkedList(head, 4);

function input() {
    rl.question('Enter the number ${count}', function (answer:String) {





        if (answer == "quit") {
            console.log(linkedList.showInArray());
            process.exit();
        }

        linkedList.append(answer);

        //console.log(linkedList.showInArray());

        input();
    });
}
// }