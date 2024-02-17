const tabContentItems = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabItemsParent = document.querySelector('.tab_content_items');

let currentTab = 0;
let intervalId; 

const hideTabContent = () => {
    tabContentItems.forEach((item) => {
        item.style.display = 'none';
    });
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    hideTabContent();
    tabContentItems[index].style.display = 'block';
    tabItems[index].classList.add('tab_content_item_active');
};


showTabContent(currentTab);

const autoSlide = () => {
    currentTab = (currentTab + 1) % tabItems.length;
    showTabContent(currentTab);
};


intervalId = setInterval(autoSlide, 3000);

tabItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                currentTab = tabIndex;
                hideTabContent();
                showTabContent(tabIndex);
                clearInterval(intervalId); 
                intervalId = setInterval(autoSlide, 3000); 
            }
        });
    }
};
