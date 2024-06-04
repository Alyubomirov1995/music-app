import {NavLink, Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';
import cn from 'classnames';


export function Layout() {


	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<div className={styles['avatar']}>
					<img id="avatar" src="/avatarka.svg" height={150} alt="Аватарка" />
				</div>
				<div className={styles['name']}>Всеволод Вертолётов</div>
				<div className={styles['email']}>helic@ya.ru</div>
				<div className={styles['status']}>Ученик</div>


			</div>
			
			<div className={styles['menu']}>
				<NavLink to='/profile' className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/menu-icon.svg" alt="Иконка меню"/> Моя Страница</NavLink>
				<NavLink to='/date' className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/menu-icon.svg" alt="Иконка меню" />
					Расписание</NavLink>
				<NavLink to='/teach' className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/menu-icon.svg" alt="Иконка меню"/>
					Педагог 
				</NavLink>
				<NavLink to='/Media' className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/menu-icon.svg" alt="Иконка меню" />
					Медиа</NavLink>
				<NavLink to='/Check' className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/menu-icon.svg" alt="Иконка меню"/>
					Запись на занятие
				</NavLink>	
			</div>
			<div className={styles['piano']}>
				<img src="/piano.jpg" alt="" />
			</div>
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>;
}



