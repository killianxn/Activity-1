function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // 1. Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 2. Remove active class from all buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 3. Show selected tab content and add active class to button
    var currentContent = document.getElementById(tabName);
    currentContent.style.display = "block";
    evt.currentTarget.classList.add("active");

    // 4. Get the active button's background-color and text color
    var buttonStyle = window.getComputedStyle(evt.currentTarget);
    var bgColor = buttonStyle.backgroundColor;
    var textColor = buttonStyle.color;

    // 5. Apply colors directly to the open tab content box
    currentContent.style.backgroundColor = bgColor;
    currentContent.style.color = textColor;
    }

    // Ensure the initial active tab gets its matching color on load
document.addEventListener("DOMContentLoaded", function() {
    var activeBtn = document.querySelector(".tablinks.active");
    var activeContent = document.querySelector(".tabcontent[style*='display: block']");

    if (activeBtn && activeContent) {
        var btnStyle = window.getComputedStyle(activeBtn);
        activeContent.style.backgroundColor = btnStyle.backgroundColor;
        activeContent.style.color = btnStyle.color;
    }
});
// order and colors must match your 4 tab buttons exactly
const tabOrder = [
    { id: '★ About Me',   bg: 'rgba(241, 207, 84)', color: 'rgba(117, 19, 17)' },
    { id: '★ Education',  bg: 'rgba(232, 175, 107)', color: 'rgba(117, 19, 17)' },
    { id: '★ More',       bg: 'rgba(190, 42, 40)',  color: 'rgba(254, 245, 213)' },
    { id: '★ Contact',    bg: 'rgba(168, 170, 66)', color: 'rgba(254, 245, 213)' }
];

function changeTab(direction) {
    // find which tab is currently open
    const currentIndex = tabOrder.findIndex(tab => {
        const el = document.getElementById(tab.id);
        return el && el.style.display === 'block';
    });

    // wrap around: -1 -> loops to last tab, past last -> loops to first
    let nextIndex = (currentIndex + direction + tabOrder.length) % tabOrder.length;
    const nextTab = tabOrder[nextIndex];

    // find the matching button by its text content and simulate a click on it
    const buttons = document.querySelectorAll('.tablinks');
    buttons.forEach(btn => {
        if (btn.textContent.trim() === nextTab.id) {
            openTab({ currentTarget: btn }, nextTab.id, nextTab.bg, nextTab.color);
        }
    });
}
