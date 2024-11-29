import { Link } from "react-router-dom"
import { ROUTES } from "../App"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to={ROUTES.homePage.path}>{ROUTES.homePage.name}</Link>
        <Link to={ROUTES.crewPage.path}>{ROUTES.crewPage.name}</Link>
        <Link to={ROUTES.adventurePage.path}>{ROUTES.adventurePage.name}</Link>
        <Link to={ROUTES.aboutPage.path}>{ROUTES.aboutPage.name}</Link>
      </div>
    </nav>
  )
}

export default Navbar