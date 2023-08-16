const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');//ul yi çekecek
const search=document.querySelector('.search input');

addForm.addEventListener('submit',e=>{ //yeni bir iş ekleme
    e.preventDefault();//sayfanın yenilenmesini engelledik
    const todo=addForm.added.value.trim(); //addform içindeki name attribute u added olanın değeri
    //trim() başındaki ve sonundaki boşlukları sileck
    if(todo.length>0){ //boş yazıyı listeye ekleyemesin diye
        generateTemplate(todo);
        addForm.reset();//todo ekleme yapıp entera bastıktan sonra yazılar hala text boxta kalmasın diye
    }

})

const generateTemplate=todoText=>{ //html template oluşturacağız//yeni bir iş eklerken html template haline gtr
    const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
                     <span>${todoText}</span>
                     <i class="fa-regular fa-trash-can fa-lg delete" style="color: #d3d3dc;"></i>
                </li>`;
    list.innerHTML+=html;
}
list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})
const filterTodos=term=>{ //aramaya yazılan içeriği içermeyen li ler görünmez hale getirildi..filtered classı verildi.
    Array.from(list.children)
    .filter(todo=>!todo.textContent.toLowerCase().includes(term))
    .forEach(todo=>todo.classList.add('filtered'));
}

//klavyeye her bastığında 'keydown' eventi tetiklenir,bıraktığında 'keyup' eventi tetiklenir.
//genelde keyup eventi dikkate alınır.
search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase();
    //console.log(term);
    filterTodos(term);
})