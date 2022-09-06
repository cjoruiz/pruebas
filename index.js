const homeMainImages = document.querySelector('.home-main-images');
const homeImagesContainer = document.createElement('div');
homeImagesContainer.classList.add('home-main-images-container');
homeMainImages.appendChild(homeImagesContainer);
const projectList = [];
projectList.push({
    title:'ejemplo de tienda online',
    image:'./css/font/foto_no_exif (1).jpg',
    URL: 'https://cjoruiz.github.io/curso-frontend-developer-javascript-practico/',
})
projectList.push({
    title:'my check list',
    image:'./css/font/myCheckList.jpg',
    URL: 'https://cjoruiz.github.io/my-chechk-list/',
})
projectList.push({
    title:'tienda nn',
    image:'./css/font/foto_no_exif (1).jpg',
    URL: 'https://cjoruiz.github.io/',
})

function renderProjects(arr){
    for (project of projectList){

    const projectPage =project.URL
const openProject= () =>{window.location.assign(projectPage);}

const productInfoFigure = document.createElement('figure');
productInfoFigure.setAttribute('class','home-images-section')
const productImgCart = document.createElement('img');
productImgCart.setAttribute('class','home-images-img');

const productInfo= document.createElement('div');
const projectTitle = document.createElement('p');

projectTitle.innerText = project.title;
productInfo.appendChild(projectTitle);
productImgCart.setAttribute('src', project.image);

productInfoFigure.addEventListener('click', openProject);

productInfoFigure.appendChild(productImgCart);
productInfoFigure.appendChild(productInfo);
homeImagesContainer.appendChild(productInfoFigure);

}}

renderProjects(projectList);
