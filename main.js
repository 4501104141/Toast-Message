// // Show toast function
// <div class="toast toast--success">
//     <div class="toast__icon">
//         <i class="fa-solid fa-circle-check"></i>
//     </div>
//     <div class="toast__body">
//         <h3 class="toast__title">Success</h3>
//         <p class="toast__msg">Thành công</p>
//     </div>
//     <div class="toast__close">
//         <i class="fa-solid fa-square-xmark"></i>
//     </div>
// </div>
function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const icons = {
            success: 'fas fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-exclamation',
        }
        //Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast)
        }, duration + 1000)
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        const toast = document.createElement('div');
        //Remove toast when click
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-square-xmark"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}
function showSuccessToast() {
    toast({
        title: 'Thanh cong',
        message: 'Ket noi thanh cong',
        type: 'success',
        duration: 5000
    });
}
function showErrorToast() {
    toast({
        title: 'That bai',
        message: 'Ket noi that bai',
        type: 'error',
        duration: 5000
    });
}