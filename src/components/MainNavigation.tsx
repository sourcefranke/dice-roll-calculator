import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) => isActive ? classes.active : ''}
                            end
                        >
                            Dice Rolls
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({isActive}) => isActive ? classes.active : ''}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
