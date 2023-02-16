import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { homeMenuList } from 'Redux/selectors'

const getPageMenuList = (menus, level, parentName) =>
  menus[level]
    .filter((menu) => menu.parent === parentName)
    .map(({ name, camelCase: camelCaseString }) => ({
      name,
      camelCaseString
    }))

const PageMenu = () => {
  const menuList = useSelector(homeMenuList)

  const level1MenuList = getPageMenuList(menuList, 'level1', 'root')
  const level2MenuList = (tabName) =>
    getPageMenuList(menuList, 'level2', tabName).map((menu) => ({
      level3List: getPageMenuList(menuList, 'level3', menu.name),
      menuName: menu
    }))

  return (
    <div>
      {level1MenuList.map((item) =>
        level2MenuList(item.name).map((link) => (
          <div key={item.name}>
            <Link to={`/${item.name}/${link.menuName.name}/${link.level3List[0].name}`}>
              {item.camelCaseString}
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default PageMenu
