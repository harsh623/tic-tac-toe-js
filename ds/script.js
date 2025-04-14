class drawArray {
    constructor() {
        this.array = [];
    }

    insert(data) {
        this.array.push(data);
        this.insertRectangle(data);
    }
    pop() {
        this.array.pop();
        this.deleteRectangle();
    }

    // draw scenarios
    insertRectangle(data) {
        const active = document.querySelectorAll('.insert');
        active.forEach(ele => ele.classList.remove('insert'));

        document.getElementById('arrayDiv').innerHTML += `<div class="col insert" id="array_${this.array.length - 1}">${data}</div>`;
    }

    deleteRectangle() {
        const poppedEle = document.getElementById(`array_${this.array.length}`);
        poppedEle.classList.add('pop');
        poppedEle.remove();
    }

    traverse() {
        const arrayEles = document.getElementsByClassName("col");
        console.log("+++arrayEles", arrayEles)

        for (let i=0; i<=arrayEles.length; i++) {
            setTimeout(()=> {
                const highlighted = document.querySelectorAll('.highlight');
                highlighted.forEach(ele2 => ele2.classList.remove('highlight'));
                if (i!== arrayEles.length) {
                    arrayEles[i].classList.add('highlight');
                }
            }, i*300)
        }
    }
}

let array = new drawArray();

function insertOnscreen() {
    const inputEle = document.getElementById('insertValue');
    let data = inputEle.value;
    if (data) {
        inputEle.value = null;
        array.insert(data);
        console.log(data);
    }
}

function deleteOnscreen() {
    array.pop();
}
