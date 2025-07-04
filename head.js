// 获取当前页面的URL
const currentLocation = window.location.href;

// 获取所有导航链接
const menuLinks = document.querySelectorAll(".menu a");

// 遍历导航链接，匹配当前URL并添加 active 类
menuLinks.forEach((link) => {
  if (link.href === currentLocation) {
    link.classList.add("active");
  }
});
