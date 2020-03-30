function MenuItem(href, title, liClass, aClass) {
    this.href = href;
    this.title = title;
    this.liClass = liClass;
    this.aClass = aClass;
}

MenuItem.prototype.render = function () {
    return `<li class="${this.liClass}"><a class="${this.aClass}" href="${this.href}">${this.title}</a></li>`;
};