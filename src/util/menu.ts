import menuObj from "../static/menuObj";

interface MenuItem {
    menuLabel: string,
    children?: Array<MenuItem>
}

export const menuList: Array<MenuItem> = [{
    menuLabel: 'Vue升级的功能',
    children: [{
        menuLabel: ''
    }]
}]

export const menu = (() => {
    console.log(menuObj);
    return ''
})()