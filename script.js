const panelsObj = [
    {
        text: 'Panel 1',
        backImgSrc: "url('https://images.unsplash.com/photo-1677947244400-8d7cae6166bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
    },

    {
        text: 'Panel 2',
        backImgSrc: "url('https://images.unsplash.com/photo-1678123403273-68aaa142c6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
    },

    {
        text: 'Panel 3',
        backImgSrc: "url('https://images.unsplash.com/photo-1678132852119-c03c2e7d2740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')"
    },
    {
        text: 'Panel 3',
        backImgSrc: "url('https://images.unsplash.com/photo-1678043639743-701a20014abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80')"
    },
    {
        text: 'Panel 3',
        backImgSrc: "url('https://images.unsplash.com/photo-1677747410126-4500e928cfa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')"
    }


];

let containerDiv = document.querySelector(".container");

function createPanels(singlePanel) {
    const panelDiv = document.createElement('div');
    panelDiv.id = '#panel';
    panelDiv.className = 'panel';
    panelDiv.style.backgroundImage = `${singlePanel.backImgSrc}`;
    //panelDiv.style.height = "80vh";
    panelDiv.innerHTML = `<h3>${singlePanel.text}</h3>`;
    containerDiv.appendChild(panelDiv);
}

panelsObj.forEach((eachPanel) => {
    createPanels(eachPanel);
});

const panels = document.querySelectorAll('.panel');

function removeAllActives(){
    panels.forEach((p)=>{
        p.classList.remove('active');
    })
    console.log("All active classes removed!");
}

panels.forEach((p)=> {
    p.addEventListener('click',()=>{
        removeAllActives();
        p.classList.add('active');
        console.log("active added to Panel : ",p);
    })
})