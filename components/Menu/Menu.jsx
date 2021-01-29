import { MenuItem } from './MenuItem'
import mainData from '../../data/main'
import menuStyles from './menu.module.css'

const Menu = () => {
  return (
    <nav className={menuStyles.menu}>
      { mainData.menu.map(item => <MenuItem key={item.title} to={item.to} title={item.title} />) }
    </nav>
  )
}
export { Menu }
