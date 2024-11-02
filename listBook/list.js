// const isLoggedIn = sessionStorage.getItem('loggedIn');
// if(!isLoggedIn){
//     window.location.href = 'dangnhap.html';
// }
let listBook = JSON.parse(localStorage.getItem('listBook')) ?? [];

const $table = document.getElementById('table');
const $buttonCreate = document.getElementById('create');
const $buttonUpdate = document.getElementById('update');
const $code = document.getElementById('code');
const $name_book = document.getElementById('name_book');
const $name_author = document.getElementById('name_author');
const $category = document.getElementById('category');
const $quantity = document.getElementById('quantity');
const $buttonSearch = document.getElementById('search');
const $keywordSearch = document.getElementById('keyword_search');

const renderBooks = (books = listBook) => {
    let rowsBook = '';
    for (let book of books) {
        rowsBook += `
            <tr> 
                <th scope ="row">${book.code}</th>
                <td>${book.name_book}</td>
                <td>${book.name_author}</td>
                <td>${book.category}</td>
                <td>${book.quantity}</td>
                <td>
                    <button class="btn btn-success" onclick="updateBook(${book.code})">Update</button>
                    <button class="btn btn-danger" onClick="deleteBook(${book.code})">Delete</button>
                </td>
            </tr>
        `;
    }
    $table.innerHTML = rowsBook;
};

const clearInput = () => {
    $code.value = '';
    $name_book.value = '';
    $name_author.value = '';
    $category.value = '';
    $quantity.value = '';
};

$buttonCreate.onclick = () => {
    console.log('Create');
    const code = Number($code.value);
    const name_book = $name_book.value;
    const name_author = $name_author.value;
    const category = $category.value;
    const quantity = $quantity.value;

    for(let book of listBook){
        if(book.code === code){
            document.getElementById('error_code').innerHTML = 'Mã đã tồn tại';
            return;
        }
    }
    const newBook = {
        code,
        name_book,
        name_author,
        category,
        quantity,
    };
    
    listBook.push(newBook);
    renderBooks();
    clearInput();
    localStorage.setItem('listBook', JSON.stringify(listBook));
    document.getElementById('error_code').innerHTML = '';
};
//delete
const deleteBook = (code) => {
    let index = -1;
    for(let i = 0; i < listBook.length;i++){
        if(listBook[i].code === code){
            index = i;
        }
    }
    listBook.splice(index,1);
    renderBooks();
    localStorage.setItem('listBook',JSON.stringify(listBook));
};

//update
const updateBook = (codeBookUpdate) => {
    console.log('codeBookUpdate: ',codeBookUpdate);
    let index = -1;
    for(let i = 0;i < listBook.length;i++){
        if(listBook[i].code === codeBookUpdate){
            index = i;
        }
    }
    console.log('listBook[index]:',listBook[index]);
    const{code, name_book,name_author,category,quantity} = 
    listBook[index];
    $code.value = code;
    $name_book.value = name_book;
    $name_author.value = name_author;
    $category.value = category;
    $quantity.value = quantity;

    $code.disabled = true;

    $buttonUpdate.style.display = 'inline';
    $buttonCreate.style.display = 'none';
};
$buttonUpdate.onclick = () => {
    const code = Number($code.value);
    const name_book = $name_book.value;
    const name_author = $name_author.value;
    const category = $category.value;
    const quantity = $quantity.value;
    const bookUpdate = {
        code, 
        name_book,
        name_author,
        category,
        quantity,
    };
    let index = -1;
    for(let i = 0;i < listBook.length; i++){
        if(listBook[i].code === code){
            index = i;
        }
    }
    console.log('index: ',index);
    listBook[index] = bookUpdate;
    renderBooks();
    clearInput();
    $code.disabled = false;
	$buttonUpdate.style.display = 'none';
	$buttonCreate.style.display = 'inline';
    localStorage.setItem('listBook',JSON.stringify(listBook));   
};

// Handle book search
$keywordSearch.oninput = () => {
    console.log('Searching...');
    const keywordSearch = $keywordSearch.value;
    const result = listBook.filter((book) =>{
        return book.name_book && book.name_book.toLowerCase().includes(keywordSearch.toLowerCase());
    });
    renderBooks(result);
};

renderBooks();