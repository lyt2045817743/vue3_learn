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

function menuBuilder(menuObj) {
    const keys = Object.keys(menuObj);
    const menuList: Array<MenuItem> = [];
    keys.forEach( (item: string) => {
        menuList.push(menuItemBuilder(menuObj, item))
    })
    return menuList;
}

function menuItemBuilder(menuItemObj, itemKey) {
    return {
        menuLabel: itemKey,
        children: menuBuilder(menuItemObj[itemKey] as MenuItem),
    }
}

export default ((menuObj) => {
    const menuList = menuBuilder(menuObj);
    return menuList
})(menuObj)